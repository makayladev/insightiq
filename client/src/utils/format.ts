export function formatValue(
  value: number,
  format: 'currency' | 'number'
): string {
  if (format === 'currency') {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      maximumFractionDigits: 0,
    }).format(value)
  }

  return new Intl.NumberFormat('en-ZA').format(value)
}