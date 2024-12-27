import React, { useState } from "react";
import { Link ,useLocation, useNavigate } from "react-router-dom";
import { serviceCount } from "../../service/Service";

function Header() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
   

    const logout = ()=>{
      localStorage.removeItem('token')
      navigate('/')
    }
    

  return (
    <header className="bg-white shadow-xs">
      <nav className="flex justify-around items-center w-[96%] mx-auto  h-14">
      <p className="font-bold text-indigo-600 text-2xl cursor-pointer">E-Learing</p>
        <div>
          <ul className="flex items-center gap-[6vw]">
          <li>
              <Link
                to="/home"
                className="text-gray-700 text-sm font-semibold"
              >
                Acceuil
              </Link>
            </li>
    
            <li>
              <a href="" className="text-gray-700  text-sm font-semibold">
                A propos
              </a>
            </li>
            <li>
              <a href="" className="text-gray-700 text-sm font-semibold">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
        <button className="bg-gray-200 font-semibold px-4 py-2  rounded-lg  text-sm mr-5">
          <Link to="/connexion">Se connecter</Link>
        </button>
        <button className="bg-[#8A3FFC] text-white px-6 py-2 rounded-lg hover:shadow-lg  text-sm">
          <Link to="/registre">S' inscrire</Link>
        </button>
      </div>
      </nav>
    </header>
  );
}

export default Header;
