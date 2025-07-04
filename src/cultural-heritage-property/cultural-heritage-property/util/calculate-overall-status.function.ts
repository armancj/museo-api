export type StatusType = 'Pending' | 'To Review' | 'Reviewed' | 'Has Issue';

export function calculateOverallStatus(obj: any): StatusType {
  const dataToProcess = obj.toObject ? obj.toObject() : obj._doc || obj;

  const statuses = extractAllStatuses(dataToProcess);

  if (statuses.length === 0) return 'Pending';
  if (statuses.includes('Pending')) return 'Pending';
  if (statuses.includes('Has Issue')) return 'Has Issue';
  if (statuses.every(s => s === 'Reviewed')) return 'Reviewed';

  return 'To Review';
}

function extractAllStatuses(obj: any): StatusType[] {
  const statuses: StatusType[] = [];
  const visited = new WeakSet();

  function traverse(current: any, path: string = ''): void {
    if (!current || typeof current !== 'object') return;
    if (visited.has(current)) return;
    visited.add(current);

    // Si es un documento de Mongoose, usar toObject() o _doc
    if (current.toObject) {
      current = current.toObject();
    } else if (current._doc) {
      current = current._doc;
    }

    // Verificar si es un field metadata
    if (isFieldMetadata(current)) {
      if (typeof current.status === 'string' && isValidStatus(current.status)) {
        statuses.push(current.status as StatusType);
        console.log(`Added status "${current.status}" from path: ${path}`);
      }
      return;
    }

    if (Array.isArray(current)) {
      current.forEach((item, index) => traverse(item, `${path}[${index}]`));
      return;
    }

    Object.entries(current).forEach(([key, value]) => {
      if (key === 'history' || key.startsWith('$') || key.startsWith('_')) {
        return;
      }
      traverse(value, path ? `${path}.${key}` : key);
    });
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
