import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './layouts/Header'
import Navbar from './layouts/Navbar'

export default function Menu() {

  const { id } = useParams()

  return (
    <div className='py-24 flex flex-col'>
      <Header />
      <h1>{id}</h1>
      <Navbar />
    </div>
  )
}
