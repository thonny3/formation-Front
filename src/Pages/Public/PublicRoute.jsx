import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Home from './Home'
import Connexion from './Connexion'
import Registre from './Registre'
import PublicLayout from './PublicLayout'
import Error from '../../_utils/Error'

export default function PublicRoute() {
  return (
    <>
    <Routes>
        <Route element={<PublicLayout/>}>
            <Route index element={<Home/>}/>       
            <Route path='/home' element={<Home/>}/>
            <Route path='/connexion' element={<Connexion/>}/>
            <Route path='/registre' element={<Registre/>}/> 
        </Route>
        <Route path='*' element={<Error/>}/>
    </Routes>
    </>
  )
}
