const navItems = ['Overview', 'Revenue', 'Customers', 'Expenses', 'Reports']

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">InsightIQ</div>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item}>
              <a href="#" className={item === 'Overview' ? 'active' : ''}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar