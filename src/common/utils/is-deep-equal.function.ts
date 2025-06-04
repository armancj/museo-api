export function isDeepEqual(
  a: { [key: string]: unknown },
  b: { [key: string]: unknown },
  keys: string[],
) {
  const aFiltered: { [key: string]: unknown } = {};
  const bFiltered: { [key: string]: unknown } = {};

  keys.forEach((key) => {
    if (key in a && key in b) {
      aFiltered[key] = a[key];
      bFiltered[key] = b[key];
    }
  });
  return JSON.stringify(aFiltered) === JSON.stringify(bFiltered);
}
