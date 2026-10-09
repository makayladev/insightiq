import type { MonthlyData } from '../data/mockData'

function escapeCsv(value: string | number): string {
  const text = String(value)
  if (/[",\n]/.test(text)) {
    return `"${text.replace(/"/g, '""')}"`
  }
  return text
}

export function buildReportCsv(data: MonthlyData[]): string {
  const header = ['month', 'revenue', 'expenses', 'profit', 'newCustomers']

  const rows = data.map((row) => [
    row.month,
    row.revenue,
    row.expenses,
    row.revenue - row.expenses,
    row.newCustomers,
  ])

  const totals = data.reduce(
    (sum, row) => ({
      revenue: sum.revenue + row.revenue,
      expenses: sum.expenses + row.expenses,
      newCustomers: sum.newCustomers + row.newCustomers,
    }),
    { revenue: 0, expenses: 0, newCustomers: 0 }
  )

  const totalRow = [
    'Total',
    totals.revenue,
    totals.expenses,
    totals.revenue - totals.expenses,
    totals.newCustomers,
  ]

  return [header, ...rows, totalRow]
    .map((row) => row.map(escapeCsv).join(','))
    .join('\n')
}

export function downloadFile(content: string, fileName: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType })
  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  link.click()

  URL.revokeObjectURL(url)
}