import { DateTime } from 'luxon';

const timeZone = 'Europe/Madrid';

const ensureString = (date: any): string => {
  if (date instanceof Date) {
    return date.toISOString();
  }
  return date;
};
export const formatDate = (date: any) => {
  if (date) {
    const ensureDateString = ensureString(date);
    return DateTime.fromISO(ensureDateString, { zone: 'utc' })
      .setZone(timeZone)
      .toFormat('dd/MM/yyyy');
  }
};

export const formatTime = (date: any) => {
  if (date) {
    const ensureDateString = ensureString(date);
    return DateTime.fromISO(ensureDateString, { zone: 'utc' })
      .setZone(timeZone)
      .toFormat('HH:mm:ss');
  }
};

export const calculateDuration = (entryTime: any, exitTime: any) => {
  if (!entryTime || !exitTime) return;
  const isoEntryTime = ensureString(entryTime);
  const isoExitTime = ensureString(exitTime);
  const entry = DateTime.fromISO(isoEntryTime, { zone: 'utc' }).setZone(
    timeZone,
  );
  const exit = DateTime.fromISO(isoExitTime, { zone: 'utc' }).setZone(timeZone);
  const duration = exit.diff(entry, ['hours', 'minutes']);
  return duration.toFormat('hh');
};
