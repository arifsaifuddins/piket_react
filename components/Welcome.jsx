import React from 'react'
import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <div className="flex flex-col justify-around items-center h-full">
      <img src='./svg/navbar/welcome.svg' className='w-80 ' alt="svg" />
      <div className="w-full p-5 text-center">
        <h3 className='font-semibold my-5 text-2xl'>Hai, Semua...</h3>
        <h4 className="mb-10 text-2xl" >Selamat datang di Piket Sabtu</h4>
        <Link to={'/menu'} className='bg-[#f59800] p-4 rounded-md text-white font-extrabold w-full block shadow-lg text-2xl'>Lihat Menu Puasa</Link>
      </div>
    </div>
  )
}
