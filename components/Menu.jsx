import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from './layouts/Header'
import Navbar from './layouts/Navbar'

export default function Menu() {

  const { id } = useParams()
  const navigate = useNavigate()

  const [menus, setMenus] = useState([])

  useEffect(() => {
    fetch('../menu.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => setMenus(res[id]))
  }, [])

  return (
    <div className='py-20 flex flex-col'>
      <Header />
      {
        menus.map(menu => {
          return (
            <div key={menu.nama}>
              <div className='text-xl mb-5 flex items-center'>
                <img onClick={() => navigate('/menu')} src="../svg/navbar/back.svg" alt="icon" className='w-5 cursor-pointer inline mr-3' />{`${menu.menu} - ${menu.kategori} - ${menu.nama}`}
              </div>
              <img src={`../menu/${menu.gambar}.jpeg`} alt={`${menu.gambar}`} className='w-full rounded-lg mb-4' />
              <h1 className="font-bold text-3xl text-[#f59800] mb-4">{menu.nama}</h1>
              <p className='first-letter:text-6xl text-lg first-letter:font-bold first-letter:mr-3 first-letter:float-left'>{menu.desc}</p>
              <a target='_blank' href={menu.url} className="w-full mt-4 bg-[#f59800] p-3 text-white font-bold text-xl block rounded-lg text-center" >Baca Lebih Lanjut...</a>
              <hr className='border-b-1 my-4 w-[98%] mx-auto border-slate-800 ' />
            </div>
          )
        })
      }
      <Navbar />
    </div>
  )
}
