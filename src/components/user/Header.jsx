import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import imageUser from "../../assets/bokolo.jpg";
import { BsArrowBarDown, BsCart } from "react-icons/bs";
import { useCours } from "../../context/CoursContext";
export default function Header() {
  const [open, setOpen] = useState(false);
  const { listCours } = useCours();

  const navigate = useNavigate();
  const orderPage = () => {
    navigate("order");
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="flex justify-between items-center w-[96%] mx-auto  h-14">
        <div>
          <h1 className="text-indigo-700 text-2xl font-bold">E-Learning</h1>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-sm text-gray-500 font-bold hover:text-[#8A3FFC]">
            Mon apprentissage
          </button>
          <div className="cart relative cursor-pointer" onClick={orderPage}>
            <BsCart className="font-bold text-gray-600 text-2xl" />
            {
              (listCours.length>0)?(<div className="bg-red-500 text-white text-xs absolute -top-1 left-1 rounded-full w-4 h-4 text-center">
              <span>{listCours.length}</span>
            </div>):null
            }
          </div>
          <div className="user relative">
            <img
              src={imageUser}
              alt=""
              className="w-9 h-9 rounded-full cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
