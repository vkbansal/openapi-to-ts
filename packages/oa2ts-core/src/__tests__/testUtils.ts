/* eslint-disable @typescript-eslint/ban-ts-comment */
import ts from 'typescript';

const printer = ts.createPrinter({
  newLine: ts.NewLineKind.LineFeed,
  removeComments: false,
  omitTrailingSemicolon: true
});

export function printFile(statements: ts.Statement | ts.Statement[]): string {
  const sourceFile = ts.createSourceFile(
    'dummy.ts',
    '',
    ts.ScriptTarget.Latest,
    /* setParentNodes */ false,
    ts.ScriptKind.TS
  );

  // @ts-ignore
  sourceFile.statements = ts.factory.createNodeArray(Array.isArray(statements) ? statements : [statements]);

  return printer.printFile(sourceFile);
}
