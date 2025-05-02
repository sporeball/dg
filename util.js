export function type_of (v) {
  if (v === undefined) {
    return 'undefined';
  }
  if (v === null) {
    return 'null';
  }
  if (Array.isArray(v)) {
    return 'list';
  }
  if (typeof v === 'object') {
    return 'object';
  }
  if (typeof v === 'number') {
    return 'number';
  }
  if (typeof v === 'string') {
    return 'string';
  }
  if (typeof v === 'boolean') {
    return 'boolean';
  }
  return 'unknown';
}