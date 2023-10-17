import React, { useEffect, useRef, useState } from 'react'
import { CircleChart, Table } from '../components'

const Target = ({data=[]}) => {
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

  return (
    <div className='space-y-3'>
      <header className="bg-white shadow rounded-sm flex items-center justify-between px-5 py-4 border-b border-slate-100 cursor-pointer" onClick={() => setIsActive(!isActive)}>
        <h2 className="text-xl font-semibold text-gray-500 capitalize">
          target asset alloction & news
        </h2>
        <span className={`transition-all ease-in-out duration-500 ${isActive ? '' : '-rotate-180'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </header>
      <div className="transition-all ease-in-out duration-500 overflow-hidden" style={{ height: `${isActive ? `${height+2}px` : "0px"}` }}>
        <div ref={ref} className='grid grid-cols-3 gap-4'>
          <CircleChart />
          <Table keys={keys} data={data}/>
        </div>
      </div>
    </div>
  )
}

export default Target