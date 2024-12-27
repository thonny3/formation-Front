import React, { useEffect, useState } from "react";
import { BsCloudUpload, BsEyeFill, BsPencil, BsPlusCircle, BsTrash } from "react-icons/bs";
import Modal from "../../components/Modal";
import { CoursService } from "../../service/CoursService";
import { serviceCount } from "../../service/Service";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DetailsCours from "../../components/admin/DetailsCours";
import { useAuth } from "../../context/AuthContext";

export default function Cours() {
  const [open, setOpen] = useState(false);
  const [openDel, setOpenDel] = useState(false);
  const [cours, setCours] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const token = serviceCount.getToken();
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [image,setImage] =  useState("")
  const [prix, setPrix] = useState("");
  const [date_creation, setDate_creation] = useState("");
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [step, setStep] = useState(1);
  const [chapitres, setChapitres] = useState([]);
  const [openDetail,setOpenDetail] = useState(false)
  const [dataDetailCours,setDetailCours] =  useState([])
  const [image_couv,setImage_couv] = useState(null)
  const {user} = useAuth()
  // State to manage errors
  const [errors, setErrors] = useState({
    titre: false,
    description: false,
    prix: false,
    date_creation: false,
  });

// Modify handleSubmit to include image upload
const handleSubmit = (e) => {
  e.preventDefault();
  if (step === 1) {
    const newErrors = {};
    if (!titre) newErrors.titre = true;
    if (!prix) newErrors.prix = true;
    if (!date_creation) newErrors.date_creation = true;
    if (!description) newErrors.description = true;
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStep(2);
  } else if (step === 2) {
    setStep(3);
  } else if (step === 3) {
    const formData = new FormData();
    formData.append("titre", titre);
    formData.append("description", description);
    formData.append("prix", prix);
    formData.append("date_creation", date_creation);
    formData.append("id_instructeur", user.id_utilisateur);
    formData.append("image_couverture", image);
    chapitres.forEach((chapitre, index) => {
      formData.append(`chapitres[${index}][titre]`, chapitre.titre);
    });

    CoursService.createCours(formData)
      .then((res) => {
        console.log(res);
        toast.success("Cours créé avec succès!");
        setOpen(false);
        resetForm(); // Reset the form after submission
        
        getAlluserCours();
      })
      .catch((error) => {
        console.error("Erreur lors de la création du cours:", error);
        toast.error("Erreur lors de la création du cours.");
      });
  }
};
  const handleEdit = (course) => {
    setSelectedCourseId(course.id_cours);
    setTitre(course.titre);
    setDescription(course.description);
    setPrix(course.prix);
    setDate_creation(course.date_creation.split('T')[0]);
    setOpen(true);
  };

  const handleDelete = () => {
    if (selectedCourseId) {
      CoursService.deleteCours(selectedCourseId)
        .then(() => {
          console.log("Course deleted");
          setOpenDel(false);
          getAlluserCours();
          toast.success("Course deleted successfully!");
        })
        .catch((error) => {
          console.error("Error deleting course:", error);
        });
    }
  };

  const getAlluserCours = () => {
    CoursService.getCoursUtilisateur(user.id_utilisateur)
      .then((res) => {
        setCours(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };
  const handleModalClose = () => {
    setOpen(false);  // Fermer le modal
    setChapitres([]);  // Réinitialiser les chapitres
  };

  

  const detailCourse =  (course)=>{
    setTitre(course.titre);
    setDescription(course.description);
    setImage_couv(course.image_couverture)
  console.log(typeof(course.image_couverture));
    getChapitreByCours(course.id_cours)
    setOpenDetail(true)
    console.log(token.id_utilisateur);
  }

  const getChapitreByCours = (id)=>{
    CoursService.getChapitreByCours(id)
    .then(res=>{setChapitres(res.data)})
    .catch(error=>{console.log(error);})
    
  }
  useEffect(() => {
    getAlluserCours();
 
  }, []);

  // Ensure search is case-insensitive
  const filteredCourses = cours.filter(course => {
    const query = searchQuery.toLowerCase();
    return (
      course.titre.toLowerCase().includes(query) ||
      course.description.toLowerCase().includes(query) ||
      course.prix.toString().includes(query) ||
      new Date(course.date_creation).toLocaleDateString("fr-FR").includes(query)
    );
  });

  // Pagination logic
  const indexOfLastCourse = currentPage * itemsPerPage;
  const indexOfFirstCourse = indexOfLastCourse - itemsPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };



const addChapter = () => {
  console.log(chapitres);
  setChapitres([...chapitres, { titre: "" }]);
};

const removeChapter = (index) => {
  setChapitres(chapitres.filter((_, i) => i !== index));
};

const handleChapterChange = (e, index) => {
  const updatedChapitres = [...chapitres];
  updatedChapitres[index].titre = e.target.value;
  setChapitres(updatedChapitres);
};
const resetForm = () => {
  setTitre("");
  setDescription("");
  setPrix("");
  setDate_creation("");
  setChapitres([]);
  setImage(null);
  setStep(1);
  setSelectedCourseId(null);
  setErrors({
    titre: false,
    description: false,
    prix: false,
    date_creation: false,
  });
  setChapitres([]); // Réinitialiser les chapitres
};


  return (
    <div className="contenu_cours">
      <h1 className="text-3xl mt-2 text-gray-600 ">Tableau | Cours </h1>
      <div className="mt-8 mr-5 bg-white shadow-2xl px-5 py-3 rounded-md">
        <div className="flex justify-between items-center">
          <input
            type="text"
            className="h-10 outline-none border border-gray-300 text-gray-600 rounded-md pl-2"
            placeholder="Recherche..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1); // Reset to the first page on search
            }}
          />
          <div
            className="flex items-center  bg-indigo-600 text-white px-3 py-2 rounded  cursor-pointer"
            onClick={() => {
              setTitre("");
              setDescription("");
              setPrix("");
              setDate_creation("");
              setSelectedCourseId(null);
              setOpen(true);
              resetForm()
            }}
          >
            <button className="text-sm">Ajouter Cours </button>
           
          </div>
        </div>
        <table className="w-full">
  <thead className="bg-[#] text- border-b-2">
    <tr>
      <th className="p-2 text-sm font-semibold tracking-wide text-left">N°</th>
      <th className="p-2 text-sm font-semibold tracking-wide text-left">Titre</th>
      <th className="p-2 text-sm font-semibold tracking-wide text-left">Description</th>
      <th className="p-2 text-sm font-semibold tracking-wide text-left">Prix (AR)</th>
      <th className="p-2 text-sm font-semibold tracking-wide text-left">Date</th>
      <th className="p-2 text-sm font-semibold tracking-wide text-left">Action</th>
    </tr>
  </thead>
  {
    (currentCourses.length > 0) ? (
      <tbody className="text-sm">
        {currentCourses.map((data) => (
          <tr className="border-b-2 text-sm hover:bg-gray-200" key={data.id_cours}>
            <td className="p-2 text-gray-600">{data.id_cours}</td>
            <td className="p-2 text-gray-600">{data.titre}</td>
            <td className="p-2 text-gray-600">{data.description}</td>
            <td className="p-2 text-gray-600">{data.prix}</td>
            <td className="p-2 text-gray-600">
              {new Date(data.date_creation).toLocaleDateString("fr-FR")}
            </td>
            <td className="p-3 text-gray-600 flex gap-1">
              <button className="p-1.5 font-medium -tracking-wider bg-yellow-500 rounded-full text-white" onClick={() => detailCourse(data)}><BsEyeFill/></button>
              <button
                className="p-1.5 font-medium -tracking-wider bg-blue-500 rounded-full text-white"
                onClick={() => handleEdit(data)}
              >
                <BsPencil />
              </button>
              <button
                className="p-1.5 font-medium -tracking-wider bg-red-500 rounded-full text-white"
                onClick={() => {
                  setSelectedCourseId(data.id_cours);
                  setOpenDel(true);
                }}
              >
                <BsTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    ) : (
      <tbody>
        <tr>
          <td colSpan="6" className="py-10 text-center">
            Aucun élément ne correspond à votre recherche
          </td>
        </tr>
      </tbody>
    )
  }
</table>


        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Précédent
          </button>
          <div className="flex items-center">
            Page {currentPage} sur {totalPages}
          </div>
          <button
            className="bg-indigo-700 text-white px-4 py-2 rounded-lg"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Suivant
          </button>
        </div>
      </div>

{/**********************************MODAL FOR ADD/EDIT COURSE********************************************** */}
<Modal open={open} onClose={() => setOpen(false)} width={"600px"}>
  <h3 className="font-bold text-2xl text-center">{selectedCourseId ? "Modifier" : "Ajouter"} un cours</h3>
  <form onSubmit={handleSubmit} className="flex flex-col mt-4">
    
    {step === 1 && (
      <>
        <div className="grid grid-cols-2 gap-6">
          <div className="form-group">
            <input
              type="text"
              placeholder="Titre"
              className={`pl-3 border h-12 outline-none w-full ${errors.titre ? "border-red-500" : " border-gray-300"}`}
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
            />
            {errors.titre && <p className="text-red-500 text-xs mt-1">Titre est requis.</p>}
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Prix"
              className={`pl-3 border h-12 w-full outline-none ${errors.prix ? "border-red-500" : "border-gray-300"}`}
              value={prix}
              onChange={(e) => setPrix(e.target.value)}
            />
            {errors.prix && <p className="text-red-500 text-xs mt-1">Prix est requis.</p>}
          </div>
          <div className="date">
            <input
              type="date"
              className={`pl-3 border w-full h-12 outline-none ${errors.date_creation ? "border-red-500" : "border-gray-300"}`}
              value={date_creation}
              onChange={(e) => setDate_creation(e.target.value)}
            />
            {errors.date_creation && <p className="text-red-500 text-xs mt-1">Date est requise.</p>}
          </div>
        </div>

        <div className="form-group mt-5">
          <textarea
            placeholder="Description"
            rows={3}
            className={`pl-3 w-full border outline-none ${errors.description ? "border-red-500" : "border-gray-300"}`}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors.description && <p className="text-red-500 text-xs mt-1">Description est requise.</p>}
        </div>

        <div className="form-group mt-5 text-center border-2 h-20 border-dashed cursor-pointer">
          <input
            type="file"
            id="coverImage"
            accept="image/*"
            hidden
            onChange={(e) => {
              const file = e.target.files[0];
              setImage(file);
            }}
          />
          <label htmlFor="coverImage" className="cursor-pointer">
            <div className="flex justify-center items-center pt-5">
              {image ? (
                <img src={URL.createObjectURL(image)} alt="Image de couverture" className="w-20 object-cover" />
              ) : (
                <BsCloudUpload className="text-2xl" />
              )}
            </div>
            {!image && <p>Insérez l'image de couverture</p>}
            {image && <p className="text-xs mt-2">Fichier sélectionné: {image.name}</p>}
          </label>
        </div>

        <div className="flex justify-end mt-4">
          <button type="submit" className="text-white bg-indigo-600 px-4 py-2 rounded-lg">
            Suivant
          </button>
        </div>
      </>
    )}

    {step === 2 && (
      <div className="form-group mt-5">
        <h4 className="font-bold mb-2">Chapitres</h4>

        {(chapitres.length > 0) ? (
          <div className="max-h-64 overflow-y-auto">
            {chapitres.map((chapitre, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-center justify-between">
                  <input
                    type="text"
                    placeholder={`Chapitre ${index + 1} titre`}
                    className="pl-3 border h-12 outline-none w-full"
                    value={chapitre.titre}
                    onChange={(e) => handleChapterChange(e, index)}
                  />
                  <button
                    type="button"
                    className="bg-red-600 p-2 ml-2 rounded-md"
                    onClick={() => removeChapter(index)}
                  >
                    <BsTrash className="text-xl text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Veuillez ajouter un chapitre pour le cours</p>
        )}

        <button
          type="button"
          className="text-indigo-600 mt-3"
          onClick={addChapter}
        >
          + Ajouter un chapitre
        </button>

        <div className="flex justify-end mt-4">
          <button
            type="button"
            onClick={() => setStep(1)}
            className="text-gray-600 bg-gray-200 px-4 py-2 rounded-lg mr-2"
          >
            Précédent
          </button>
          <button
            type="submit"
            className="text-white bg-indigo-600 px-4 py-2 rounded-lg"
          >
            Suivant
          </button>
        </div>
      </div>
    )}

    {step === 3 && (
      <div className="mt-5">
        <h4 className="font-bold mb-2">Résumé</h4>
        <p><strong>Titre:</strong> {titre}</p>
        <p><strong>Prix:</strong> {prix}</p>
        <p><strong>Date de création:</strong> {date_creation}</p>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Image de couverture:</strong> {image?.name || 'Aucune image sélectionnée'}</p>
        <h5 className="font-bold mt-4">Chapitres:</h5>
        <ul>
          {chapitres.map((chapitre, index) => (
            <li key={index}>{chapitre.titre || 'Chapitre sans titre'}</li>
          ))}
        </ul>

        <div className="flex justify-end mt-4">
          <button
            type="button"
            onClick={() => setStep(2)}
            className="text-gray-600 bg-gray-200 px-4 py-2 rounded-lg mr-2"
          >
            Précédent
          </button>
          <button
            type="submit"
            className="text-white bg-indigo-600 px-4 py-2 rounded-lg"
            onClick={handleSubmit}
          >
            {selectedCourseId ? "Mettre à jour le cours" : "Créer le cours"}
          </button>
        </div>
      </div>
    )}
  </form>
</Modal>




      {/**********************************MODAL FOR DELETE COURSE********************************************** */}
      <Modal open={openDel} onClose={handleModalClose} width={"300px"}>
        <h3 className="font-bold text-red-500 text-2xl">Supprimer le cours</h3>
        <p>Êtes-vous sûr de vouloir supprimer ce cours?</p>
        <div className="flex justify-end mt-4">
          <button
            className="text-white bg-red-500 px-4 py-2 rounded-lg"
            onClick={handleDelete}
          >
            Supprimer
          </button>
          <button
            className="text-gray-700 bg-gray-200 px-4 py-2 rounded-lg ml-2"
            onClick={() => setOpenDel(false)}
          >
            Annuler
          </button>
        </div>
      </Modal>

       {/**********************************MODAL FOR  DETAIL CORSE********************************************** */}
       <Modal open={openDetail} onClose={()=>setOpenDetail(false)} width={"600px"}>
        <DetailsCours titre={titre} description={description} chapitres={chapitres} image={image_couv}></DetailsCours>
       </Modal>
      <ToastContainer />
    </div>
  );
}
