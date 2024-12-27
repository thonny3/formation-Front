import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Apprentissage() {
   const naviagate =  useNavigate()

   const tableauBoard = ()=>{
    naviagate('tableau')
   }
   const cours = ()=>{
    naviagate('cours')
   }
  return (
    <div className='mt-10 px-10'>
        <h3 className='font-bold'>Mes Programmes</h3>
        <div className='contenu bg-gray-100 h-[400px] '>
        <ul className='w-full mt-2 px-3 text-sm flex items-center gap-8 py-3 border-b-2 border-gray-300'>
            <li className='cursor-pointer' onClick={tableauBoard}>Tableau de board</li>
            <li  className='cursor-pointer'onClick={cours} >Mes cours</li>
            <li  className='cursor-pointer'>Mes Livres</li>
            <li  className='cursor-pointer'>Quiz</li>
        </ul>
        <div className="container mt-3 px-3">
            <Outlet/>
        </div>
        </div>
    </div>
  )
}
