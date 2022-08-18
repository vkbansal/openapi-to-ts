import type { ReferenceObject, SchemaObject } from 'openapi3-ts';
import { has, sortBy } from 'lodash';

import {
  getNameForParameter,
  getNameForRequestBody,
  getNameForResponse,
  getNameForType,
  isEmptyObject,
  isReferenceObject
} from './utils';

export function createInterface(name: string, schema: SchemaObject): string {
  const finalName = getNameForType(name);
  const imports: string[] = [];
  const properties = createObjectProperties(schema, imports);

  return [
    ...imports,
    '\n',
    `export interface ${finalName} {`,
    ...properties.map(({ key, value }) => `  ${key}: ${value}`),
    '}'
  ].join('\n');
}

export interface KeyValue {
  key: string;
  value: string;
}

export function createReferenceNode($ref: string, imports: string[]): string {
  let type = '';

  if ($ref.startsWith('#/components/schemas')) {
    type = getNameForType($ref.replace('#/components/schemas/', ''));
    imports.push(`import { ${type} } from '../schemas/${type}'`);
  } else if ($ref.startsWith('#/components/responses')) {
    type = getNameForResponse($ref.replace('#/components/responses/', ''));
    imports.push(`import { ${type} } from '../responses/${type}'`);
  } else if ($ref.startsWith('#/components/parameters')) {
    type = getNameForParameter($ref.replace('#/components/parameters/', ''));
    imports.push(`import { ${type} } from '../parameters/${type}'`);
  } else if ($ref.startsWith('#/components/requestBodies')) {
    type = getNameForRequestBody(
      $ref.replace('#/components/requestBodies/', '')
    );
    imports.push(`import { ${type} } from '../requestBodies/${type}'`);
  } else {
    throw new Error(
      'This library only resolve $ref that are include into `#/components/*` for now'
    );
  }

  return type;
}

export function createArray(item: SchemaObject, imports: string[]): string {
  if (item.items) {
    return `Array<${resolveValue(item.items, imports)}>`;
  } else {
    throw new Error('All arrays must have an `items` key define');
  }
}

export function createObject(item: SchemaObject, imports: string[]): string {
  if (isReferenceObject(item)) {
    return createReferenceNode(item.$ref, imports);
  }

  if (Array.isArray(item.allOf)) {
    return item.allOf.map(entry => resolveValue(entry, imports)).join(' | ');
  }

  if (Array.isArray(item.oneOf)) {
    return item.oneOf.map(entry => resolveValue(entry, imports)).join(' & ');
  }

  const props = createObjectProperties(item, imports)
    .map(({ key, value }) => `${key}: ${value},`)
    .join('\n');

  return '{\n' + props + `\n}`;
}

export function createScalarNode(
  item: SchemaObject,
  imports: string[]
): string {
  let type = 'unknown';

  switch (item.type) {
    case 'number':
    case 'integer':
      type = 'number';
      break;
    case 'boolean':
      type = 'boolean';
      break;
    case 'array': {
      type = createArray(item, imports);
      break;
    }
    case 'string':
      type = item.enum
        ? item.enum
            .sort()
            .map((name: string) => JSON.stringify(name))
            .join(' | ')
        : 'string';
      break;
    case 'object':
    default: {
      type = createObject(item, imports);
    }
  }

  if (item.nullable) {
    type = `${type} | null`;
  }

  return type;
}

export function resolveValue(
  schema: SchemaObject | ReferenceObject,
  imports: string[]
): string {
  return isReferenceObject(schema)
    ? createReferenceNode(schema.$ref, imports)
    : createScalarNode(schema, imports);
}

export function createFreeFormProperty(valueType = 'any'): KeyValue {
  return { key: '[key: string]', value: valueType };
}

export function createObjectProperties(
  item: SchemaObject,
  imports: string[]
): KeyValue[] {
  if (
    !item.type &&
    !has(item, 'properties') &&
    !has(item, 'additionalProperties')
  ) {
    return [];
  }

  if (item.type === 'object' && !has(item, 'properties')) {
    if (
      !has(item, 'additionalProperties') ||
      isEmptyObject(item.additionalProperties) ||
      item.additionalProperties === true
    ) {
      return [createFreeFormProperty()];
    }

    if (item.additionalProperties === false) {
      return [];
    }

    if (item.additionalProperties) {
      return [
        createFreeFormProperty(resolveValue(item.additionalProperties, imports))
      ];
    }
  }

  if (item.properties) {
    const props = sortBy(Object.entries(item.properties), ([key]) => key).map(
      ([name, schema]): KeyValue => ({
        key: name,
        value: resolveValue(schema, imports)
      })
    );

    if (item.additionalProperties) {
      props.push(createFreeFormProperty());
    }

    return props;
  }

  return [];
}
