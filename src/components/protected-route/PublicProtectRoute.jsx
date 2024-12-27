import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate,useLocation } from "react-router-dom";

export default function PublicProtectRoute({ children }) {
  const { user,role } = useAuth();
  const location = useLocation(); // Utilisez useLocation pour obtenir la route actuelle
  if (user) {
      if (role==="user") {
        return <Navigate to="/user" />;
      }else if(role==="formateur" || role=="admin"){
        return <Navigate to="/admin" />;
      }
  } else {
    console.log(location);
    return children;
  }
}
