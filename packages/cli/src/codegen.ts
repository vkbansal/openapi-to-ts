import type {
  ReferenceObject,
  SchemaObject,
  RequestBodyObject
} from 'openapi3-ts';
import { has, isEmpty, isPlainObject, sortBy } from 'lodash';
import { pascalCase } from 'pascal-case';

export interface ObjectProps {
  key: string;
  value: string;
  comment?: string;
}

export function objectPropsToStr({ comment, key, value }: ObjectProps): string {
  const str = `  ${key}: ${value};`;

  return comment ? `${comment}\n${str}` : str;
}

export function addMetadata(
  schema: SchemaObject | ReferenceObject | RequestBodyObject
): string {
  const comments: string[] = [];

  if (!isReferenceObject(schema)) {
    if (schema.description) comments.push('  * ' + schema.description);

    if ((schema as SchemaObject).format)
      comments.push(`  * @format ${(schema as SchemaObject).format}`);

    if ((schema as SchemaObject).default)
      comments.push(`  * @default ${(schema as SchemaObject).default}`);

    if ((schema as SchemaObject).example)
      comments.push(`  * @example\n${(schema as SchemaObject).example}`);

    if ((schema as SchemaObject).deprecated) comments.push('@deprecated');
  }

  if (comments.length > 0) {
    return ['  /**', ...comments, '  */'].join('\n');
  }

  return '';
}

export function getNameForType(name: string): string {
  return pascalCase(name);
}

export function getNameForResponse(name: string): string {
  return getNameForType(name) + 'Response';
}

export function getNameForErrorResponse(name: string): string {
  return getNameForType(name) + 'Error';
}

export function getNameForParameter(name: string): string {
  return getNameForType(name) + 'Parameter';
}

export function getNameForRequestBody(name: string): string {
  return getNameForType(name) + 'RequestBody';
}

export function getNameForPathParams(name: string): string {
  return getNameForType(name) + 'PathParams';
}

export function getNameForQueryParams(name: string): string {
  return getNameForType(name) + 'QueryParams';
}

export function isReferenceObject(data: unknown): data is ReferenceObject {
  return typeof data === 'object' && data !== null && has(data, '$ref');
}

export function isEmptyObject(obj: unknown): boolean {
  return isPlainObject(obj) && isEmpty(obj);
}

export function formatDescription(description: string, tabSize = 0): string {
  return `*
${description
  .split('\n')
  .map(str => `${' '.repeat(tabSize)} * ${str}`)
  .join('\n')}

  `;
}

export function createObjectProperties(
  item: SchemaObject,
  imports: string[]
): ObjectProps[] {
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
      ([name, schema]): ObjectProps => ({
        key: item.required?.includes(name) ? name : `${name}?`,
        value: resolveValue(schema, imports),
        comment: addMetadata(schema)
      })
    );

    if (item.additionalProperties) {
      props.push(
        createFreeFormProperty(
          item.additionalProperties === true
            ? undefined
            : resolveValue(item.additionalProperties, imports)
        )
      );
    }

    return props;
  }

  return [];
}

export function createFreeFormProperty(valueType = 'any'): ObjectProps {
  return { key: '[key: string]', value: valueType };
}

export function resolveValue(
  schema: SchemaObject | ReferenceObject,
  imports: string[]
): string {
  return isReferenceObject(schema)
    ? createReferenceNode(schema.$ref, imports)
    : createScalarNode(schema, imports);
}

export function createArray(item: SchemaObject, imports: string[]): string {
  if (item.items) {
    const value = resolveValue(item.items, imports);
    return value.match(/\W/) ? `Array<${value}>` : `${value}[]`;
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
    .map(objectPropsToStr)
    .join('\n');

  return '{\n' + props + `\n}`;
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

export function createInterface(name: string, schema: SchemaObject): string {
  const finalName = getNameForType(name);
  const imports: string[] = [];
  const properties = createObjectProperties(schema, imports);

  return [
    ...imports,
    addMetadata(schema),
    `export interface ${finalName} {`,
    ...properties.map(objectPropsToStr),
    '}'
  ]
    .join('\n')
    .trim();
}

export function createTypeDeclaration(
  name: string,
  schema: SchemaObject | ReferenceObject
): string {
  const finalName = getNameForType(name);
  const imports: string[] = [];
  const value = resolveValue(schema, imports);

  return [
    ...imports,
    addMetadata(schema),
    `export type ${finalName} = ${value};`
  ].join('\n');
}
