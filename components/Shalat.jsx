import React, { useEffect, useState } from 'react'
import Jadwal from './Jadwal'
import Header from './layouts/Header'
import Navbar from './layouts/Navbar'

export default function Shalat() {

  const [kota, setKota] = useState('Khartoum')
  const [negara, setNegara] = useState('Sudan')
  const [jadwal, setJadwal] = useState([])

  useEffect(() => { fetchData() }, [])

  const fetchData = async () => {
    return await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${kota}&country=${negara}`)
      .then(res => res.json())
      .then(res => {
        setJadwal(res.data.timings)
        document.querySelector('.kota').value = ''
        document.querySelector('.neg').value = ''
      })
  }

  return (
    <div>
      <Header />
      <div className='py-20 flex flex-col'>
        <div className="p-4 text-center">
          <h1 className=" text-4xl font-extrabold">Jadwal Shalat</h1>
          <h1 className="text-xl text-[#f59800] mt-3">{`Wilayah ${kota}, ${negara}`}</h1>
        </div>
        <hr className='border-b-1 w-[98%] my-6 mx-auto border-slate-800 ' />
        <div className='flex flex-col'>
          <Jadwal jadwal={jadwal} />
        </div>
        <div className="mt-10 w-full flex">
          <input type="text" className='p-3 text-xl outline-none focus:border-[#f59800] border w-[50%] mr-2 shadow rounded-lg border-slate-800 kota' placeholder='Kota...' required onChange={(e) => setKota(e.target.value)} />
          <input type="text" className='p-3 text-xl outline-none focus:border-[#f59800] border w-[50%] ml-2 shadow rounded-lg border-slate-800 neg' placeholder='Neagara...' required onChange={(e) => setNegara(e.target.value)} />
        </div>
        <div className="mt-4 bg-[#f59800] hover:bg-[#f58500] p-3 shadow rounded-lg text-center font-bold text-2xl text-white cursor-pointer" onClick={() => fetchData()}>Ubah Lokasi</div>
      </div>
      <Navbar />
    </div>
  )
}
