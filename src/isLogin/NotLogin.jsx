import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { serviceCount } from '../service/Service';

export default function NotLogin({ children }) {
    const location = useLocation(); // Utilisez useLocation pour obtenir la route actuelle
    console.log(location);

    if (serviceCount.isLoggin()) {
        const token = localStorage.getItem("token");
        
        if (token) {
            const parsedToken = JSON.parse(token);
            const role = parsedToken.role;

            // Redirection selon le rôle de l'utilisateur
            if ((role === "admin" || role === "formateur") && location.pathname !== "/admin") {
                // Si connecté en tant qu'Admin ou Formateur et essaie d'aller ailleurs que /admin
                return <Navigate to="/admin" replace />;
            } else if (role === "user" && location.pathname !== "/user") {
                // Si connecté en tant qu'Utilisateur et essaie d'aller ailleurs que /user
                return <Navigate to="/user" replace />;
            }
        }
    }

    // Rendre les enfants si non connecté ou déjà sur la bonne route
    return children;
}
