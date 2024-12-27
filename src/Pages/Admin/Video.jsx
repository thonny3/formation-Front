import React, { useEffect, useRef, useState } from "react";
import { BsEye, BsPlus } from "react-icons/bs";
import { CoursService } from "../../service/CoursService";
import Modal from "../../components/Modal";
import { Link } from "react-router-dom";
import { VideoService } from "../../service/VideoService";
import { serviceCount } from "../../service/Service";

export default function Video() {
  // État du composant
  const [cours, setCours] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const [chapitres, setChapitres] = useState([]);
  const [open, setOPen] = useState(false);
  const [step, setStep] = useState(1);
  const [titre, setTitre] = useState("");
  const [titreCours, setTitreCours] = useState("");
  const [files, setFiles] = useState(null);
  const [id_cours, setId_cours] = useState(null);
  const [duration, setDuration] = useState(null);
  const [selectedChapitre, setSelectedChapitre] = useState("");
  const videoRef = useRef(null);

  const token = serviceCount.getToken();

  // Chargement des cours de l'utilisateur
  const getAlluserCours = () => {
    CoursService.getCoursUtilisateur(token.id_utilisateur)
      .then((res) => setCours(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAlluserCours();
  }, []);

  // Filtrage des cours en fonction de la recherche
  const filteredCourses = cours.filter((course) => {
    const query = searchQuery.toLowerCase();
    return (
      course.titre.toLowerCase().includes(query) ||
      course.description.toLowerCase().includes(query) ||
      course.prix.toString().includes(query) ||
      new Date(course.date_creation).toLocaleDateString("fr-FR").includes(query)
    );
  });

  // Pagination
  const indexOfLastCourse = currentPage * itemsPerPage;
  const indexOfFirstCourse = indexOfLastCourse - itemsPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Soumission du formulaire de vidéo
  const handleVideoSubmit = (event) => {
    event.preventDefault();
    if (!titreCours || !selectedChapitre) return;

    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else {
      // Créer la vidéo ici à l'étape 3
      const formData = new FormData();
      formData.append("files", files);
      formData.append("titre", titre);
      formData.append("id_cours", id_cours);
      formData.append("id_chap", selectedChapitre);

      CoursService.createVideo(formData)
        .then(() => {
          setOPen(false);
          resetVideo();
          console.log(token);
        })
        .catch((error) => console.error("Error creating video:", error));
    }
  };
  // Fonction de gestion de l'upload vidéo
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0]; // Récupérer le premier fichier sélectionné
    if (selectedFile) {
      setFiles(selectedFile); // Mettre à jour l'état avec le fichier sélectionné
    }
  };

  const addVideo = (donne) => {
    setTitreCours(donne.titre);
    setId_cours(donne.id_cours);
    getChapitreByCours(donne.id_cours);
    setOPen(true);
  };

  const resetVideo = () => {
    setTitre("");
    setTitreCours("");
    setFiles(null);
    setOPen(false);
    setStep(1);
  };

  const getChapitreByCours = (id) => {
    CoursService.getChapitreByCours(id)
      .then((res) => setChapitres(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="contenu_cours">
      <h1 className="text-3xl mt-2 text-gray-600">Tableau | Cours</h1>
      <div className="mt-8 mr-5 bg-white shadow-2xl px-5 py-3 rounded-md">
        <div className="flex justify-between items-center">
          <input
            type="text"
            className="h-10 outline-none border border-gray-300 text-gray-600 rounded-md pl-2"
            placeholder="Recherche..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
        <table className="w-full">
          <thead className="bg-[#] text-border-b-2">
            <tr>
              <th className="p-2 text-sm font-semibold tracking-wide text-left">
                N°
              </th>
              <th className="p-2 text-sm font-semibold tracking-wide text-left">
                Titre
              </th>
              <th className="p-2 text-sm font-semibold tracking-wide text-left">
                Description
              </th>
              <th className="p-2 text-sm font-semibold tracking-wide text-left">
                Prix (AR)
              </th>
              <th className="p-2 text-sm font-semibold tracking-wide text-left">
                Date
              </th>
              <th className="p-2 text-sm font-semibold tracking-wide text-left">
                Action
              </th>
            </tr>
          </thead>
          {currentCourses.length > 0 ? (
            <tbody className="text-sm">
              {currentCourses.map((data) => (
                <tr
                  className="border-b-2 text-sm hover:bg-gray-200"
                  key={data.id_cours}
                >
                  <td className="p-2 text-gray-600">{data.id_cours}</td>
                  <td className="p-2 text-gray-600">{data.titre}</td>
                  <td className="p-2 text-gray-600">{data.description}</td>
                  <td className="p-2 text-gray-600">{data.prix}</td>
                  <td className="p-2 text-gray-600">
                    {new Date(data.date_creation).toLocaleDateString("fr-FR")}
                  </td>
                  <td className="p-3 text-gray-600 flex gap-1">
                    <button
                      className="p-1.5 font-medium bg-indigo-600 rounded-full text-white"
                      onClick={() => addVideo(data)}
                    >
                      <BsPlus />
                    </button>
                    <Link to={`list/${data.id_chap}`}>
                      <button className="p-1.5 font-medium bg-yellow-500 rounded-full text-white">
                        <BsEye />
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <div className="w-[300%] flex justify-center items-center py-10">
              <p className="text-xl">Aucun cours trouvé</p>
            </div>
          )}
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <button
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Précédent
          </button>
          <div className="flex items-center">
            Page {currentPage} sur {totalPages}
          </div>
          <button
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Suivant
          </button>
        </div>
      </div>

      {/* Modal pour ajouter une vidéo */}
      <Modal open={open} onClose={resetVideo} width={"450px"}>
        <h3 className="font-bold text-[#6C63FF] text-2xl text-center">
          Ajout vidéo
        </h3>
        <form onSubmit={handleVideoSubmit}>
          {/* Étape 1: Sélectionner un chapitre */}
          {step === 1 && (
            <>
              <div className="form-group mt-3">
                <input
                  type="text"
                  placeholder="Titre"
                  className="pl-3 w-full mt-5 border h-16 rounded-xl outline-none"
                  onChange={(e) => setTitre(e.target.value)}
                />
              </div>

              <div className="form-group mt-3">
                <label htmlFor="chapitre" className="text-gray-500">
                  Sélectionner un chapitre :
                </label>
                <select
                  id="chapitre"
                  className="pl-3 w-full mt-2 border h-16 rounded-xl outline-none"
                  value={selectedChapitre}
                  onChange={(e) => setSelectedChapitre(e.target.value)}
                >
                  <option value="">-- Sélectionnez un chapitre --</option>
                  {chapitres.map((chapitre) => (
                    <option key={chapitre.id_chap} value={chapitre.id_chap}>
                      {chapitre.titre}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full mt-3 bg-[#6C63FF] text-white font-bold py-3 rounded-md"
              >
                Continuer
              </button>
            </>
          )}

          {/* Étape 2: Télécharger la vidéo */}
          {step === 2 && (
            <>
              <div className="form-group mt-3">
                <label className="text-gray-500" htmlFor="fileInput">
                  Téléchargez la vidéo :
                </label>
                <input
                  type="file"
                  id="fileInput"
                  accept="video/*"
                  className="pl-3 w-full mt-2 border h-16 rounded-xl outline-none"
                  onChange={handleFileChange}
                />
              </div>

              <button
                type="submit"
                className="w-full mt-3 bg-[#6C63FF] text-white font-bold py-3 rounded-md"
              >
                Continuer
              </button>
            </>
          )}

          {/* Étape 3: Récapitulatif avant soumission */}
          {step === 3 && (
            <>
              <div className="form-group mt-3">
                <h4 className="text-gray-700">Récapitulatif :</h4>
                <p>
                  <strong>Titre :</strong> {titre}
                </p>
                <p>
                  <strong>Chapitre :</strong> {selectedChapitre}
                </p>
                <p>
                  <strong>Video :</strong> {files.name}
                </p>
              </div>
              <button
                type="submit"
                className="w-full mt-3 bg-green-500 text-white font-bold py-3 rounded-md"
              >
                Ajouter la vidéo
              </button>
            </>
          )}
        </form>
      </Modal>
    </div>
  );
}
