import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import Jadwal from './Jadwal'
import Header from './layouts/Header'
import Navbar from './layouts/Navbar'

export default function Shalat() {

  const [kota, setKota] = useState('Khartoum')
  const [negara, setNegara] = useState('Sudan')

  const [kotaLoc, setKotaLoc] = useState('Khartoum')
  const [negaraLoc, setNegaraLoc] = useState('Sudan')

  const [cuaca, setCuaca] = useState(30)
  const [jadwal, setJadwal] = useState([])

  const alert = useAlert()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchWeather = async () => {
    return await fetch(`https://api.weatherapi.com/v1/current.json?key=c9ce1b8c35d04ec4bfe171021220801&q=${kota}`)
      .then(res => res.json())
      .then(res => {
        setCuaca(res.current.temp_c)
        setKotaLoc(res.location.name)
        setNegaraLoc(res.location.country)
      })
  }

  const fetchData = async () => {
    return await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${kota}&country=${negara}`)
      .then(res => res.json())
      .then(res => {

        const kot = document.querySelector('.kota')
        const neg = document.querySelector('.neg')

        if (res.code == '200') {
          fetchWeather()
          setJadwal(res.data.timings)
          kot.value = ''
          neg.value = ''
        } else if (res.code == '400') {
          alert.show(
            <div className='bg-white fixed text-black p-3 rounded-lg shadow-lg z-10 w-full left-0 bottom-5  text-center'>
              <h1 className='text-2xl text-red-600 font-bold lowercase first-letter:uppercase'>Error !</h1>
              <div className='mt-3 lowercase first-letter:uppercase font-bold text-lg text-[#f59800]'>Kota atau Negara tidak ada,<br />coba lokasi lain...</div>
            </div>)
          kot.value = ''
          neg.value = ''
        } else {
          setJadwal(res.data.timings)
        }
      })
  }

  return (
    <div>
      <Header />
      <div className='py-20 flex flex-col'>
        <div className="p-4 text-center">
          <h1 className='text-8xl mb-8 font-bold w-full'>{Math.ceil(parseInt(cuaca))} <div className="text-4xl align-top inline">&deg;</div>c</h1>
          <h1 className="text-xl text-[#f59800] mb-4">{`Wilayah ${kotaLoc}, ${negaraLoc}`}</h1>
          <h1 className="text-4xl font-extrabold">Shalat | Cuaca <img src="../svg/navbar/rotate.svg" className='w-8 inline ml-2 cursor-pointer' onClick={() => window.location.href = '/shalat'} alt="refresh" /></h1>
        </div>
        <hr className='border-b-1 w-[98%] my-6 mx-auto border-slate-800 ' />
        <div className='flex flex-col'>
          <Jadwal jadwal={jadwal} />
        </div>
        <div className="mt-10 w-full flex">
          <input type="text" className='p-3 text-xl outline-none focus:border-[#f59800] border w-[50%] mr-2 shadow rounded-lg border-slate-800 kota' placeholder='Kota...' required onChange={(e) => setKota(e.target.value)} />
          <input type="text" className='p-3 text-xl outline-none focus:border-[#f59800] border w-[50%] ml-2 shadow rounded-lg border-slate-800 neg' placeholder='Negara...' required onChange={(e) => setNegara(e.target.value)} />
        </div>
        <div className="mt-4 bg-[#f59800] hover:bg-[#f58500] p-3 shadow rounded-lg text-center font-bold text-2xl text-white cursor-pointer" onClick={() => fetchData()}>Ubah Lokasi</div>
      </div>
      <Navbar />
    </div>
  )
}
