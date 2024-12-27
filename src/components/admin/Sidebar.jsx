import React, { useState } from "react";
import {
  BsArrowLeftShort,
  BsBook,
  BsHouse,
  BsPersonBadge,
  BsCardChecklist,
} from "react-icons/bs";
import imageUser from "../../assets/bokolo.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { serviceCount } from "../../service/Service";
import {
  AiOutlineLogout,
  AiOutlineSetting,
  AiOutlineFilePdf,
  AiOutlineVideoCamera,
} from "react-icons/ai";

import { useAuth } from "../../context/AuthContext";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const token = serviceCount.getToken();
  const {role,logout} = useAuth()

  const logoutAdmin = () => {
      logout()
      navigate('/')
  };

  return (
    <div
      className={`sideBar bg-white h-screen p-5 ${
        open ? "w-72" : "w-20"
      } duration-300 relative shadow-lg`}
    >
      <BsArrowLeftShort
        className={`bg-[#6C63FF] text-3xl rounded-full absolute -right-1 top-3 text-white cursor-pointer ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />
      <div className="image flex items-center">
        <p className="font-bold text-indigo-600 text-2xl cursor-pointer">E-Learing</p>
      </div>
      <hr className="mt-3" />
      {role=== "admin" ? (
        <ul className="mt-3 text-sm">
          <li>
            <NavLink
              to="dashboard"
              className={({ isActive }) =>
                `flex items-center p-2 duration-200 rounded-md ${
                  isActive ? "bg-gray-100" : "text-gray-600"
                } hover:bg-gray-100 hover:text-white`
              }
            >
              <BsHouse className="text-lg font-bold" />
              <span className={`pl-6 ${!open && "hidden"}`}>
                Tableau de bord
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="formateur"
              className={({ isActive }) =>
                `flex items-center p-2 duration-200 rounded-md mt-2 ${
                  isActive ? "bg-[#6C63FF] text-white" : "text-gray-600"
                } hover:bg-[#6C63FF] hover:text-white`
              }
            >
              <BsPersonBadge className="text-lg font-bold" />
              <span className={`pl-6 ${!open && "hidden"}`}>Formateur</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="livre"
              className={({ isActive }) =>
                `flex items-center p-2 duration-200 rounded-md mt-2 ${
                  isActive ? "bg-[#6C63FF] text-white" : "text-gray-600"
                } hover:bg-[#6C63FF] hover:text-white`
              }
            >
              <BsBook className="text-lg font-bold" />
              <span className={`pl-6 ${!open && "hidden"}`}>Livre</span>
            </NavLink>
          </li>
          <div className="mt-52">
            <li>
              <NavLink
                to="parametre"
                className={({ isActive }) =>
                  `flex items-center p-2 duration-200 rounded-md mt-2 ${
                    isActive ? "bg-[#6C63FF] text-white" : "text-gray-600"
                  } hover:bg-[#6C63FF] hover:text-white`
                }
              >
                <AiOutlineSetting className="text-lg font-bold" />
                <span className={`pl-6 ${!open && "hidden"}`}>Paramètre</span>
              </NavLink>
            </li>
            <li
              className="flex items-center cursor-pointer hover:bg-[#6C63FF] hover:text-white p-2 rounded-md duration-200 text-gray-600 mt-2"
              onClick={logout}
            >
              <AiOutlineLogout className="text-lg font-bold" />
              <button className={`pl-6 ${!open && "hidden"}`}>
                Déconnexion
              </button>
            </li>
          </div>
        </ul>
      ) : (
        <ul className="mt-3 text-sm">
          <li>
            <NavLink
              to="dashboard"
              className={({ isActive }) =>
                `flex items-center p-2 duration-200 rounded-md ${
                  isActive ? "bg-gray-200 font-semibold" : "font-semibold"
                } hover:bg-gray-200 hover:font-semibold`
              }
            >
              <BsHouse className="text-lg font-bold" />
              <span className={`pl-6 ${!open && "hidden"}`}>
                Tableau de bord
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/cours"
              className={({ isActive }) =>
                `flex items-center p-2 duration-200 rounded-md mt-2 ${
                  isActive ? "bg-gray-200 font-semibold" : "font-semibold"
                } hover:bg-gray-200 hover:font-semibold`
              }
            >
              <BsCardChecklist className="text-lg font-bold" />
              <span className={`pl-6 ${!open && "hidden"}`}>Cours</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="video"
              className={({ isActive }) =>
                `flex items-center p-2 duration-200 rounded-md mt-2 ${
                  isActive ? "bg-gray-200 font-semibold" : "font-semibold"
                } hover:bg-gray-200 hover:font-semibold`
              }
            >
              <AiOutlineVideoCamera className="text-lg font-bold" />
              <span className={`pl-6 ${!open && "hidden"}`}>Vidéo</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="quiz"
              className={({ isActive }) =>
                `flex items-center p-2 duration-200 rounded-md mt-2 ${
                  isActive ? "bg-gray-200 font-semibold" : "font-semibold"
                } hover:bg-gray-200 hover:font-semibold`
              }
            >
              <BsCardChecklist className="text-lg font-bold" />
              <span className={`pl-6 ${!open && "hidden"}`}>Quiz</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="support-pdf"
              className={({ isActive }) =>
                `flex items-center p-2 duration-200 rounded-md mt-2 ${
                  isActive ? "bg-gray-200 font-semibold" : "font-semibold"
                } hover:bg-gray-200 hover:font-semibold`
              }
            >
              <AiOutlineFilePdf className="text-lg font-bold" />
              <span className={`pl-6 ${!open && "hidden"}`}>Support PDF</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="examen"
              className={({ isActive }) =>
                `flex items-center p-2 duration-200 rounded-md mt-2 ${
                  isActive ? "bg-gray-200 font-semibold" : "font-semibold"
                } hover:bg-gray-200 hover:font-semibold`
              }
            >
              <BsCardChecklist className="text-lg font-bold" />
              <span className={`pl-6 ${!open && "hidden"}`}>Examen</span>
            </NavLink>
          </li>
          <div className="mt-20">
            <li>
              <NavLink
                to="parametre"
                className={({ isActive }) =>
                  `flex items-center p-2 duration-200 rounded-md mt-2 ${
                    isActive ? "bg-gray-200 font-semibold" : "font-semibold"
                  } hover:bg-gray-200 hover:font-semibold`
                }
              >
                <AiOutlineSetting className="text-lg font-bold" />
                <span className={`pl-6 ${!open && "hidden"}`}>Paramètre</span>
              </NavLink>
            </li>
            <li
              className="flex items-center cursor-pointer hover:bg-gray-200 hover:font-semibold p-2 rounded-md duration-200  mt-2"
              onClick={logoutAdmin}
            >
              <AiOutlineLogout className="text-lg font-bold" />
              <button className={`pl-6 ${!open && "hidden"} font-semibold`}>
                Déconnexion
              </button>
            </li>
          </div>
        </ul>
      )}
    </div>
  );
}
