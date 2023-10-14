import React, { useEffect, useRef, useState } from "react";
import { KeysData } from "../utils/data";

export const DashboardTable = ({data=[],title, open}) => {
  const [keys, setKeys] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [height, setHeight] = useState(0);
  const ref = useRef();

  useEffect(() => {
    if(data.length > 0) {
      let res = Object.keys(data[1]);

      setKeys(res);
    }
  }, [data])

  useEffect(() => {
    if (ref.current) {
      setHeight(isActive ? ref.current.clientHeight : 0);
    }
  }, [isActive]);

  useEffect(() => {
    if (open) {
      setIsActive(true)
    }
  }, [open])

  return (
    <div className="col-span-full xl:col-span-8">
      <header className="bg-white shadow rounded-sm flex items-center justify-between px-5 py-4 border-b border-slate-100 cursor-pointer" onClick={() => setIsActive(!isActive)}>
        <h2 className="text-xl font-semibold text-gray-500 capitalize">
          {title ? title: "title"}
        </h2>
        <span className={`transition-all ease-in-out duration-500 ${isActive ? '' : '-rotate-180'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </header>
      <div className="transition-all ease-in-out duration-500 overflow-hidden" style={{ height: `${isActive ? `${height+2}px` : "0px"}` }}>
        {/* Table */}
        <div ref={ref} className="overflow-x-auto border border-slate-200 p-3">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                {keys.length > 0 ? keys.map((item,idx) => (
                  <th key={idx} className="p-2">
                    <div className="font-semibold text-center">{item}</div>
                  </th>
                )) : KeysData.map((item,idx) => (
                  <th key={idx} className="p-2">
                    <div className="font-semibold text-center">{item}</div>
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
                      <div className="text-center text-gray-700 capitalize">{item[key]}</div>
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
      </div>
    </div>
  );
};
