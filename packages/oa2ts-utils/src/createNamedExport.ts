import ts from 'typescript';

export function createNamedExport(
  typeOnly: boolean,
  importFrom: string,
  name: string,
  alias?: string
): ts.Statement {
  return ts.factory.createExportDeclaration(
    undefined,
    undefined,
    typeOnly,
    ts.factory.createNamedExports([
      ts.factory.createExportSpecifier(
        alias ? ts.factory.createIdentifier(alias) : undefined,
        ts.factory.createIdentifier(name)
      )
    ]),
    ts.factory.createStringLiteral(importFrom)
  );
}
