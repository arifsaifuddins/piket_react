import React, { useEffect, useState } from 'react'
import Header from './layouts/Header'
import Navbar from './layouts/Navbar'

export default function About() {

  const [techs, setTechs] = useState([])
  const [sosials, setSosials] = useState([])

  useEffect(() => {
    fetch('./tech.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        setTechs(res[0])
        setSosials(res[1])
      })
  }, [])

  return (
    <div>
      <Header />
      <div className='py-24'>
        <div className="p-4 text-center">
          <img src="./icons/icon.png" alt="icon" className='w-72 mx-auto' />
          <h1 className="mt-5 text-4xl font-extrabold">Piket Sabtu Ramadhan</h1>
        </div>
        <hr className='border-b-1 w-[98%] mx-auto border-slate-800 ' />
        <div className="w-full p-3 mt-16 shadow-md rounded-lg flex justify-between items-center">
          <h1 className="font-bold text-2xl text-[#f59800]">Dibuat dengan Teknologi :</h1>
        </div>
        {
          techs.map(tech => {
            return (
              <a target='_blank' href={tech.url} key={tech.name}>
                <div className="p-3 pt-6 text-xl">
                  <img src={`./logo/${tech.icon}.png`} alt="icon" className='w-8  h-8 inline mr-3' />{tech.name}
                </div>
                <hr className='border-b-1 w-[98%] mx-auto border-slate-800 ' />
              </a>
            )
          })
        }
        <div className="w-full p-3 mt-20 shadow-md rounded-lg flex justify-center items-center">
          <h1 className="font-bold text-2xl text-[#f59800]">Dukung kami di :</h1>
        </div>
        <div className="my-10 w-full flex justify-around items-center">
          {
            sosials.map(sosial => {
              return (
                <a target='_blank' href={sosial.url} key={sosial.name}>
                  <img src={`./svg/sosial/${sosial.name}.svg`} alt={`${sosial.name}`} className='w-8 h-8 ' />
                </a>
              )
            })
          }
        </div>
        <footer className='text-center'>Created &copy; 2022 | Khartoum</footer>
      </div>
      <Navbar />
    </div >
  )
}
