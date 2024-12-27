import React from "react";
import { BsBookmark } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";

export default function ({nombre,titre,icon}) {
  const  iconCard = ()=>{
    if (icon=="cours") {
      return  <BsBookmark className="text-2xl text-white" />
    }else if(icon=="quiz"){
      return  <FaGraduationCap className="text-2xl text-white" />
    }else  if(icon=="certificat"){
      return  <FaGraduationCap className="text-2xl text-white" />
    }
  }
  return (

    <div className="card bg-white  shadow-xl rounded-lg px-2">
      <div className="card-body flex items-center">
        <div className="icon  bg-gradient-to-b from-pink-600 to-indigo-600 p-2 rounded-md">
        {iconCard()}
        </div>
        <div className="description pl-5">
          <p className="font-bold text-2xl">{nombre}</p>
          <p>{titre}</p>
        </div>
      </div>
      <div className="card-footer py-2 px-2">
        <p className="text-sm text-indigo-700 font-semibold">Voir detail</p>
      </div>
    </div>
  );
}
