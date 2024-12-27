import React, { createContext, useContext, useEffect, useState } from 'react'
import { PanierService } from '../service/PanierService'

const CoursContext  =  createContext()

export default function CoursProvider({children}) {
    const id_user =  JSON.parse(localStorage.getItem("user")) 
   

    const [listCours,setListCours] =  useState([])

    const getPanierByUser  =  ()=>{
      if (!id_user || !id_user.id_utilisateur) {
        console.log("Utilisateur non connecté ou ID utilisateur manquant");
        setListCours([]);
        return;
    }
    PanierService.getPayementByUser(id_user.id_utilisateur)
    .then((res) => {
        setListCours(res.data);
        console.log("Données récupérées:", res.data);
    })
    .catch((error) => {
        if (error.response && error.response.status === 404) {
            // Si le panier n'existe pas, définir une liste vide
            console.log("Aucun panier trouvé pour l'utilisateur:", id_user.id_utilisateur);
            setListCours([]);
        } else {
            console.log("Erreur lors de la récupération des données:", error);
        }
    })
    }
    

    useEffect(()=>{
      getPanierByUser()
    },[])

    

  return (
    <CoursContext.Provider value={{listCours,setListCours,getPanierByUser}} >
        {children}
    </CoursContext.Provider>
  )
}

export  const  useCours = ()=>{
    return  useContext(CoursContext)
}
