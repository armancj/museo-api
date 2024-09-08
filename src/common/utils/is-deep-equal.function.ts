export function isDeepEqual(
  a: NonNullable<unknown>,
  b: NonNullable<unknown>,
  keys: string[],
) {
  const aFiltered = {};
  const bFiltered = {};

  keys.forEach((key) => {
    if (key in a && key in b) {
      aFiltered[key] = a[key];
      bFiltered[key] = b[key];
    }
  });
  return JSON.stringify(aFiltered) === JSON.stringify(bFiltered);
}
