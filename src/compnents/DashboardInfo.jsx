import React from 'react'
import { Link } from 'react-router-dom'

export const DashboardInfo = () => {
  return (
    <div className='bg-white w-full col-span-2 md:col-span-1 shadow-lg rounded-sm border border-slate-200'>
      <div className='flex flex-col h-full gap-2 p-5'>
        <h2 className='text-xl font-semibold text-gray-500 border-b-2 border-slate-300 pb-1 capitalize'>info</h2>
        <div className='flex flex-col'>
          <div className='flex items-center justify-between border-b border-slate-200 py-1'>
            <h3 className='text-sm text-gray-400 font-medium uppercase'>address</h3>
            <p className='text-gray-800 text-xs'>400 Q Street</p>
          </div>
          <div className='flex items-center justify-between border-b border-slate-200 py-1'>
            <h3 className='text-sm text-gray-400 font-medium uppercase'>suite/unit</h3>
            <p className='text-gray-800 text-xs'>Suite E4800</p>
          </div>
          <div className='flex items-center justify-between border-b border-slate-200 py-1'>
            <h3 className='text-sm text-gray-400 font-medium uppercase'>city</h3>
            <p className='text-gray-800 text-xs'>Sacramento</p>
          </div>
          <div className='flex items-center justify-between border-b border-slate-200 py-1'>
            <h3 className='text-sm text-gray-400 font-medium uppercase'>state & zip</h3>
            <p className='text-gray-800 text-xs'>E4800</p>
          </div>
          <div className='flex items-center justify-between border-b border-slate-200 py-1'>
            <h3 className='text-sm text-gray-400 font-medium uppercase'>phone</h3>
            <p className='text-gray-800 text-xs'>(916) 795-3400</p>
          </div>
          <div className='flex items-center justify-between border-b border-slate-200 py-1'>
            <h3 className='text-sm text-gray-400 font-medium uppercase'>fax</h3>
            <p className='text-gray-800 text-xs'>(916) 796-2842</p>
          </div>
        </div>
        <div className='mt-auto border-t-2 border-slate-300 pt-1 uppercase'>
          <Link className='font-semibold text-blue-700' to={'#'}>website</Link>
        </div>
      </div>
    </div>
  )
}