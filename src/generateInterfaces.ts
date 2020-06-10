import ts from 'typescript';
import _ from 'lodash';
import { pascal } from 'case';

import type { OpenAPIObject, ComponentsObject, SchemaObject, ReferenceObject, RequestBodyObject } from 'openapi3-ts';
import { isReferenceObject } from 'openapi3-ts';

import type { TupleWithDependencies } from './helpers';
import { isEmptyObject, mapWithDeps, transformType } from './helpers';

function formatDescription(description: string, tabSize = 0): string {
  return `*\n${description
    .split('\n')
    .map(str => `${' '.repeat(tabSize)} * ${str}`)
    .join('\n')}\n `;
}

function addMetadataToNode<T extends ts.Node>(
  node: T,
  schema: SchemaObject | ReferenceObject | RequestBodyObject
): void {
  const comments: string[] = [];

  if (!isReferenceObject(schema)) {
    if (schema.description) comments.push(schema.description);

    if (schema.format) comments.push(`@format ${schema.format}`);

    if (schema.default) comments.push(`@default ${schema.default}`);

    if (schema.example) comments.push(`@example\n${schema.example}`);

    if (schema.deprecated) comments.push('@deprecated');
  }

  if (comments.length > 0) {
    ts.addSyntheticLeadingComment(
      node,
      ts.SyntaxKind.MultiLineCommentTrivia,
      formatDescription(comments.join('\n')),
      true
    );
  }
}

function getFreeFormProperty(
  [typeNode, dependencies]: [ts.TypeNode, string[]] = [ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword), []]
): TupleWithDependencies<ts.TypeElement> {
  return [
    ts.createIndexSignature(
      /* decorators */ undefined,
      /* modifiers */ undefined,
      /* parameters*/ [
        ts.createParameter(
          /* decorators */ undefined,
          /* modifiers */ undefined,
          /* spread token */ undefined,
          /* name */ 'key',
          /* questionToken */ undefined,
          /* type */ ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
          /* initializer */ undefined
        )
      ],
      /* type */ typeNode
    ),
    dependencies
  ];
}

function getRef($ref: string): TupleWithDependencies<ts.TypeNode> {
  let type = '';

  if ($ref.startsWith('#/components/schemas')) {
    type = pascal($ref.replace('#/components/schemas/', ''));
  } else if ($ref.startsWith('#/components/responses')) {
    type = pascal($ref.replace('#/components/responses/', '')) + 'Response';
  } else if ($ref.startsWith('#/components/parameters')) {
    type = pascal($ref.replace('#/components/parameters/', '')) + 'Parameter';
  } else if ($ref.startsWith('#/components/requestBodies')) {
    type = pascal($ref.replace('#/components/requestBodies/', '')) + 'RequestBody';
  } else {
    throw new Error('This library only resolve $ref that are include into `#/components/*` for now');
  }

  return [ts.createTypeReferenceNode(type, []), [type]];
}

function getObjectProperties(item: SchemaObject): TupleWithDependencies<ts.TypeElement[]> {
  if (!item.type && !_.has(item, 'properties') && !_.has(item, 'additionalProperties')) {
    return [[], []];
  }

  if (item.type === 'object' && !_.has(item, 'properties')) {
    if (
      !_.has(item, 'additionalProperties') ||
      isEmptyObject(item.additionalProperties) ||
      item.additionalProperties === true
    ) {
      return transformType(getFreeFormProperty(), type => [type]);
    }

    if (item.additionalProperties === false) {
      return [[], []];
    }

    if (item.additionalProperties) {
      return transformType(getFreeFormProperty(resolveValue(item.additionalProperties)), type => [type]);
    }
  }

  if (item.properties) {
    const [propetySignatures, dependencies] = mapWithDeps(Object.entries(item.properties), ([name, schema]) => {
      return transformType(getScalar(schema), typeNode => {
        const propertySignature = ts.createPropertySignature(
          /* modifiers */ undefined,
          /* name*/ name,
          /* questionToken */ item.required?.includes(name) ? undefined : ts.createToken(ts.SyntaxKind.QuestionToken),
          /* type */ typeNode,
          /* initializer */ undefined
        );

        addMetadataToNode(propertySignature, schema);

        return propertySignature;
      });
    });

    if (item.additionalProperties) {
      const [typeNode, moreDependencies] = getFreeFormProperty(
        item.additionalProperties === true ? undefined : resolveValue(item.additionalProperties)
      );
      propetySignatures.push(...(typeNode as any));
      dependencies.push(...moreDependencies);
    }

    return [propetySignatures, dependencies];
  }

  return [[], []];
}

function getObject(item: SchemaObject): TupleWithDependencies<ts.TypeNode> {
  if (isReferenceObject(item)) {
    return getRef(item.$ref);
  }

  if (item.allOf) {
    const mappedValues = mapWithDeps(item.allOf, resolveValue);

    return transformType(mappedValues, typeNode => ts.createIntersectionTypeNode(typeNode));
  }

  if (item.oneOf) {
    const mappedValues = mapWithDeps(item.oneOf, resolveValue);

    return transformType(mappedValues, typeNode => ts.createUnionTypeNode(typeNode));
    // const [types, dependencies] = item.oneOf.reduce<[ts.TypeNode[], string[]]>(
    //   (accumulator, schema) => {
    //     const [typeNode, deps] = resolveValue(schema);
    //     accumulator[0].push(typeNode);
    //     accumulator[1].push(...deps);

    //     return accumulator;
    //   },
    //   [[], []]
    // );
    // return [ts.createUnionTypeNode(types), dependencies];
  }

  return transformType(getObjectProperties(item), typeNode => ts.createTypeLiteralNode(typeNode));
}

function getArray(item: SchemaObject): TupleWithDependencies<ts.TypeNode> {
  if (item.items) {
    return transformType(getScalar(item.items), typeNode => {
      if (ts.isUnionTypeNode(typeNode) || ts.isIntersectionTypeNode(typeNode)) {
        return ts.createTypeReferenceNode('Array', [typeNode]);
      }

      return ts.createArrayTypeNode(typeNode);
    });
  } else {
    throw new Error('All arrays must have an `items` key define');
  }
}

function getScalar(item: SchemaObject): TupleWithDependencies<ts.TypeNode> {
  let type: ts.TypeNode;
  let deps: string[] = [];

  switch (item.type) {
    case 'int32':
    case 'int64':
    case 'number':
    case 'integer':
    case 'long':
    case 'float':
    case 'double':
      type = ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
      break;
    case 'boolean':
      type = ts.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword);
      break;
    case 'array':
      [type, deps] = getArray(item);
      break;
    case 'string':
    case 'byte':
    case 'binary':
    case 'date':
    case 'dateTime':
    case 'date-time':
    case 'password':
      type = item.enum
        ? ts.createUnionTypeNode(
            item.enum.map((name: string) => ts.createLiteralTypeNode(ts.createStringLiteral(name)))
          )
        : ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);
      break;
    case 'void':
      type = ts.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword);
      break;
    case 'object':
    default:
      [type, deps] = getObject(item);
  }

  if (item.nullable) {
    type = ts.createUnionTypeNode([type, ts.createKeywordTypeNode(ts.SyntaxKind.NullKeyword)]);
  }

  return [type, deps];
}

export function resolveValue(schema: SchemaObject): TupleWithDependencies<ts.TypeNode> {
  return isReferenceObject(schema) ? getRef(schema.$ref) : getScalar(schema);
}

function generateInterface(name: string, schema: SchemaObject): TupleWithDependencies<ts.Statement> {
  return transformType(getObjectProperties(schema), members => {
    const node = ts.createInterfaceDeclaration(
      /* decorators */ undefined,
      /* modifiers */ [ts.createModifier(ts.SyntaxKind.ExportKeyword)],
      /* name */ pascal(name),
      /* typeParameters */ undefined,
      /** heritageClause */ undefined,
      /* members */ members
    );

    addMetadataToNode(node, schema);

    return node;
  });
}

function generateTypeDeclaration(name: string, schema: SchemaObject): TupleWithDependencies<ts.Statement> {
  return transformType(resolveValue(schema), typeNode => {
    const declaration = ts.createTypeAliasDeclaration(
      /* decorators */ undefined,
      /* modifiers */ [ts.createModifier(ts.SyntaxKind.ExportKeyword)],
      /* name */ pascal(name),
      /* typeParameters */ undefined,
      /* type */ typeNode
    );

    addMetadataToNode(declaration, schema);

    return declaration;
  });
}

function generateSchemaDefintions(
  schemas: ComponentsObject['schemas'] = {}
): Array<TupleWithDependencies<ts.Statement>> {
  const data = Object.entries(schemas);

  if (data.length === 0) return [];

  return data.map(([name, schema]) => {
    if (
      !isReferenceObject(schema) &&
      (!schema.type || schema.type === 'object') &&
      !schema.allOf &&
      !schema.oneOf &&
      !schema.nullable
    ) {
      return generateInterface(name, schema);
    } else {
      return generateTypeDeclaration(name, schema);
    }
  });
}

function getReqResDefintion(
  requestOrResponse: Array<[string, RequestBodyObject | ReferenceObject]>
): Array<ReferenceObject | SchemaObject> {
  return requestOrResponse.map<ReferenceObject | SchemaObject>(([_1, res]) => {
    if (isReferenceObject(res)) {
      return res;
    }

    if (res.content) {
      const content = Object.entries(res.content).find(
        ([mediaType, schema]) =>
          mediaType.startsWith('application/json') ||
          (mediaType.startsWith('application/octet-stream') && schema.schema)
      );

      return content?.[1].schema ? content[1].schema : { type: 'void' };
    }

    return { type: 'void' };
  });
}

function generateRequestBodiesDefinition(
  schemas: ComponentsObject['requestBodies'] = {}
): Array<TupleWithDependencies<ts.Statement>> {
  const data = Object.entries(schemas);

  if (data.length === 0) return [];

  return data.map(([name, requestBody]) => {
    const definitions = getReqResDefintion([['', requestBody]]);
    const finalName = `${pascal(name)}RequestBody`;

    if (definitions.length === 1) {
      return generateInterface(finalName, definitions[0]);
    } else {
      return transformType(mapWithDeps(definitions, resolveValue), typeNode => {
        const declaration = ts.createTypeAliasDeclaration(
          /* decorators */ undefined,
          /* modifiers */ [ts.createModifier(ts.SyntaxKind.ExportKeyword)],
          /* name */ finalName,
          /* typeParameters */ undefined,
          /* type */ ts.createUnionTypeNode(typeNode)
        );

        // TODO: Add metadata to node

        return declaration;
      });
    }
  });
}

export interface Options {
  spec: OpenAPIObject;
  useTypeOnlyImportExport?: boolean;
}

export interface GeneratedInterface {
  statement: ts.Statement;
  dependencies: string[];
}

export default function generateInterfacesFromSpec(options: Options): Array<TupleWithDependencies<ts.Statement>> {
  const { spec } = options;

  const output: Array<TupleWithDependencies<ts.Statement>> = [];

  if (spec.components) {
    if (spec.components.schemas) output.push(...generateSchemaDefintions(spec.components.schemas));
    if (spec.components.requestBodies) output.push(...generateRequestBodiesDefinition(spec.components.requestBodies));
  }

  return output;
}
