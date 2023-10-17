import React from 'react'
import { ResultTable, SearchSidebar } from '../components'
import { ResultData } from '../utils/data'

const Plans2 = () => {
  return (
    <div className='max-w-[1480px] mx-auto px-2 md:px-5 py-5'>
      <h1 className='text-2xl lg:text-3xl text-slate-700 font-bold mb-5 capitalize'>
        plans
      </h1>

      {/*  */}
      <div className='grid grid-cols-12 gap-5 items-stretch'>
        <SearchSidebar />
        <ResultTable data={ResultData} />
      </div>
    </div>
  )
}

export default Plans2