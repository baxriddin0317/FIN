import React from 'react'
import { Header } from '../compnents/Header'
import { WelcomeBanner } from '../compnents/WelcomeBanner'
import DashboardCard01 from '../compnents/DashboardCard01'

const Plans = () => {
  return (
    <>
      {/* === header === */}
      <Header />

      {/* site title */}
      <WelcomeBanner title={"california public employess retirement system"} />

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-3 gap-6">
        {/* Line chart (Acme Plus) */}
        {[...Array(3)].map((item,idx) => (
          <DashboardCard01 key={idx} />
        ))}
      </div>
    </>
  )
}

export default Plans