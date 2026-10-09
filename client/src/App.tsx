import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import KpiCard from './components/KpiCard'
import PeriodFilter from './components/PeriodFilter'
import ChartCard from './components/ChartCard'
import RevenueChart from './components/RevenueChart'
import ExpensesChart from './components/ExpensesChart'
import CustomersChart from './components/CustomersChart'
import { kpis, monthlyData, expenseCategories } from './data/mockData'

function App() {
  const [period, setPeriod] = useState(12)
  const filteredData = monthlyData.slice(-period)

  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <div className="page-top">
          <Header
            title="Overview"
            subtitle="How your business is performing this month"
          />
          <PeriodFilter value={period} onChange={setPeriod} />
        </div>

        <section className="kpi-grid">
          {kpis.map((kpi) => (
            <KpiCard key={kpi.label} kpi={kpi} />
          ))}
        </section>

        <section className="chart-grid">
          <ChartCard title="Revenue vs expenses">
            <RevenueChart data={filteredData} />
          </ChartCard>
          <ChartCard title="Expenses by category (October)">
            <ExpensesChart data={expenseCategories} />
          </ChartCard>
          <ChartCard title="New customers per month" wide>
            <CustomersChart data={filteredData} />
          </ChartCard>
        </section>
      </main>
    </div>
  )
}

export default App