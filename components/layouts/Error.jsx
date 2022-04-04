import React from 'react'
import Header from './Header'
import Navbar from './Navbar'

export default function Error() {
  return (
    <div className='py-24 flex h-[100vh]'>
      <Header />
      <div className="m-auto text-center">
        <h1 className='text-[#f59800] text-8xl font-bold'>404</h1>
        <h3 className='mt-4 text-2xl font-bold'>Halaman Tidak Ada...</h3>
      </div>
      <Navbar />
    </div>
  )
}
