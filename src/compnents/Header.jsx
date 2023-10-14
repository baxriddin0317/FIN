import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '/assets/images/logo.png'

export function Header() {

  return (
    <header className="sticky top-0 bg-white border-b border-slate-200 z-30">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-16 -mb-px">
        {/* site logo */}
        <Link className='relative h-10 w-44' to={'/'}>
          <img className='absolute w-full h-full object-cover' src={Logo} alt='logo' />
        </Link>

        {/* menu */}
        <nav className='flex items-center gap-4'>
          <Link className='text-slate-400 font-bold uppercase' to={'/'}>
            Home
          </Link>
        </nav>

        </div>
      </div>
    </header>
  );
}