import type { ReactNode } from 'react'

type ChartCardProps = {
    title: string
    wide?: boolean
    children: ReactNode
}

function ChartCard({ title, wide = false, children }: ChartCardProps) {
    return (
        <article className={wide ? 'chart-card chart-wide' : 'chart-card'}>
            <h2>{title}</h2>
            {children}
        </article>
    )
}

export default ChartCard