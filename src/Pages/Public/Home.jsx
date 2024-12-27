import React from 'react'
import blob from '../../assets/blob.svg'
import person from  '../../assets/person.png'
import javascript from  '../../assets/javascript.jpg'
import php from  '../../assets/php.png'
import { AiFillStar  } from "react-icons/ai";
function Home() {
  return (
    <>
     <section className="home flex justify-center items-center px-20">
      <div className="description">
        <p className='font-bold text-gray-800'>Formtion Professionnel</p>
        <h2 className='text-5xl font-bold'>Devenez  <br /><span className='text-indigo-600'>un professionnel</span>  <br />dans l'un ou l'autre domaine</h2>
        <button className="bg-[#8A3FFC] text-white px-5 py-2 rounded-lg shadow-lg mt-5">Commencez</button>
      </div>
      <div className="photo ">
        <img src={person} alt="" className='w-[500px] mb-10 ml-10' />
      </div>
    </section>
    <section className="pub  px-20 py-5 bg-gray-100 mt-5">
      <div className="titre">
        <h3 className='font-bold text-2xl'> Découvrez notre Nouvelle Plateforme de Formation Professionnelle ! </h3>
        <p className='text-gray-800  w-96'>Vous cherchez à développer vos compétences, obtenir des certifications reconnues, et accéder à des ressources de qualité ? Notre plateforme est faite pour vous !</p>
      </div>
      <ul className='flex mt-3 gap-8'>
        <li className='cursor-pointer text-gray-800 hover:border-[#8A3FFC] hover:border-b-2 transition-all' >Cours vidéo</li>
        <li  className='cursor-pointer text-gray-800'>Livre</li>
        <li  className='cursor-pointer text-gray-800'>Formation</li>
        <li  className='cursor-pointer text-gray-800'>Certificat</li>
      </ul>
      <div className="container mt-3 bg-white py-5 px-2">
        <p className='text-sm text-gray-600'> Inscrivez-vous à nos cours en ligne qui incluent une série de vidéos professionnelles. Chaque cours est conçu par des experts pour vous fournir des connaissances approfondies et des compétences pratiques. Apprenez à votre rythme avec des vidéos structurées, allant des concepts de base aux techniques avancées, pour booster votre carrière.</p>
        <div className="cours  mt-3 flex items-center gap-5">
          <div className="card bg-gray-50 shadow-lg rounded-lg w-[200px]  h-[250px]">
            <div className="card-header">
              <img src={javascript} alt="" />
            </div>
            <div className="card-body mt-1 text-sm p-2">
              <h5 className='font-semibold'>Javascript formation de base !</h5>
              <div className="note flex items-center">
                <span>4.5</span>
                <AiFillStar  color="#fbbf24" />
                <AiFillStar  color="#fbbf24" />
                <AiFillStar  color="#fbbf24" />
                <AiFillStar  color="#fbbf24" />
                <AiFillStar  color="#fbbf24" />
              </div>
              <p>Prix : <span className='font-bold'>25 000Ar</span></p>
            </div>
            <div className="card-footer">
              <button  className="bg-[#8A3FFC] text-white px-4 py-2 text-sm text-center rounded-md shadow-lg">Acheter</button>
            </div>
          </div>
          <div className="card bg-gray-50 shadow-lg rounded-lg w-[200px] h-[250px]">
            <div className="card-header ">
              <img src={php} alt="" />
            </div>
            <div className="card-body mt-1 text-sm p-2">
              <h5 className='font-semibold'>PHP avancé !</h5>
              <div className="note flex items-center">
                <span>4.5</span>
                <AiFillStar  color="#fbbf24" />
                <AiFillStar  color="#fbbf24" />
                <AiFillStar  color="#fbbf24" />
                <AiFillStar  color="#fbbf24" />
                <AiFillStar  color="#fbbf24" />
              </div>
              <p>Prix : <span className='font-bold'>25 000Ar</span></p>
            </div>
            <div className="card-footer p-3">
              <button  className="bg-[#8A3FFC] text-white px-4 py-2 text-sm text-center rounded-md shadow-lg">Acheter</button>
            </div>
          </div>
          <div className="card bg-gray-50 shadow-lg rounded-lg w-[200px] h-[250px]">
            <div className="card-header">
              <img src={javascript} alt="" />
            </div>
            <div className="card-body mt-1 text-sm p-2">
              <h5 className='font-semibold'>Javascript formation de base !</h5>
              <div className="note flex items-center">
                <span>4.5</span>
                <AiFillStar  color="#fbbf24" />
                <AiFillStar  color="#fbbf24" />
                <AiFillStar  color="#fbbf24" />
                <AiFillStar  color="#fbbf24" />
                <AiFillStar  color="#fbbf24" />
              </div>
              <p>Prix : <span className='font-bold'>25 000Ar</span></p>
            </div>
            <div className="card-footer">
              <button  className="bg-[#8A3FFC] text-white px-4 py-2 mb-3 text-sm text-center rounded-md shadow-lg">Acheter</button>
            </div>
          </div>
          <div className="card bg-gray-50 shadow-lg rounded-lg w-[200px]  h-[250px]">
            <div className="card-header">
              <img src={javascript} alt="" />
            </div>
            <div className="card-body mt-1 text-sm p-2">
              <h5 className='font-semibold'>Javascript formation de base !</h5>
              <div className="note flex items-center">
                <span>4.5</span>
                <AiFillStar  color="#fbbf24" />
                <AiFillStar  color="#fbbf24" />
                <AiFillStar  color="#fbbf24" />
                <AiFillStar  color="#fbbf24" />
                <AiFillStar  color="#fbbf24" />
              </div>
              <p>Prix : <span className='font-bold'>25 000Ar</span></p>
            </div>
            <div className="card-footer">
              <button  className="bg-[#8A3FFC] text-white px-4 py-2 text-sm text-center rounded-md shadow-lg">Acheter</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 bg-red-400 p-2 rounded-lg text-center">Introduction à l'IA Générative</h2>
        
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <span className="bg-red-400 text-white p-2 rounded-full mr-3">✓</span>
            <h3 className="text-lg font-semibold bg-gray-700 p-2 rounded-md">Principes de base de l'IA générative</h3>
          </div>

          <div className="flex items-center mb-4">
            <span className="bg-red-400 text-white p-2 rounded-full mr-3">✓</span>
            <h3 className="text-lg font-semibold bg-gray-700 p-2 rounded-md">Les principaux acteurs</h3>
          </div>

          <div className="ml-8">
            <label className="flex items-center mb-2">
              <input type="radio" name="acteur" className="form-radio text-red-500 mr-2" />
              ChatGPT
            </label>
            <label className="flex items-center mb-2">
              <input type="radio" name="acteur" className="form-radio text-red-500 mr-2" />
              Anthropic Claude 3
            </label>
            <label className="flex items-center mb-2">
              <input type="radio" name="acteur" className="form-radio text-red-500 mr-2" />
              Mistral AI
            </label>
            <label className="flex items-center mb-2">
              <input type="radio" name="acteur" className="form-radio text-red-500 mr-2" />
              Google Gemini
            </label>
          </div>
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default Home