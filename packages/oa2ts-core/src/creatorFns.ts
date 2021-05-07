import type {
  ReferenceObject,
  RequestBodyObject,
  ResponsesObject,
  SchemaObject
} from 'openapi3-ts';
import { has, sortBy } from 'lodash';
import {
  factory,
  isIntersectionTypeNode,
  isUnionTypeNode,
  PropertySignature,
  Statement,
  SyntaxKind,
  TypeElement,
  TypeNode
} from 'typescript';

import {
  addMetadataToNode,
  getNameForParameter,
  getNameForRequestBody,
  getNameForResponse,
  getNameForType,
  isEmptyObject,
  isReferenceObject,
  reduceToTypeDefinition,
  transformStatements
} from './utils';
import type { TypeDefinition } from './types';

export type SchemaOrRef = ReferenceObject | SchemaObject;

export function createTypeDeclaration(
  name: string,
  schema: SchemaObject
): TypeDefinition<Statement> {
  return transformStatements(resolveValue(schema), typeNode => {
    const declaration = factory.createTypeAliasDeclaration(
      /* decorators */ undefined,
      /* modifiers */ [factory.createModifier(SyntaxKind.ExportKeyword)],
      /* name */ getNameForType(name),
      /* typeParameters */ undefined,
      /* type */ typeNode
    );

    addMetadataToNode(declaration, schema);

    return declaration;
  });
}

export function createArray(item: SchemaObject): TypeDefinition<TypeNode> {
  if (item.items) {
    return transformStatements(createScalarNode(item.items), typeNode => {
      if (isUnionTypeNode(typeNode) || isIntersectionTypeNode(typeNode)) {
        return factory.createTypeReferenceNode('Array', [typeNode]);
      }

      return factory.createArrayTypeNode(typeNode);
    });
  } else {
    throw new Error('All arrays must have an `items` key define');
  }
}

export function createFreeFormProperty(
  input: TypeDefinition<TypeNode> = {
    statements: factory.createKeywordTypeNode(SyntaxKind.AnyKeyword),
    dependencies: []
  }
): TypeDefinition<TypeElement> {
  const { statements: typeNode, dependencies } = input;

  return {
    statements: factory.createIndexSignature(
      /* decorators */ undefined,
      /* modifiers */ undefined,
      /* parameters*/ [
        factory.createParameterDeclaration(
          /* decorators */ undefined,
          /* modifiers */ undefined,
          /* spread token */ undefined,
          /* name */ 'key',
          /* questionToken */ undefined,
          /* type */ factory.createKeywordTypeNode(SyntaxKind.StringKeyword),
          /* initializer */ undefined
        )
      ],
      /* type */ typeNode
    ),
    dependencies
  };
}

export function createObject(item: SchemaObject): TypeDefinition<TypeNode> {
  if (isReferenceObject(item)) {
    return createReferenceNode(item.$ref);
  }

  if (item.allOf) {
    const mappedValues = reduceToTypeDefinition(item.allOf, node =>
      transformStatements(resolveValue(node), t => [t])
    );

    return transformStatements(mappedValues, typeNode =>
      factory.createIntersectionTypeNode(typeNode)
    );
  }

  if (item.oneOf) {
    const mappedValues = reduceToTypeDefinition(item.oneOf, node =>
      transformStatements(resolveValue(node), t => [t])
    );

    return transformStatements(mappedValues, typeNode =>
      factory.createUnionTypeNode(typeNode)
    );
  }

  return transformStatements(createObjectProperties(item), typeNode =>
    factory.createTypeLiteralNode(typeNode)
  );
}

export type ObjPropsWithDependencies = TypeDefinition<TypeElement[]>;

export function createObjectProperties(
  item: SchemaObject
): ObjPropsWithDependencies {
  if (
    !item.type &&
    !has(item, 'properties') &&
    !has(item, 'additionalProperties')
  ) {
    return { statements: [], dependencies: [] };
  }

  if (item.type === 'object' && !has(item, 'properties')) {
    if (
      !has(item, 'additionalProperties') ||
      isEmptyObject(item.additionalProperties) ||
      item.additionalProperties === true
    ) {
      return transformStatements(createFreeFormProperty(), type => [type]);
    }

    if (item.additionalProperties === false) {
      return { statements: [], dependencies: [] };
    }

    if (item.additionalProperties) {
      return transformStatements(
        createFreeFormProperty(resolveValue(item.additionalProperties)),
        type => [type]
      );
    }
  }

  if (item.properties) {
    const {
      statements: propertySignatures,
      dependencies
    } = reduceToTypeDefinition(
      sortBy(Object.entries(item.properties), ([key]) => key),
      ([name, schema]) =>
        transformStatements(createScalarNode(schema), typeNode => {
          const propertySignature = factory.createPropertySignature(
            /* modifiers */ undefined,
            /* name*/ name,
            /* questionToken */ item.required?.includes(name)
              ? undefined
              : factory.createToken(SyntaxKind.QuestionToken),
            /* type */ typeNode
          );

          addMetadataToNode(propertySignature, schema);

          return [propertySignature];
        })
    );

    if (item.additionalProperties) {
      const {
        statements: typeNode,
        dependencies: moreDependencies
      } = createFreeFormProperty(
        item.additionalProperties === true
          ? undefined
          : resolveValue(item.additionalProperties)
      );

      propertySignatures.push(typeNode as PropertySignature);
      dependencies.push(...moreDependencies);
    }

    return {
      statements: propertySignatures,
      dependencies
    };
  }

  return {
    statements: [],
    dependencies: []
  };
}

export function createReferenceNode($ref: string): TypeDefinition<TypeNode> {
  let type = '';

  if ($ref.startsWith('#/components/schemas')) {
    type = getNameForType($ref.replace('#/components/schemas/', ''));
  } else if ($ref.startsWith('#/components/responses')) {
    type = getNameForResponse($ref.replace('#/components/responses/', ''));
  } else if ($ref.startsWith('#/components/parameters')) {
    type = getNameForParameter($ref.replace('#/components/parameters/', ''));
  } else if ($ref.startsWith('#/components/requestBodies')) {
    type = getNameForRequestBody(
      $ref.replace('#/components/requestBodies/', '')
    );
  } else {
    throw new Error(
      'This library only resolve $ref that are include into `#/components/*` for now'
    );
  }

  return {
    statements: factory.createTypeReferenceNode(type, []),
    dependencies: [type]
  };
}

export function getOKResponseSchema(
  responsesObject: ResponsesObject
): Array<SchemaOrRef> {
  const filteredResponseEntries = Object.entries(
    responsesObject
  ).filter(([status]) => status.toString().startsWith('2'));

  return getRequestResponseSchema(filteredResponseEntries);
}

export function getErrorResponseSchema(
  responsesObject: ResponsesObject
): SchemaOrRef[] {
  const filteredResponseEntries = Object.entries(responsesObject).filter(
    ([status]) =>
      status.toString().startsWith('4') ||
      status.toString().startsWith('5') ||
      status === 'default'
  );

  return getRequestResponseSchema(filteredResponseEntries);
}

export function getRequestResponseSchema(
  requestOrResponse: Array<[string, RequestBodyObject | ReferenceObject]>
): SchemaOrRef[] {
  return requestOrResponse
    .map<SchemaOrRef | undefined>(([_1, res]) => {
      if (isReferenceObject(res)) {
        return res;
      }

      if (res.content) {
        const content = Object.entries(res.content).find(
          ([mediaType, schema]) =>
            mediaType.startsWith('*/*') ||
            mediaType.startsWith('application/json') ||
            (mediaType.startsWith('application/octet-stream') && schema.schema)
        );

        return content?.[1].schema;
      }
    })
    .filter(s => s) as SchemaOrRef[];
}

export function createScalarNode(item: SchemaObject): TypeDefinition<TypeNode> {
  let type: TypeNode;
  let deps: string[] = [];

  switch (item.type) {
    case 'number':
    case 'integer':
      type = factory.createKeywordTypeNode(SyntaxKind.NumberKeyword);
      break;
    case 'boolean':
      type = factory.createKeywordTypeNode(SyntaxKind.BooleanKeyword);
      break;
    case 'array': {
      const arr = createArray(item);
      type = arr.statements;
      deps = arr.dependencies;
      break;
    }
    case 'string':
      type = item.enum
        ? factory.createUnionTypeNode(
            item.enum
              .sort()
              .map((name: string) =>
                factory.createLiteralTypeNode(factory.createStringLiteral(name))
              )
          )
        : factory.createKeywordTypeNode(SyntaxKind.StringKeyword);
      break;
    case 'object':
    default: {
      const obj = createObject(item);
      type = obj.statements;
      deps = obj.dependencies;
    }
  }

  if (item.nullable) {
    type = factory.createUnionTypeNode([
      type,
      factory.createLiteralTypeNode(factory.createNull())
    ]);
  }

  return {
    statements: type,
    dependencies: deps
  };
}

export function createInterface(
  name: string,
  schema: SchemaObject
): TypeDefinition {
  const finalName = getNameForType(name);

  return transformStatements(createObjectProperties(schema), members => {
    const node = factory.createInterfaceDeclaration(
      /* decorators */ undefined,
      /* modifiers */ [factory.createModifier(SyntaxKind.ExportKeyword)],
      /* name */ finalName,
      /* typeParameters */ undefined,
      /** heritageClause */ undefined,
      /* members */ members
    );

    addMetadataToNode(node, schema);

    return node;
  });
}

export function resolveValue(schema: SchemaObject): TypeDefinition<TypeNode> {
  return isReferenceObject(schema)
    ? createReferenceNode(schema.$ref)
    : createScalarNode(schema);
}

export function createUnionType(
  name: string,
  schemas: SchemaOrRef[]
): TypeDefinition {
  return transformStatements(
    reduceToTypeDefinition(schemas, schema => {
      const node = resolveValue(schema);

      return transformStatements(node, t => [t]);
    }),
    typeNode => {
      return factory.createTypeAliasDeclaration(
        /* decorators */ undefined,
        /* modifiers */ [factory.createModifier(SyntaxKind.ExportKeyword)],
        /* name */ name,
        /* typeParameters */ undefined,
        /* type */ factory.createUnionTypeNode(typeNode)
      );
    }
  );
}

export function createResponseDefinitionCreator(
  getSchema: (responsesObject: ResponsesObject) => SchemaOrRef[]
) {
  return (
    responsesObject: ResponsesObject,
    name: string
  ): [TypeDefinition<TypeNode>, TypeDefinition | null] => {
    const schema = getSchema(responsesObject);

    if (schema.length === 0) {
      return [
        {
          statements: factory.createKeywordTypeNode(SyntaxKind.UnknownKeyword),
          dependencies: []
        },
        null
      ];
    }

    if (schema.length === 1) {
      if (isReferenceObject(schema[0])) {
        return [createReferenceNode(schema[0].$ref), null];
      }
    }

    return [
      { statements: factory.createTypeReferenceNode(name), dependencies: [] },
      createUnionType(name, schema)
    ];
  };
}
