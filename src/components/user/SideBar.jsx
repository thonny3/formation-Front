import React from "react";
import image_user from "../../assets/bokolo.jpg"
import Sidebar from "../admin/Sidebar";
import NavBar from "./NavBar";
import { useAuth } from "../../context/AuthContext";
export default function SideBar() {
  const {user } =  useAuth()
  return (
    <div className="bg-white h-screen w-72 shadow-2xl p-5">
        <div className="image_user  flex justify-center items-center">
            <div className=" rounded-full relative">
                <img src={image_user} alt="" className="w-14 h-14 rounded-full" />
                <p className="w-3 h-3 bg-green-500 rounded-full absolute right-1 bottom-1"></p>
            </div>
        </div>
        <p className="font-semibold text-center text-gray-700">{user.nom}</p>
        <NavBar/>
    </div>
  );
}
