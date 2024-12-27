import React, { useState } from 'react';
import studySignUp from '../../assets/studySignUp.png';
import { Link, useNavigate } from 'react-router-dom';
import { serviceCount } from '../../service/Service';

export default function Registre() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [errors, setErrors] = useState({ nom: '', email: '', telephone: '', motDePasse: '' });
  let navigate  = useNavigate()

  const validateForm = () => {
    let formErrors = { nom: '', email: '', telephone: '', motDePasse: '' };
    let isValid = true;

    // Vérifier le nom
    if (nom.trim() === '') {
      formErrors.nom = 'Le nom est requis.';
      isValid = false;
    }

    // Vérifier le format de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formErrors.email = 'Veuillez entrer une adresse email valide.';
      isValid = false;
    }

    // Vérifier le numéro de téléphone (ici pour un exemple, adapte selon le format désiré)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(telephone)) {
      formErrors.telephone = 'Veuillez entrer un numéro de téléphone valide (10 chiffres).';
      isValid = false;
    }

    // Vérifier la longueur du mot de passe
    if (motDePasse.length < 4) {
      formErrors.motDePasse = 'Le mot de passe doit comporter au moins 4 caractères.';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Logique de soumission du formulaire
      serviceCount.register({nom:nom,email:email,telephone:telephone,mot_de_passe:motDePasse,role:"user"})
                  .then(res=>{navigate('/user')})
                  .catch(error=>console.log(error))
    }
  };

  return (
    <>
      <section className='mt-5 flex items-center justify-center'>
        <div className='bg-white flex rounded-2xl max-w-3xl p-5 w-full'>
          <div className='w-1/2'>
            <h2 className='text-center font-bold text-2xl text-[#6C63FF]'>Inscrivez-vous et commencez à apprendre</h2>
            <form onSubmit={handleSubmit} className='flex flex-col gap-1 mx-5'>
              <input
                type="text"
                placeholder='Nom'
                className={`p-2 mt-5 border ${errors.nom ? "border-red-500" : "border-gray-300"} focus:border-[#6C63FF] outline-none`}
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
              {errors.nom && <p className='text-red-500 text-sm'>{errors.nom}</p>}

              <input
                type="text"
                placeholder='Email'
                className={`p-2 mt-5 border ${errors.email ? "border-red-500" : "border-gray-300"} focus:border-[#6C63FF] outline-none`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}

              <input
                type="text"
                placeholder='Téléphone'
                className={`p-2 mt-5 border ${errors.telephone ? "border-red-500" : "border-gray-300"} focus:border-[#6C63FF] outline-none`}
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
              {errors.telephone && <p className='text-red-500 text-sm'>{errors.telephone}</p>}

              <input
                type="password"
                placeholder='Mot de passe'
                className={`p-2 mt-5 border ${errors.motDePasse ? "border-red-500" : "border-gray-300"} focus:border-[#6C63FF] outline-none`}
                value={motDePasse}
                onChange={(e) => setMotDePasse(e.target.value)}
              />
              {errors.motDePasse && <p className='text-red-500 text-sm'>{errors.motDePasse}</p>}

              <button
                type="submit"
                className='bg-[#6C63FF] text-white px-6 py-2 rounded mt-3'
              >
                S'inscrire
              </button>
            </form>
            <div className='text-sm mt-3 flex justify-center'>
              <p>Vous avez déjà un compte ? </p>
              <a href="#" className='text-indigo-700 font-bold underline'><Link to="/connexion">Se connecter ici</Link></a>
            </div>
          </div>
          <div className='w-1/2'>
            <img src={studySignUp} alt="Study illustration" />
          </div>
        </div>
      </section>
    </>
  );
}
