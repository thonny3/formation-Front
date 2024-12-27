import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Container() {
  return (
    <>
      <div className="container_user bg-gray-100 w-full relative">
        <Header />
        <div className="ml-3 overflow-y-scroll max-h-[550px]"> <Outlet/></div>
      </div>
    </>
  );
}
