import { DateTime } from 'luxon';

const timeZone = 'Europe/Madrid';

/**
 * Ensures that the input is a string
 * If the input is a Date, converts it to an ISO string
 * Otherwise, returns the input as is
 *
 * @param date - The date to convert to a string
 * @returns The date as a string
 */
const ensureString = (date: Date | string): string => {
  if (date instanceof Date) {
    return date.toISOString();
  }
  return date as string;
};

/**
 * Formats a date as 'dd/MM/yyyy'
 *
 * @param date - The date to format
 * @returns The formatted date string or undefined if no date is provided
 */
export const formatDate = (
  date: Date | string | null | undefined,
): string | undefined => {
  if (date) {
    const ensureDateString = ensureString(date);
    return DateTime.fromISO(ensureDateString, { zone: 'utc' })
      .setZone(timeZone)
      .toFormat('dd/MM/yyyy');
  }
  return undefined;
};

/**
 * Formats a time as 'HH:mm:ss'
 *
 * @param date - The date to format
 * @returns The formatted time string or undefined if no date is provided
 */
export const formatTime = (
  date: Date | string | null | undefined,
): string | undefined => {
  if (date) {
    const ensureDateString = ensureString(date);
    return DateTime.fromISO(ensureDateString, { zone: 'utc' })
      .setZone(timeZone)
      .toFormat('HH:mm:ss');
  }
  return undefined;
};

/**
 * Calculates the duration between two times
 *
 * @param entryTime - The entry time
 * @param exitTime - The exit time
 * @returns The duration formatted as 'hh' or undefined if either time is not provided
 */
export const calculateDuration = (
  entryTime: Date | string | null | undefined,
  exitTime: Date | string | null | undefined,
): string | undefined => {
  if (!entryTime || !exitTime) return undefined;
  const isoEntryTime = ensureString(entryTime);
  const isoExitTime = ensureString(exitTime);
  const entry = DateTime.fromISO(isoEntryTime, { zone: 'utc' }).setZone(
    timeZone,
  );
  const exit = DateTime.fromISO(isoExitTime, { zone: 'utc' }).setZone(timeZone);
  const duration = exit.diff(entry, ['hours', 'minutes']);
  return duration.toFormat('hh');
};
