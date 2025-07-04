export type StatusType = 'Pending' | 'To Review' | 'Reviewed' | 'Has Issue';

export function calculateOverallStatus(obj: any): StatusType {
  const statuses = extractAllStatuses(obj);

  if (statuses.length === 0) return 'Pending';
  if (statuses.includes('Pending')) return 'Pending';
  if (statuses.includes('Has Issue')) return 'Has Issue';
  if (statuses.every(s => s === 'Reviewed')) return 'Reviewed';

  return 'To Review';
}

function extractAllStatuses(obj: any): StatusType[] {
  const statuses: StatusType[] = [];
  const visited = new WeakSet();
  let depth = 0;
  const MAX_DEPTH = 10;

  function traverse(current: any): void {
    if (depth > MAX_DEPTH) return;

    if (!current || typeof current !== 'object') return;

    if (visited.has(current)) return;
    visited.add(current);

    depth++;

    try {
      if (isFieldMetadata(current)) {
        if (typeof current.status === 'string' && isValidStatus(current.status)) {
          statuses.push(current.status as StatusType);
        }
        return;
      }

      if (Array.isArray(current)) {
        current.forEach(item => traverse(item));
        return;
      }

      const allowedProperties = [
        'descriptionControl',
        'entryAndLocation',
        'producerAuthor',
        'accessAndUseConditions',
        'associatedDocumentation',
        'culturalRecord',
        'notes',
      ];

      Object.entries(current).forEach(([key, value]) => {
        if (allowedProperties.includes(key) || isFieldMetadataProperty(key)) {
          traverse(value);
        }
      });
    } finally {
      depth--;
    }
  }

  traverse(obj);
  return statuses;
}

function isFieldMetadata(obj: any): boolean {
  return obj && typeof obj === 'object' && 'value' in obj && 'status' in obj && 'modifiedBy' in obj;
}

function isValidStatus(status: any): boolean {
  return ['Pending', 'To Review', 'Reviewed', 'Has Issue'].includes(status);
}

function isFieldMetadataProperty(key: string): boolean {
  return /^[a-zA-Z][a-zA-Z0-9]*$/.test(key) && !key.startsWith('_');
}
