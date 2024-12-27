import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { Navigate ,useLocation} from 'react-router-dom'

export default function UserProtectRoute({children}) {
    const {user,role} = useAuth()

   

    if (user && role==="user") {
       
        return children;
    }else{
        return <Navigate to="/connexion"/>;
    }

}
