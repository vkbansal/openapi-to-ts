import type { TypeDefinitionWithExports } from '@vkbansal/oa2ts-core';

import {
  ExpressionStatement,
  factory,
  NodeFlags,
  Statement,
  SyntaxKind,
  TypeNode
} from 'typescript';
import { parseToAST } from './helpers';
import { getHookTypeProps } from './createHook';

export type CreateComponentUsageProps = CreateComponentProps & {
  propsTypeName: string;
};

export function createComponentUsage(
  props: CreateComponentUsageProps
): Statement {
  const {
    componentName,
    propsTypeName,
    paramsInPath,
    verb,
    route
    // pathParamsName
  } = props;

  // covert path to string literal
  const pathStringLiteral = route.replace(/{(.+?)}/g, '${pathParams.$1}');
  const pathExpression = (parseToAST('`' + pathStringLiteral + '`')
    .statements[0] as ExpressionStatement).expression;
  const hasPathParams = paramsInPath.length > 0;

  const attributes = [
    factory.createJsxAttribute(
      factory.createIdentifier('path'),
      factory.createJsxExpression(undefined, pathExpression)
    ),
    factory.createJsxSpreadAttribute(factory.createIdentifier('rest'))
  ];

  if (verb !== 'get') {
    attributes.unshift(
      factory.createJsxAttribute(
        factory.createIdentifier('verb'),
        factory.createStringLiteral(verb.toUpperCase())
      )
    );
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
      factory.createJsxSelfClosingElement(
        factory.createIdentifier(verb === 'get' ? 'Get' : 'Mutate'),
        getHookTypeProps({ ...props, hasPathParams }),
        factory.createJsxAttributes(attributes)
      )
    )
  ]);

  return factory.createFunctionDeclaration(
    /* decorators */ undefined,
    /* modifiers */ [factory.createModifier(SyntaxKind.ExportKeyword)],
    /* asteriskToken */ undefined,
    /* name */ componentName,
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

export interface CreateComponentProps {
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

export function createComponent(props: CreateComponentProps): void {
  const { componentName, typeDef, paramsInPath, verb, pathParamsName } = props;

  typeDef.tsx = true;
  typeDef.imports.push({ from: 'react', default: 'React', isTypeOnly: false });

  const propsTypeName = `${componentName}Props`;
  const hasPathParams = paramsInPath.length > 0;

  const propsPrimaryDef = factory.createTypeReferenceNode('Omit', [
    factory.createTypeReferenceNode(
      verb === 'get' ? 'GetProps' : 'MutateProps',
      getHookTypeProps({ ...props, hasPathParams })
    ),
    factory.createLiteralTypeNode(factory.createStringLiteral('path'))
  ]);

  const propsDef = factory.createTypeAliasDeclaration(
    undefined,
    /* modifiers */ [factory.createModifier(SyntaxKind.ExportKeyword)],
    propsTypeName,
    undefined,
    hasPathParams
      ? factory.createIntersectionTypeNode([
          propsPrimaryDef,
          factory.createTypeReferenceNode(pathParamsName)
        ])
      : propsPrimaryDef
  );

  typeDef.statements.push(propsDef);
  typeDef.exports.push({ name: propsTypeName, isTypeOnly: true });

  const componentDef = createComponentUsage({ ...props, propsTypeName });

  typeDef.imports.push({
    named: [
      verb === 'get' ? 'Get' : 'Mutate',
      verb === 'get' ? 'GetProps' : 'MutateProps'
    ],
    from: 'restful-react',
    isTypeOnly: false
  });
  typeDef.statements.push(componentDef);
  typeDef.exports.push({
    name: componentName,
    isTypeOnly: false
  });
}
