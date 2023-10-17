import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '/assets/images/logo.png'
import { Dropdown } from './Dropdown';
import { NavMenu } from '../utils/data';

export function Header() {

  return (
    <header className="sticky top-0 bg-white border-b border-slate-200 z-30">
      <div className="max-w-[1480px] mx-auto px-2 md:px-5">
        <div className="flex items-center justify-between h-16 -mb-px">
        {/* site logo */}
        <Link className='relative h-10 w-44' to={'/'}>
          <img className='absolute w-full h-full object-cover' src={Logo} alt='logo' />
        </Link>

        {/* menu */}
        <nav className='hidden xl:flex items-center gap-2.5'>
          {NavMenu.map((item,idx) => !item.dropdown ? (
            <Link key={idx} className='text-slate-400 text-sm whitespace-nowrap font-bold uppercase hover:text-slate-700' to={item.href}>
              {item.name}
            </Link>
          ) : (
            <Dropdown key={idx} item={item} />
          ))}
        </nav>

        {/* humburger btn */}
        <button className='xl:hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </button>

        </div>
      </div>
    </header>
  );
}