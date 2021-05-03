import ts from 'typescript';

export function createNamedImport(
  typeOnly: boolean,
  importFrom: string,
  name: string,
  alias?: string
): ts.Statement {
  return ts.factory.createImportDeclaration(
    undefined,
    undefined,
    ts.factory.createImportClause(
      typeOnly,
      undefined,
      ts.factory.createNamedImports([
        ts.factory.createImportSpecifier(
          alias ? ts.factory.createIdentifier(alias) : undefined,
          ts.factory.createIdentifier(name)
        )
      ])
    ),
    ts.factory.createStringLiteral(importFrom)
  );
}
