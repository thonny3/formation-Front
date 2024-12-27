import React from "react";
import { AiFillHome, AiOutlineSetting, AiOutlineLogout } from "react-icons/ai";
import { BsCardChecklist, BsHouse } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


export default function NavBar() {
  const {logout} = useAuth()
  const navigate   = useNavigate()

  const logoutUser = ()=>{
    logout()
    navigate("/")
  }
  return (
    <ul>
      <Link to="/user" className="flex items-center rounded-md mt-5 font-semibold p-2 bg-gray-200 cursor-pointer">
        <BsHouse className="text-lg " />
        <span className="pl-3">Acceuil</span>
      </Link>
      <Link to="/user/tableau" className="flex items-center rounded-md mt-5 font-semibold p-2  cursor-pointer">
        <BsHouse className="text-lg " />
        <span className="pl-3">Tableau de Board</span>
      </Link>
      <Link to="/user/cours" className="flex items-center rounded-md mt-5 font-semibold p-2 cursor-pointer">
        <BsCardChecklist className="text-lg " />
        <span className="pl-3">Mes cours</span>
      </Link>
      <Link className="flex items-center rounded-md mt-5 font-semibold p-2 cursor-pointer">
        <BsCardChecklist className="text-lg " />
        <span className="pl-3">Mes livre</span>
      </Link>

      <Link className="flex items-center rounded-md mt-5 font-semibold p-2 cursor-pointer">
        <AiOutlineSetting className="text-lg " />
        <span className="pl-3">Paramètre</span>
      </Link>
      <div className="flex items-center rounded-md mt-5 font-semibold p-2 cursor-pointer" onClick={logoutUser}>
        <AiOutlineLogout className="text-lg font-bold" />
        <button className={`pl-6 font-semibold`}>Déconnexion</button>
      </div>
    </ul>
  );
}
