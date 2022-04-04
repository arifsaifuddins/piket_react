import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './layouts/Header'
import Navbar from './layouts/Navbar'

export default function Menus() {

  const [menus, setMenus] = useState([])

  useEffect(() => {
    fetch('../data/piket.json')
      .then(res => res.json())
      .then(res => setMenus(res))
  }, [])

  return (
    <div>
      <Header />
      <div className='py-24 flex flex-col'>
        {
          menus.map(menu => {

            return (
              <div className="flex flex-col" key={menu.id}>
                <div className="w-full p-3 shadow-md rounded-lg flex justify-between items-center">
                  <h1 className="font-bold text-2xl">{menu.menu}</h1>
                  <div className="bg-[#f59800] shadow-lg h-full px-6 py-3 font-extrabold text-2xl rounded-lg text-white">{menu.jam}</div>
                </div>
                <div className='mb-20 mt-6'>
                  {
                    menu.daftar.map(daf => {
                      return (
                        <Link to={`/menu/${daf.id}`} key={daf.id}>
                          <div className="p-3 pt-6 text-xl hover:bg-slate-50 rounded-lg hover:text-slate-800 text-[#f59800]">
                            <img src={`../assets/svg/${daf.judul}.svg`} alt="icon" className='w-8  h-8 inline mr-3' />{daf.judul}
                          </div>
                          <hr className='border-b-1 mb-2 w-[98%] mx-auto border-slate-800 ' />
                        </Link>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
      <Navbar />
    </div>
  )
}
