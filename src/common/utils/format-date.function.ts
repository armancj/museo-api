export function formatDate(date: Date): string {
  // Set the format options
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  // Format the date to English
  return date.toLocaleString('es-ES', options);
}
