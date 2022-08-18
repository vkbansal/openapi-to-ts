import ts from 'typescript';

export function parseToAST(str: string): ts.SourceFile {
  return ts.createSourceFile('dummy.ts', str, ts.ScriptTarget.Latest);
}
