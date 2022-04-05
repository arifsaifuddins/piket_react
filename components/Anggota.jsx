import React, { useEffect, useState } from 'react'
import Header from './layouts/Header'
import Navbar from './layouts/Navbar'

export default function Anggota() {

  const [pengurus, setPengurus] = useState([])
  const [anggota, setAnggota] = useState([])

  useEffect(() => {
    fetch('./anggota.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        setPengurus(res[0])
        setAnggota(res[1])
      })
  }, [])

  return (
    <div>
      <Header />
      <div className='py-24 flex flex-col'>
        <div className="w-full p-3 mb-10 shadow-md rounded-lg flex justify-center items-center">
          <h1 className="font-bold text-2xl text-[#f59800]">Anggota</h1>
        </div>
        {
          pengurus.map(peng => {
            return (
              <a href={`https://wa.me//${peng.no}`} key={peng.id} target='_blank' className="w-full p-4 flex hover:bg-slate-50 justify-start items-center rounded-lg shadow bg-white mb-5">
                <img src={`./img/${peng.icon}.jpg`} alt={`${peng.icon}`} className='w-24 mr-4 rounded-full' />
                <div className="flex flex-col">
                  <h1 className="text-2xl font-bold">{peng.nama}</h1>
                  <h3 className='text-lg'>{peng.daerah}</h3>
                  <h3 className='text-[#f59800] font-extrabold'>{peng.jabatan}</h3>
                </div>
              </a>
            )
          })
        }
        <div className="grid grid-cols-3 w-full gap-4 mt-10">
          {
            anggota.map(angg => {
              return (
                <a href={`https://wa.me//${angg.no}`} key={angg.no} className="shadow rounded-lg p-4 flex flex-col items-center hover:bg-slate-50">
                  <img src={`./img/${angg.nama}.jpg`} alt={`${angg.nama}`} className='rounded-full mb-4' />
                  <h1 className="text-2xl font-bold">{angg.nama}</h1>
                  <h3 className='text-[#f59800] font-extrabold'>{angg.jabatan}</h3>
                </a>
              )
            })
          }
        </div>
      </div>
      <Navbar />
    </div>
  )
}
