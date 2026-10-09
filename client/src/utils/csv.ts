import Papa from 'papaparse'
import type { MonthlyData } from '../data/mockData'

export type CsvResult =
  | { ok: true; data: MonthlyData[] }
  | { ok: false; error: string }

const REQUIRED_COLUMNS = ['month', 'revenue', 'expenses', 'newCustomers']

function toNumber(value: string | undefined): number | null {
  if (value === undefined || value.trim() === '') return null
  const number = Number(value)
  return Number.isNaN(number) ? null : number
}

export function parseMonthlyCsv(file: File): Promise<CsvResult> {
  return new Promise((resolve) => {
    Papa.parse<Record<string, string>>(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const columns = results.meta.fields ?? []
        const missing = REQUIRED_COLUMNS.filter((column) => !columns.includes(column))

        if (missing.length > 0) {
          resolve({ ok: false, error: `Missing column(s): ${missing.join(', ')}` })
          return
        }

        const rows: MonthlyData[] = []

        for (let i = 0; i < results.data.length; i++) {
          const row = results.data[i]
          const revenue = toNumber(row.revenue)
          const expenses = toNumber(row.expenses)
          const newCustomers = toNumber(row.newCustomers)

          if (!row.month || revenue === null || expenses === null || newCustomers === null) {
            resolve({ ok: false, error: `Row ${i + 2} has a missing or invalid value` })
            return
          }

          rows.push({ month: row.month.trim(), revenue, expenses, newCustomers })
        }

        if (rows.length === 0) {
          resolve({ ok: false, error: 'The file has no data rows' })
          return
        }

        resolve({ ok: true, data: rows })
      },
      error: (error) => {
        resolve({ ok: false, error: error.message })
      },
    })
  })
}