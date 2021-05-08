import {
  Expression,
  ExpressionStatement,
  factory,
  isTemplateExpression,
  NodeFlags,
  ObjectLiteralElementLike,
  Statement,
  SyntaxKind,
  TypeNode
} from 'typescript';
import { parseToAST } from './helpers';
import type { TypeDefinitionWithExports } from '@vkbansal/oa2ts-core';

export type GetHookTypeProps = Omit<
  CreateHooksProps,
  'typeDef' | 'componentName' | 'paramsInPath' | 'route'
> & {
  hasPathParams: boolean;
};

export function getHookTypeProps(props: GetHookTypeProps): TypeNode[] {
  const {
    responseType,
    errorType,
    queryParamsName,
    hasQueryParams,
    verb,
    pathParamsName,
    hasPathParams
  } = props;
  const typeArgs: TypeNode[] = [
    /* response */ responseType,
    /* error */ errorType,
    /* queryParams */ hasQueryParams
      ? factory.createTypeReferenceNode(queryParamsName)
      : factory.createKeywordTypeNode(SyntaxKind.UnknownKeyword)
  ];

  if (verb !== 'get') {
    /* requestBody */
    typeArgs.push(factory.createKeywordTypeNode(SyntaxKind.UnknownKeyword));
  }

  /* pathParams */
  typeArgs.push(
    hasPathParams
      ? factory.createTypeReferenceNode(pathParamsName)
      : factory.createKeywordTypeNode(SyntaxKind.UnknownKeyword)
  );

  return typeArgs;
}

export type CreateHookUsageProps = Omit<
  CreateHooksProps,
  'typeDef' | 'componentName'
> & {
  name: string;
  propsTypeName: string;
};

export function createHookUsage(props: CreateHookUsageProps): Statement {
  const {
    name,
    propsTypeName,
    paramsInPath,
    verb,
    route,
    pathParamsName
  } = props;

  // covert path to string literal
  const pathStringLiteral = route.replace(/{(.+?)}/g, '${pathParams.$1}');
  const pathExpression = (parseToAST('`' + pathStringLiteral + '`')
    .statements[0] as ExpressionStatement).expression;
  const hasPathParams = paramsInPath.length > 0;

  const pathParam =
    hasPathParams && isTemplateExpression(pathExpression)
      ? factory.createArrowFunction(
          undefined,
          undefined,
          [
            factory.createParameterDeclaration(
              undefined,
              undefined,
              undefined,
              'pathParams',
              undefined,
              factory.createTypeReferenceNode(pathParamsName)
            )
          ],
          undefined,
          factory.createToken(SyntaxKind.EqualsGreaterThanToken),
          pathExpression
        )
      : pathExpression;

  const objParams: ObjectLiteralElementLike[] = [
    factory.createSpreadAssignment(factory.createIdentifier('rest'))
  ];

  if (hasPathParams) {
    objParams.unshift(
      factory.createPropertyAssignment(
        'pathParams',
        factory.createObjectLiteralExpression(
          paramsInPath.map(p => factory.createShorthandPropertyAssignment(p))
        )
      )
    );
  }

  const hookArgs: Expression[] = [
    pathParam,
    factory.createObjectLiteralExpression(objParams)
  ];

  if (verb !== 'get') {
    hookArgs.unshift(factory.createStringLiteral(verb.toUpperCase()));
  }

  const block = factory.createBlock([
    // variables
    factory.createVariableStatement(
      /* modifiers */ undefined,
      /* declarationList */ factory.createVariableDeclarationList(
        /* declarations */ [
          factory.createVariableDeclaration(
            /* name */ factory.createObjectBindingPattern([
              ...paramsInPath.map(p =>
                factory.createBindingElement(
                  /* dotDotDotToken */ undefined,
                  /* propertyName */ undefined,
                  /* name */ p
                )
              ),
              factory.createBindingElement(
                /* dotDotDotToken */ factory.createToken(
                  SyntaxKind.DotDotDotToken
                ),
                /* propertyName */ undefined,
                /* name */ 'rest'
              )
            ]),
            /* exclamationToken */ undefined,
            /* type */ undefined,
            /* initializer */ factory.createIdentifier('props')
          )
        ],
        /* flags */ NodeFlags.Const
      )
    ),
    // return statement
    factory.createReturnStatement(
      factory.createCallExpression(
        factory.createIdentifier(verb === 'get' ? 'useGet' : 'useMutate'),
        getHookTypeProps({ ...props, hasPathParams }),
        hookArgs
      )
    )
  ]);

  return factory.createFunctionDeclaration(
    /* decorators */ undefined,
    /* modifiers */ [factory.createModifier(SyntaxKind.ExportKeyword)],
    /* asteriskToken */ undefined,
    /* name */ name,
    /* typeParameters */ [],
    /* parameters */ [
      factory.createParameterDeclaration(
        /* decorators */ undefined,
        /* modifiers */ undefined,
        /* dotDotDotToken */ undefined,
        /* name */ 'props',
        /* questionToken*/ undefined,
        /* type */ factory.createTypeReferenceNode(propsTypeName)
      )
    ],
    /* returnType */ undefined,
    /* body */ block
  );
}

export interface CreateHooksProps {
  componentName: string;
  verb: string;
  paramsInPath: string[];
  pathParamsName: string;
  route: string;
  queryParamsName: string;
  hasQueryParams: boolean;
  typeDef: Required<TypeDefinitionWithExports<Statement[]>>;
  responseType: TypeNode;
  errorType: TypeNode;
}

export function createHook(props: CreateHooksProps): void {
  const { componentName, verb, pathParamsName, paramsInPath, typeDef } = props;
  const hookName = `use${componentName}`;
  const hookPropsName = `Use${componentName}Props`;
  const hasPathParams = paramsInPath.length > 0;

  const hookPropsPrimaryDef = factory.createTypeReferenceNode('Omit', [
    factory.createTypeReferenceNode(
      verb === 'get' ? 'UseGetProps' : 'UseMutateProps',
      getHookTypeProps({ ...props, hasPathParams })
    ),
    factory.createLiteralTypeNode(factory.createStringLiteral('path'))
  ]);

  const hookPropsDef = factory.createTypeAliasDeclaration(
    undefined,
    /* modifiers */ [factory.createModifier(SyntaxKind.ExportKeyword)],
    hookPropsName,
    undefined,
    hasPathParams
      ? factory.createIntersectionTypeNode([
          hookPropsPrimaryDef,
          factory.createTypeReferenceNode(pathParamsName)
        ])
      : hookPropsPrimaryDef
  );

  typeDef.statements.push(hookPropsDef);

  const hookDef = createHookUsage({
    ...props,
    name: hookName,
    propsTypeName: hookPropsName
  });

  typeDef.imports.push({
    named: [
      verb === 'get' ? 'useGet' : 'useMutate',
      verb === 'get' ? 'UseGetProps' : 'UseMutateProps'
    ],
    from: 'restful-react',
    isTypeOnly: false
  });

  typeDef.statements.push(hookDef);
}
