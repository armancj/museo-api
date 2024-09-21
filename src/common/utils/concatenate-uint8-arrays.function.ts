export function concatenateUint8Arrays(arrays: Uint8Array[]): Uint8Array {
  const totalLength = arrays.reduce((acc, value) => acc + value.length, 0);
  const result = new Uint8Array(totalLength);
  arrays.reduce((offset, array) => {
    result.set(array, offset);
    return offset + array.length;
  }, 0);
  return result;
}
