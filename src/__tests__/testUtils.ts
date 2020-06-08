import ts from 'typescript';

const printer = ts.createPrinter({
  newLine: ts.NewLineKind.LineFeed,
  removeComments: false,
  omitTrailingSemicolon: true
});

export function printFile(statements: ts.Statement[]): string {
  const sourceFile = ts.createSourceFile(
    'dummy.ts',
    '',
    ts.ScriptTarget.Latest,
    /* setParentNodes */ false,
    ts.ScriptKind.TS
  );

  sourceFile.statements = ts.createNodeArray(statements);

  return printer.printFile(sourceFile);
}
