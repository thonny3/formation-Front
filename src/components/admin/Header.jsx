import React, { useState } from "react";
import { AiOutlineBell } from "react-icons/ai";
import imageUser from "../../assets/bokolo.jpg";
import DropdownAdmin from "./DropdownAdmin";
export default function Header() {
  const [open,setOpen] = useState(false)
  return (
    <>
      <div className=" h-20 shadow-lg rounded-md flex items-center pl-5 ml-3 justify-between">
        <h3 className=" text-indigo-700 font-bold">Tableau de board</h3>
        <div>
          <div className="icon flex mr-5">
            <div className="relative bg-white rounded-full p-3 shadow-2xl cursor-pointer mr-5">
              <AiOutlineBell className="text-xl text-gray-800 " />
              <span className="bg-red-600  rounded-full text-center text-sm absolute top-0  right-1 text-white w-5 h-5">
                0
              </span>
            </div>
            <div className=" cursor-pointer" onClick={()=>setOpen(!open)}>
              <img src={imageUser} alt="" className="w-10 h-10 rounded-full" />
             <DropdownAdmin open={open}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
