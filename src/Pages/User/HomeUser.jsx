import React, { useEffect, useState } from "react";
import photo from "../../assets/study.png";
import javascript from "../../assets/javascript.jpg";
import { FaUser, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { CoursService } from "../../service/CoursService";
import Modal from "../../components/Modal";
import { BsCart, BsCheck } from "react-icons/bs";
import { useCours } from "../../context/CoursContext";
import { useAuth } from "../../context/AuthContext";
import { PanierService } from "../../service/PanierService";

function HomeUser() {
  const [cours, setCours] = useState([]);
  const rating = 4.5; // La note à afficher
  const totalStars = 5; // Nombre total d'étoiles
  const [open, setOpen] = useState(false);
  const [donne,setDonne] = useState([])
  const {setListCours,getPanierByUser} = useCours()
  const {user}  = useAuth()

  const getAllCours = () => {
    CoursService.getListPubCours()
      .then((res) => {
        console.log(res.data);
        setCours(res.data);
      })
      .catch((error) => console.log(error));
  };
  const showDetail = (data)=>{
    setOpen(true)
    setDonne(data)
  } 
  const  ajoutPannier = (data)=>{
    PanierService.createPanier({id_cours:data.id_cours,id_util:user.id_utilisateur})
                  .then((res)=>{
                    getPanierByUser()
                    setOpen(false)
                  })
                  .catch(error=>console.log(error))
    
  }
  useEffect(() => {
    getAllCours();
    console.log(user);

  }, []);

  return (
    <>
      <div className="container bg-white px-5 ">
      <div className="flex items-center">
  <div className="text-home">
    <h1 className="text-2xl font-bold">Devenez un expert en gestion de produit</h1>
    <p className="text-gray-700">
      En tant que chef de produit, vous jouez un rôle clé dans le succès d'un produit. Vous serez responsable de
      sa stratégie, de sa planification et de son exécution, tout en collaborant avec diverses équipes pour
      garantir que le produit répond aux besoins des utilisateurs.{" "}
      <span className="underline font-bold">Découvrez-en plus</span>.
    </p>
  </div>
  <div className="image_home">
    <img src={photo} alt="Une illustration de la gestion de produit" className="h-auto" />
  </div>
</div>

        <div className="course px-5">
          <h2 className="font-semibold text-xl ">
            Course and Events For Product Designer
          </h2>
          <div className="container_course grid grid-cols-3 gap-10 mt-3">
            {cours.map((data, index) => (
              <div
                className="card w-full relative flex pb-2 flex-col bg-white shadow-2xl"
                key={index}
              >
                <div className="card-header">
                  <img
                    src={`http://localhost:3000/${data.image_couverture}`}
                    alt=""
                    className="w-full h-48 object-cover rounded-e-lg"
                  />
                </div>
                <p className="max-w-fit absolute text-white top-3 right-1 px-3 py-1 text-sm font-semibold bg-green-600 shadow-md transform rotate-12 transition duration-300 hover:scale-105">
                  {data.prix} Ar
                </p>
                <div className="card-body flex-grow mt-3 px-2">
                  <h3 className="font-semibold text-md">{data.titre}</h3>
                  <p className="text-md flex items-center">
                    <span>
                      <FaUser className="text-gray-600" />
                    </span>{" "}
                    <span className="pl-3  font-semibold text-indigo-700">
                      {data.nom}
                    </span>
                  </p>
                  <p className="text-sm flex items-center pt-1 text-gray-500">
                    <span>Vidéo</span>
                    <span className="pl-3">{data.nombre_videos}</span>
                  </p>
                  <div className="flex items-center">
                    <span className="ml-2 mr-2">{rating}</span>
                    {[...Array(totalStars)].map((_, index) => {
                      if (index < Math.floor(rating)) {
                        return (
                          <FaStar key={index} className="text-yellow-500" />
                        ); // Étoile pleine
                      } else if (index < rating) {
                        return (
                          <FaStarHalfAlt
                            key={index}
                            className="text-yellow-500"
                          />
                        ); // Étoile moitié
                      } else {
                        return (
                          <FaRegStar key={index} className="text-gray-400" />
                        ); // Étoile vide
                      }
                    })}
                  </div>
                </div>
                <div className="card-footer mt-2 text-sm mx-4">
                  <button className="bg-indigo-700 text-white w-full  py-3  hover:bg-indigo-500" onClick={()=>showDetail(data)}>
                    Détail cours
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal open={open} width={"550px"} onClose={() => setOpen(false)}>
        <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col h-full">
          {/* Titre du cours */}
          <h1 className="text-3xl font-bold text-indigo-700 mb-1 text-center ">
            {donne.titre}
          </h1>
          <div className="flex   ">
            <div className="mt-3 w-[60%]">
              {/* Image du cours */}
              <img
                src={`http://localhost:3000/${donne.image_couverture}`}
                alt="Formation Web"
                className="rounded-lg w-64 h-32"
              />

              {/* Description du cours */}
              <h3 className="text-lg font-semibold text-gray-600 ">
                Description :{" "}
                <span className="text-sm">
                  {donne.description}
                
                </span>
              </h3>
            </div>
            <div className="contenu">
              <h3 className="font-semibold text-center">Contenu du cours </h3>
              {/* Liste des modules */}
              <ul className="list-disc pl-5 ">
                <li className="flex items-center mb-1">
                  <span className="text-green-500">
                    <BsCheck />
                  </span>
                  <span className="pl-2">Introduction HTML</span>
                </li>
                <li className="flex items-center mb-1">
                  <span className="text-green-500">
                    <BsCheck />
                  </span>
                  <span className="pl-2">CSS Avancé</span>
                </li>
                <li className="flex items-center mb-1">
                  <span className="text-green-500">
                    <BsCheck />
                  </span>
                  <span className="pl-2">JavaScript Interactif</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500">
                    <BsCheck />
                  </span>
                  <span className="pl-2">Projets Pratiques</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Détails du cours */}
          <div className="mt-4">
            <p className="text-md font-semibold">
              Prix : <span className="text-indigo-700">{donne.prix} Ar</span>
            </p>
            <p className="text-md font-semibold">
              Vidéo : <span className="text-indigo-700">{donne.nombre_videos}</span>
            </p>
            <p className="text-md font-semibold">
              Durée du cours :{" "}
              <span className="text-indigo-700">11 heures</span>
            </p>
          </div>
                
          <div className="flex mx-5 justify-around">
            {/* Bouton d'ajout au panier */}
          <button className="bg-indigo-700 flex items-center text-white py-3 mt-4 px-3 hover:bg-indigo-600 transition" onClick={()=>ajoutPannier(donne)}>
            <span><BsCart className="text-xl"></BsCart></span>
            <span className="pl-3">Ajouter au panier</span>
          </button>
          <button className="bg-green-500 text-white  py-2 mt-4  px-3 hover:bg-indigo-600 transition" onClick={()=>ajoutPannier(donne)}>
           
            <span>Payer direct </span>
          </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default HomeUser;
