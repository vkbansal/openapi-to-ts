import ts from 'typescript';

const printer = ts.factory.createPrinter({
  newLine: ts.NewLineKind.LineFeed,
  removeComments: false,
  omitTrailingSemicolon: true
});

export function printFile(statements: ts.Statement[]): string {
  const sourceFile = ts.factory.createSourceFile(
    'dummy.ts',
    '',
    ts.ScriptTarget.Latest,
    /* setParentNodes */ false,
    ts.ScriptKind.TS
  );

  sourceFile.statements = ts.factory.createNodeArray(statements);

  return printer.printFile(sourceFile);
}
