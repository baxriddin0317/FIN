import React from 'react'

export const DashboardMap = () => {
  return (
    <div className='bg-white col-span-2 shadow-lg rounded-sm border border-slate-200'>
      <div className='p-5'>
      <iframe title='myMap' className='w-full h-72' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.122782844418!2d-73.98070228757368!3d40.75932413459651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258feb834773b%3A0xaa70abfd11842ab7!2s45%20Rockefeller%20Plaza%2C%20New%20York%2C%20NY%2010111%2C%20USA!5e0!3m2!1sen!2s!4v1685512478280!5m2!1sen!2s" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </div>
  )
}