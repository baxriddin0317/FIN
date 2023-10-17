import React from 'react'
import { Link } from 'react-router-dom'

export const ResultTable = ({data=[]}) => {

  return (
    <div className='col-span-8'>
      <h3 className='text-2xl text-blue-950 mb-3'>
        <span className='text-blue-800 italic'>12.851 </span>
        <span>Search Result</span>
      </h3>

      <div className="col-span-full md:col-span-2 overflow-x-auto border border-slate-200 p-3">
        <table className="table-auto w-full">
          {/* Table header */}
          <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
            <tr>
              <th className="p-2">
                <div className="font-semibold text-left">Plan Name</div>
              </th>
              <th className="p-2">
                <div className="font-semibold text-left">Plan Type</div>
              </th>
              <th className="p-2">
                <div className="font-semibold text-left">Size (millinos)</div>
              </th>
              <th className="p-2">
                <div className="font-semibold text-left">Location</div>
              </th>
              <th className="p-2">
                <div className="font-semibold text-left">Phone</div>
              </th>
              <th className="p-2">
                <div className="font-semibold text-left">Generak Consuoltant</div>
              </th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody className="text-sm font-medium divide-y divide-slate-100">
            {/* Row */}
            {data.length > 0 ? data.map((item,idx) => (
              <tr key={idx}>
                <td className="p-2">
                  <div className="text-left text-gray-700 capitalize line-clamp-1">
                    <Link className='text-blue-800' to={'#'}>{item.name}</Link>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-left text-gray-700 capitalize line-clamp-1">{item.type}</div>
                </td>
                <td className="p-2">
                  <div className="text-left text-gray-700 capitalize line-clamp-1">{item.size}</div>
                </td>
                <td className="p-2">
                  <div className="text-left text-gray-700 capitalize line-clamp-1">{item.location}</div>
                </td>
                <td className="p-2">
                  <div className="text-left text-gray-700 capitalize line-clamp-1">{item.phone}</div>
                </td>
                <td className="p-2">
                  <div className="text-left text-gray-700 capitalize line-clamp-1">
                    <Link className='text-blue-800' to={'#'}>{item.consultant}</Link>
                  </div>
                </td>
              </tr>
            )) : <tr >
                <td colSpan={6} className="text-center text-lg font-medium text-slate-500 py-2">
                  no data availble in table
                </td>
              </tr>}
          </tbody>
        </table>

        <div className="text-sm text-slate-500 text-center sm:text-left mt-2">
        Showing <span className="font-medium text-slate-600 ">1</span> to <span className="font-medium text-slate-600 ">10</span> of <span className="font-medium text-slate-600 ">467</span> results
      </div>
      </div>
    </div>
  )
}