import React, { useState } from "react";
import { serviceCount } from "../../service/Service";
import { BsBook } from "react-icons/bs";
import LineChart from "../../components/admin/LineChart ";
import PieChart from "../../components/admin/PieChart ";

function Dashboard() {
  const token = JSON.parse(localStorage.getItem("token"));
  return (
    <div className="">
      <div className="flex ">
        <div className="board mt-5 w-[60%] flex gap-4">
          <div className="card shadow-2xl bg-white rounded-xl p-1">
            <div className="card-body flex items-center p-3">
              <BsBook className="text-4xl rounded-lg bg-indigo-700 p-2 text-white font-bold" />
              <div className="ml-3">
                <h3 className="font-bold">5</h3>
                <p className="text-gray-500 text-sm">Nombre du cours</p>
              </div>
            </div>
          </div>
          <div className="card shadow-2xl bg-white rounded-xl p-1">
            <div className="card-body flex items-center p-3">
              <BsBook className="text-4xl rounded-lg bg-pink-700 p-2 text-white font-bold" />
              <div className="ml-3">
                <h3 className="font-bold">1</h3>
                <p className="text-gray-500 text-sm">Nombre du quiz</p>
              </div>
            </div>
          </div>
          <div className="card shadow-2xl bg-white rounded-xl p-1">
            <div className="card-body flex items-center p-3">
              <BsBook className="text-4xl rounded-lg bg-green-700 p-2 text-white font-bold" />
              <div className="ml-3">
                <h3 className="font-bold">1</h3>
                <p className="text-gray-500 text-sm">Nombre du support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-white shadow-xl mt-5">
        <div className="mt-5 w-[60%] ">
          <LineChart />
        </div>
        <PieChart />
      </div>
      
    </div>
  );
}

export default Dashboard;
