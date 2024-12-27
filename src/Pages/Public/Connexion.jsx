import React, { useState } from "react";
import study from "../../assets/study.png";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { serviceCount } from "../../service/Service.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
export default function Connexion() {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("admin");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const  {setUser,setRole} =  useAuth()
  const navigate = useNavigate();
  const validateForm = () => {
    let formErrors = { email: "", password: "" };
    let isValid = true;

    // Vérifier le format de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formErrors.email = "Veuillez entrer une adresse email valide.";
      isValid = false;
    }

    // Vérifier la longueur du mot de passe
    if (password.length < 4) {
      formErrors.password =
        "Le mot de passe doit comporter au moins 4 caractères.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      serviceCount.login({email,mot_de_passe:password})
      .then((response)=>{
        const accessToken  = response.data.accessToken
        const refreshToken = response.data.refreshToken
        const  utilisateur = response.data.utilisateur
        localStorage.setItem("accessToken",accessToken)
        localStorage.setItem("refreshToken",refreshToken)
        localStorage.setItem("user",JSON.stringify(utilisateur))
        localStorage.setItem("role",utilisateur.role)
        setUser(utilisateur)
        setRole(utilisateur.role)

        if (utilisateur.role==="admin" || utilisateur.role==="formateur") {
          navigate('/admin')
        }else if(utilisateur.role==='user'){
          navigate('/user')
          
        }
        
      })
      .catch(error=>console.log(error))
    }
  };

  return (
    <>
      <section className="mt-5 flex items-center justify-center">
        <div className="bg-white flex rounded-2xl max-w-3xl p-5 w-full">
          <div className="w-1/2">
            <h2 className="text-center text-2xl text-[#6C63FF]">
              Connectez-vous <br />à <br /> votre compte
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-1 mx-5">
              <input
                type="text"
                placeholder="Email"
                className={`p-2 mt-8 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:border-[#6C63FF]  outline-none`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}

              <div className="relative mt-5">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Mot de passe"
                  className={`p-2 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } focus:border-[#6C63FF] outline-none w-full`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? (
                    <AiFillEye size={24} className="text-gray-400" />
                  ) : (
                    <AiFillEyeInvisible size={24} className="text-gray-400" />
                  )}
                </span>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}

              <button
                type="submit"
                className="bg-[#6C63FF] text-white px-6 py-2 rounded mt-3 hover:bg-[#a6c1ee]"
              >
                Se connecter
              </button>
            </form>
            <a
              href=""
              className="text-sm font-bold text-indigo-700 text-center mt-3 flex justify-center"
            >
              Mot de passe oublié
            </a>
            <div className="text-sm mt-3 flex justify-center">
              <p>Vous n'avez pas de compte ? </p>
              <a href="" className="text-indigo-700 font-bold underline">
                S'inscrire
              </a>
            </div>
          </div>
          <div className="w-1/2">
            <img src={study} alt="Study illustration" />
          </div>
        </div>
      </section>
    </>
  );
}
