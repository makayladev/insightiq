import Header from './components/Header'
import Sidebar from './components/Sidebar'
import KpiCard from './components/KpiCard'
import { kpis } from './data/mockData'

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <Header
          title="Overview"
          subtitle="How your business is performing this month"
        />
        <section className="kpi-grid">
          {kpis.map((kpi) => (
            <KpiCard key={kpi.label} kpi={kpi} />
          ))}
        </section>
      </main>
    </div>
  )
}

export default App