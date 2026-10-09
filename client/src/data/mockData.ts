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
export type MonthlyData = {
    month: string
    revenue: number
    expenses: number
    newCustomers: number
}

export const monthlyData: MonthlyData[] = [
    { month: 'Nov', revenue: 312000, expenses: 188000, newCustomers: 64 },
    { month: 'Dec', revenue: 298500, expenses: 191200, newCustomers: 58 },
    { month: 'Jan', revenue: 276400, expenses: 184900, newCustomers: 52 },
    { month: 'Feb', revenue: 301800, expenses: 190300, newCustomers: 61 },
    { month: 'Mar', revenue: 334200, expenses: 195600, newCustomers: 70 },
    { month: 'Apr', revenue: 351900, expenses: 198400, newCustomers: 76 },
    { month: 'May', revenue: 368700, expenses: 201100, newCustomers: 81 },
    { month: 'Jun', revenue: 389300, expenses: 203800, newCustomers: 88 },
    { month: 'Jul', revenue: 402600, expenses: 206500, newCustomers: 92 },
    { month: 'Aug', revenue: 417800, expenses: 209200, newCustomers: 97 },
    { month: 'Sep', revenue: 429300, expenses: 220900, newCustomers: 101 },
    { month: 'Oct', revenue: 482500, expenses: 213900, newCustomers: 109 },
]

export type ExpenseCategory = {
    name: string
    value: number
}

export const expenseCategories: ExpenseCategory[] = [
    { name: 'Salaries', value: 98000 },
    { name: 'Rent', value: 35000 },
    { name: 'Marketing', value: 28400 },
    { name: 'Software', value: 18500 },
    { name: 'Utilities', value: 12000 },
    { name: 'Other', value: 22000 },
]