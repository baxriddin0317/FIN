import React from 'react'
import { DashboardCard01, DashboardInfo, DashboardMap, Header, WelcomeBanner } from '../compnents'

const Plans = () => {
  return (
    <>
      {/* === header === */}
      <Header />

      {/* site title */}
      <WelcomeBanner title={"california public employess retirement system"} />

      {/* Cards */}
      <div className="max-w-7xl mx-auto w-full px-2 md:px-5 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Line chart (Acme Plus) */}
        {[...Array(3)].map((item,idx) => (
          <DashboardCard01 key={idx} />
        ))}
      </div>

      {/* map and info */}
      <div className='max-w-7xl mx-auto w-full px-2 md:px-5 grid md:grid-cols-3 items-stretch gap-4 my-8'>
          <DashboardInfo />
          <DashboardMap />
      </div>
    </>
  )
}

export default Plans