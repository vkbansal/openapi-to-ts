export default function formatDescription(description: string, tabSize = 0): string {
  return `*\n${description
    .split('\n')
    .map(str => `${' '.repeat(tabSize)} * ${str}`)
    .join('\n')}\n `;
}