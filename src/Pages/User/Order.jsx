import React, { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { useCours } from "../../context/CoursContext";
import Modal from "../../components/Modal";
import { PanierService } from "../../service/PanierService";
import { useNavigate } from "react-router-dom";

export default function Order() {
  const { listCours, getPanierByUser } = useCours();
  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState(false);
  const [id_pan, setId_pan] = useState(null);
  const  navigate  = useNavigate()

  const result = () => {
    return listCours.reduce((somme, cours) => {
      const prix = parseFloat(cours.prix);
      return somme + (isNaN(prix) ? 0 : prix);
    }, 0);
  };

  const deletePanier = () => {
    if (!id_pan) {
      console.log("ID panier manquant");
      return;
    }

    console.log("Suppression du panier ID:", id_pan);
    PanierService.deletePanier(id_pan)
      .then((res) => {
        console.log("Suppression réussie:", res);
        getPanierByUser();
        setOpen(false);
      })
      .catch((error) => {
        console.log("Erreur lors de la suppression:", error);
      });
  };

  useEffect(() => {
    if (listCours.length > 0) {
      setTotal(result());
      console.log("Liste des cours mise à jour:", listCours);
    }
  }, [listCours]);

  return (
    <>
      <div className="flex mt-12  overflow-y-scroll max-h-[450px] h-full">
        <div className="order w-[60%] shadow-xl bg-white p-2  h-full">
          <h1 className="font-semibold mb-3 text-center text-2xl">Résumé de commande</h1>
          {listCours.length > 0 ? (
            listCours.map((data, index) => (
              <div
                className="order_cours flex items-center justify-between mt-5 px-3"
                key={index}
              >
                <div className="left flex items-center w-[70%]">
                  <img
                    src={`http://localhost:3000/${data.image_couverture}`}
                    className="w-32"
                    alt=""
                  />
                  <div className="left-text pl-2">
                    <p>{data.titre}</p>
                    <p className="text-sm text-gray-600">{data.description}</p>
                  </div>
                </div>
                <div className="right flex items-center">
                  <span>{data.prix} Ar</span>
                  <BsTrash
                    className="ml-3 text-xl cursor-pointer text-red-600"
                    onClick={() => {
                      console.log("ID panier à supprimer:", data.id_pan); // Ajout du log
                      setId_pan(data.id_pan);
                      setOpen(true);
                    }}
                  />
                </div>
              </div>
            ))
          ) : (
            <>
              <p>
                Votre panier est actuellement vide. Parcourez nos cours pour
                commencer à apprendre.
              </p>
              <div className="flex justify-center items-center mx-auto my-10">
             <button className="bg-indigo-700 text-white px-4 py-2" onClick={()=>navigate('/user')}>Voir les cours</button>
             </div>
            </>
          )}
        </div>
        {
  listCours.length > 0 ? (
    <div className="checkout ml-5 w-[35%] py-3 rounded-md bg-white h-full">
      <h1 className="font-semibold mb-3 text-center">Summary</h1>
      <ul className="px-5 pt-5">
        {listCours.map((data, index) => (
          <li className="flex justify-between mt-3" key={index}>
            <span className="text-sm font-semibold w-[70%]">{data.titre}</span>
            <span>{data.prix} Ar</span>
          </li>
        ))}
      </ul>
      <ul className="mt-10 px-5">
        <hr />
        <li className="flex justify-between">
          <span>Total : </span>
          <span className="font-semibold">{total} Ar</span>
        </li>
      </ul>
      <div className="px-5">
        <button className="mt-5 bg-indigo-700 w-full text-white px-4 py-2">
          Payement
        </button>
      </div>
    </div>
  ) : null
}

      </div>
      {/**Modal pour supprimer Cours  */}
      <Modal open={open}>
        <h1 className="font-bold text-red-500  text-center">
          Supprimer le cours
        </h1>
        <div className="flex justify-center  items-center">
          <div className="body-delete mt-3">
            <p className="text-sm  text-gray-600">
              Êtes-vous sûr de vouloir supprimer ce cours?{" "}
            </p>
            <BsTrash className="text-3xl mt-3 mx-auto" />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="text-white bg-red-500 px-4 py-2 rounded-lg"
            onClick={deletePanier}
          >
            Confirmer
          </button>
          <button
            className="text-gray-700 bg-gray-200 px-4 py-2 rounded-lg ml-2"
            onClick={() => setOpen(false)}
          >
            Annuler
          </button>
        </div>
      </Modal>
    </>
  );
}
