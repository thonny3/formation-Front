import React from 'react'
import javascript from '../../assets/javascript.jpg'
export default function Cours() {
  return (
    <>
        <div className="cours flex gap-3 hover:bg-white w-full">
          <img src={javascript} alt="" className='w-24'/>
          <div className="description_cours  p-2 ">
            <a  className='text-indigo-800 cursor-pointer'>Web developpement</a>
            <p className='text-sm'>Leçons : 25 Vidéo</p>
            <p className='text-sm'>Technologie Avance</p>
          </div>
        </div>
    </>
  )
}
