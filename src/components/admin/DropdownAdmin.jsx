import React, { useState } from 'react'
import { AiOutlineLogout, AiOutlineUser } from 'react-icons/ai'


export default function DropdownAdmin({open}) {
  return (
    <div className={`dropdown rounded-lg bg-white absolute z-50 shadow-2xl -right-0 mt-2 mr-3 duration-200 ${open?"opacity-100" :"opacity-0"} `}>
        <ul className="text-sm px-2 py-3 w-36">
          <li className="mt-1 bg-ingdigo-700 py-2 cursor-pointer rounded-md hover:bg-gray-200 duration-100 font-semibold flex gap-2 items-center" >
            <AiOutlineUser className='font-semibold text-xl'></AiOutlineUser>
            <span>Profil</span>
          </li>
    
          <li className="mt-1 bg-igndigo-700 py-2  cursor-pointer rounded-md hover:bg-gray-200 duration-100 font-semibold flex gap-2 items-center" >
            <AiOutlineLogout className='font-semibold text-xl'></AiOutlineLogout>
           <span> Se deconnecter</span>
          </li>
        </ul>
      </div>
  )
}
