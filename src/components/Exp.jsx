"use client"
import React from 'react'
import { Outlet } from 'react-router-dom'

const Exp = () => {
  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
        <div className='bg-blue-200'>sidebar</div>
        <div className='bg-teal-200'>header</div>
        <div>{<Outlet/>}</div>
        <p>footter</p>


    </div>
  )
}

export default Exp