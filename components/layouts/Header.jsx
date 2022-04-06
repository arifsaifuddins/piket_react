import React from 'react'

export default function Header() {
  return (
    <div className="flex justify-between items-center fixed top-0 right-0 left-0 h-20 shadow bg-white sm:w-[400px] cursor-pointer px-8 mx-auto w-full">
      <img src="../icons/icon.png" alt="icon" className='w-12' onClick={() => window.location.href = 'https://piketsabtu.netlify.app/menu/'} />
      <h1 onClick={() => window.location.href = 'https://piketsabtu.netlify.app/'} className='text-4xl font-bold mx-3 cursor-pointer'>Piket <span className='bg-[#f59800] p-1 px-3 rounded-md text-white shadow-sm' >Sabtu</span></h1>
      <img src="../svg/navbar/rotate.svg" alt="refresh" className='h-8 w-8 cursor-pointer' onClick={() => window.location.href = 'https://piketsabtu.netlify.app/menu/'} />
    </div>
  )
}
