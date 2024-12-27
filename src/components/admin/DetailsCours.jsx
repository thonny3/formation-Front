import React, { useEffect, useState } from "react";
import imageDefault from  '../../assets/javascript.jpg'
export default function DetailsCours({ titre, description, chapitres,image}) {
  return (
    <>
      <div className=" shadow-md p-3  rounded-md flex items-center">
        <img src={`http://localhost:3000/${image}`} alt="" width={100}/>
        <div className="ml-3">
        <h1 className="text-2xl font-semibold ">{titre}</h1>
        <p className="text-sm text-gray-800">{description} </p>
       
        </div>
      </div>
      <div className="mt-3">
       {
        (chapitres.length>0)?( chapitres.map((chapitre,index) => (
            <div className="flex items-center mb-2" key={index}>
              <span className="bg-indigo-700 text-white  w-6 h-6 text-center  rounded-full mr-3">
                {index+1}
              </span>
              <h3 className="text-lg font-semibold  p-2 rounded-md">
                {chapitre.titre}
              </h3>
            </div>
          ))):(<div className="flex items-center mb-2">
          <span className="bg-red-600 text-white  w-6 h-6 text-center  rounded-full mr-3">
            ✓
          </span>
          <h3 className="text-lg font-semibold  p-2 rounded-md">
           Pas de chapitres
          </h3>
        </div>)
       }
      </div>
    </>
  );
}
