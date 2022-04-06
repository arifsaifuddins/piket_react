import React from 'react'

export default function Jadwal({ jadwal }) {
  return (
    <div>
      <div className="w-full p-3 shadow-md rounded-lg flex justify-between items-center">
        <h1 className="text-[#f59800] font-bold text-2xl flex items-center">
          <img src={'../svg/navbar/mosque.svg'} alt="icon" className='w-8 h-8 mr-3 inline ' />Shubuh</h1>
        <div className="bg-[#f59800] shadow-lg h-full px-6 py-3 font-extrabold text-2xl rounded-lg text-white">{jadwal.Fajr}</div>
      </div>
      <div className="w-full p-3 shadow-md rounded-lg flex justify-between items-center">
        <h1 className="text-[#f59800] font-bold text-2xl flex items-center">
          <img src={'../svg/navbar/sun.svg'} alt="icon" className='w-8 h-8 mr-3 inline ' />Terbit</h1>
        <div className="bg-[#f59800] shadow-lg h-full px-6 py-3 font-extrabold text-2xl rounded-lg text-white">{jadwal.Sunrise}</div>
      </div>
      <div className="w-full p-3 shadow-md rounded-lg flex justify-between items-center">
        <h1 className="text-[#f59800] font-bold text-2xl flex items-center">
          <img src={'../svg/navbar/mosque.svg'} alt="icon" className='w-8 h-8 mr-3 inline ' />Dzuhur</h1>
        <div className="bg-[#f59800] shadow-lg h-full px-6 py-3 font-extrabold text-2xl rounded-lg text-white">{jadwal.Dhuhr}</div>
      </div>
      <div className="w-full p-3 shadow-md rounded-lg flex justify-between items-center">
        <h1 className="text-[#f59800] font-bold text-2xl flex items-center">
          <img src={'../svg/navbar/mosque.svg'} alt="icon" className='w-8 h-8 mr-3 inline ' />Asar</h1>
        <div className="bg-[#f59800] shadow-lg h-full px-6 py-3 font-extrabold text-2xl rounded-lg text-white">{jadwal.Asr}</div>
      </div>
      <div className="w-full p-3 shadow-md rounded-lg flex justify-between items-center">
        <h1 className="text-[#f59800] font-bold text-2xl flex items-center">
          <img src={'../svg/navbar/mosque.svg'} alt="icon" className='w-8 h-8 mr-3 inline ' />Maghrib</h1>
        <div className="bg-[#f59800] shadow-lg h-full px-6 py-3 font-extrabold text-2xl rounded-lg text-white">{jadwal.Maghrib}</div>
      </div>
      <div className="w-full p-3 shadow-md rounded-lg flex justify-between items-center">
        <h1 className="text-[#f59800] font-bold text-2xl flex items-center">
          <img src={'../svg/navbar/mosque.svg'} alt="icon" className='w-8 h-8 mr-3 inline ' />Isya'</h1>
        <div className="bg-[#f59800] shadow-lg h-full px-6 py-3 font-extrabold text-2xl rounded-lg text-white">{jadwal.Isha}</div>
      </div>
      <div className="w-full p-3 shadow-md rounded-lg flex justify-between items-center">
        <h1 className="text-[#f59800] font-bold text-2xl flex items-center">
          <img src={'../svg/navbar/moon.svg'} alt="icon" className='w-8 h-8 mr-3 inline ' />Imsak</h1>
        <div className="bg-[#f59800] shadow-lg h-full px-6 py-3 font-extrabold text-2xl rounded-lg text-white">{jadwal.Imsak}</div>
      </div>
    </div>
  )
}
