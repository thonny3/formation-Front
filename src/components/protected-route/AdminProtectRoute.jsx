import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { Navigate } from 'react-router-dom'

export default function AdminProtectRoute({children}) {
    const {user,role} = useAuth()
   
    if (user && (role==="admin" || role==="formateur")) {
        return children;
    }else{
        return <Navigate to="/"/>;
    }
}
