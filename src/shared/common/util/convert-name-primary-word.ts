import * as assert from 'assert';

export function convertNamePrimaryWord(text = ''): string {
  assert.ok(typeof text === 'string', 'Error type in name convert');
  return text
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
