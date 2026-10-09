import type { Kpi, MonthlyData } from '../data/mockData'

function percentChange(current: number, previous: number): number {
  if (previous === 0) return 0
  return Math.round(((current - previous) / previous) * 1000) / 10
}

export function computeKpis(data: MonthlyData[]): Kpi[] {
  if (data.length === 0) return []

  const current = data[data.length - 1]
  const previous = data.length > 1 ? data[data.length - 2] : current

  const profit = current.revenue - current.expenses
  const previousProfit = previous.revenue - previous.expenses

  return [
    {
      label: 'Revenue',
      value: current.revenue,
      change: percentChange(current.revenue, previous.revenue),
      format: 'currency',
      higherIsBetter: true,
    },
    {
      label: 'New customers',
      value: current.newCustomers,
      change: percentChange(current.newCustomers, previous.newCustomers),
      format: 'number',
      higherIsBetter: true,
    },
    {
      label: 'Expenses',
      value: current.expenses,
      change: percentChange(current.expenses, previous.expenses),
      format: 'currency',
      higherIsBetter: false,
    },
    {
      label: 'Profit',
      value: profit,
      change: percentChange(profit, previousProfit),
      format: 'currency',
      higherIsBetter: true,
    },
  ]
}