import React, { useEffect } from "react";
import { useCours } from "../../context/CoursContext";
import CardBoard from "../../components/user/CardBoard";
import BarChart from "../../components/admin/BarChart ";
import StackedBarChart from "../../components/admin/StackedBarChart ";
import Transaction from "../../components/user/Transaction";
import { useAuth } from "../../context/AuthContext";

export default function TableauBoard() {
  const { val, listCours } = useCours();
  const  {user} =  useAuth()

  useEffect(() => {
    console.log(listCours);
  }, []);

  return <>
   <div className="flex mt-5 ">
    <div className="card w-[65%] grid grid-cols-3 space-x-4">
        <CardBoard nombre={2} titre={"Cours"} icon={"cours"}/>
        <CardBoard nombre={1} titre={"Quiz"} icon={"quiz"}/>
        <CardBoard nombre={3} titre={"Certificat"} icon={"certificat"}/>
    </div>
    <div className="user ml-10 bg-white px-10 w-[35%]">
      <h1 className=" font-semibold">Progession profil </h1>
      <div className="progess mt-3 flex items-center gap-4">
        <div className="image w-20 h-20 rounded-full shadow-lg">

        </div>
        <div className="nom">{user.nom}</div>
      </div>
    </div>
   </div>
   <div className="chart w-[65%] mt-10 bg-white">
     <BarChart/>
   </div>
   <div className="transaction mt-5">
    <Transaction/>
   </div>
   <div className="recommendation_cours"></div>
  </>;
}
