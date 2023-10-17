import React from 'react'
import { KeysData } from '../utils/data'

export const Table = ({keys=[], data=[]}) => {
  return (
    <div className="col-span-full md:col-span-2 overflow-x-auto border border-slate-200 p-3">
      <table className="table-auto w-full">
        {/* Table header */}
        <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
          <tr>
            {keys.length > 0 ? keys.map((item,idx) => (
              <th key={idx} className="p-2">
                <div className="font-semibold text-left">{item}</div>
              </th>
            )) : KeysData.map((item,idx) => (
              <th key={idx} className="p-2">
                <div className="font-semibold text-left">{item}</div>
              </th>
            ))}
          </tr>
        </thead>
        {/* Table body */}
        <tbody className="text-sm font-medium divide-y divide-slate-100">
          {/* Row */}
          {data.length > 0 ? data.map((item,idx) => (
            <tr key={idx}>
              {keys.map((key) => (
                <td className="p-2" key={key}>
                  <div className="text-left text-gray-700 capitalize line-clamp-1">{item[key]}</div>
                </td>
              ))}
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
  )
}