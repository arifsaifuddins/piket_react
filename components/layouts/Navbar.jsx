import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

  const active = ({ isActive }) => {
    return {
      color: isActive ? '#111' : '#f59800',
      fontWeight: isActive ? 'bold' : 'normal'
    }
  }
  return (
    <div className='shadow flex justify-around items-end py-4 bg-white text-[#f59800] fixed bottom-0 right-0 left-0 sm:w-[400px] mx-auto w-full'>
      <NavLink to={'/menu'} style={active} className='flex flex-col items-center'>
        <img src='../svg/navbar/menu.svg' alt="menu" className='w-6 h-6' />
        <h3 className='text-sm'>Menu</h3>
      </NavLink>
      <NavLink to={'/anggota'} style={active} className='flex flex-col items-center'>
        <img src='../svg/navbar/users.svg' alt="anggota" className='w-6 h-6' />
        <h3 className='text-sm'>Anggota</h3>
      </NavLink>
      <NavLink to={'/about'} style={active} className='flex flex-col items-center'>
        <img src='../svg/navbar/about.svg' alt="about" className='w-6 h-6' />
        <h3 className='text-sm'>Tentang</h3>
      </NavLink>
    </div>
  )
}
