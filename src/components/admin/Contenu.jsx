import React, { useState } from "react";

import { Link, Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
export default function Contenu() {
  return (
   <>
    <div className="contenu_admin bg-gray-100 w-full relative">
         <Header></Header>
          <div className="ml-3 overflow-y-scroll max-h-[600px]"> <Outlet/></div>
        </div>
   </>
  )
}
