export function convertHours(hours: number): string {
  const days = Math.floor(hours / 24);
  const remainingHours = hours % 24;

  let result = '';
  if (days > 0) {
    result += days + (days === 1 ? ' día' : ' días');
  }
  if (remainingHours > 0) {
    if (result.length > 0) {
      result += ' y ';
    }
    result += remainingHours + (remainingHours === 1 ? ' hora' : ' horas');
  }

  return result || '0 horas';
}
