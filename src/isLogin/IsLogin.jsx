import React from 'react'
import { Navigate } from 'react-router-dom'
import { serviceCount } from '../service/Service'

export default function IsLogin({children}) {
    

    if (!serviceCount.isLoggin()) {
        return <Navigate to="/connexion"/>
    }
    return children
   

}
