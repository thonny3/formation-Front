import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CoursService } from "../../service/CoursService";
import { VideoService } from "../../service/VideoService";
import { BsChevronLeft, BsSearch } from "react-icons/bs";

export default function VideoView() {
  const { id_cours } = useParams();
  const [cours, setCours] = useState([]);
  const [video, setVideo] = useState([]);
  const navigatate = useNavigate();

  const getCours = () => {
    CoursService.getCours(id_cours)
      .then((res) => {
        setCours(res.data);
      })
      .catch((error) => console.log(error));
  };
  const getVideo = () => {
    VideoService.getVideoCourse(id_cours)
      .then((res) => {
        setVideo(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  const returnVideo = () => {
    navigatate("/admin/video");
  };

  useEffect(() => {
    getCours();
    getVideo();
  }, []);

  return (
    <div>
      <h1>Listes des vidéo</h1>

      <div className="mt-5 bg-white shadow-2xl m-5 p-5 relative">
        <div
          className="return w-7 h-7 bg-indigo-700 text-white cursor-pointer flex justify-center items-center rounded-full absolute top-0 left-0"
          onClick={returnVideo}
        >
          <BsChevronLeft className="text-xl" />
        </div>
        <div className="flex justify-between items-center">
          <div className="description_video">
            <h3 className="text-2xl">
              Titre cours :{" "}
              <span className="font-bold text-gray-800">{cours.titre}</span>
            </h3>
            <p>
              Déscription :{" "}
              <span className="font-semibold">{cours.description}</span>
            </p>
            <p>
              Nombre vidéo : <span>{video.length}</span>
            </p>
          </div>
          <div className="recherche_video flex items-center px-4 py-2 rounded-md border border-gray-400">
            <BsSearch className="text-gray-400 font-semibold"/>
            <input type="text"  className="bg-transparent focus:outline-none ml-2" placeholder="Recherche....."/>
          </div>
        </div>
        <div className="contenu_video mt-3 grid  grid-cols-4 gap-y-7">
          {video.map((data) => (
            <div
              className="card  shadow-2xl ml-5 w-48 h-48 rounded-lg"
              key={data.id_video}
            >
              <video width="200" controls>
                <source
                  src={`http://localhost:3000/${data.url}`}
                  type="video/mp4"
                />
              </video>
              <p className="font-semibold">
                {data.id_video} - {data.titre}{" "}
              </p>
              <div className="flex justify-center gap-6 mt-5">
                <button className="bg-indigo-700 text-white text-sm px-2 rounded-md">
                  Changer
                </button>
                <button className="bg-red-700 text-white text-sm px-2 py-1 rounded-md">
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
