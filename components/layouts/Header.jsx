import React from 'react'

export default function Header() {
  return (
    <div className='flex items-center fixed top-0 right-0 left-0 h-20 shadow bg-white justify-center sm:w-[400px] mx-auto w-full'>
      <img src="../icons/icon.png" alt="icon" className='w-14' />
      <h1 className='text-3xl font-bold mx-3'>Piket <span className='bg-[#f59800] px-2 rounded-md text-white shadow-sm'>Sabtu</span></h1>
    </div>
  )
}
