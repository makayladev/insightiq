export type Kpi = {
  label: string
  value: number
  change: number
  format: 'currency' | 'number'
}

export const kpis: Kpi[] = [
  { label: 'Revenue', value: 482500, change: 12.4, format: 'currency' },
  { label: 'Customers', value: 1284, change: 5.1, format: 'number' },
  { label: 'Expenses', value: 213900, change: -3.2, format: 'currency' },
  { label: 'Profit', value: 268600, change: 18.7, format: 'currency' },
]