import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeUser from './HomeUser'
import UserLayout from './UserLayout'
import Apprentissage from './Apprentissage'
import TableauBoard from './TableauBoard'
import Cours from './Cours'
import Order from './Order'
import CoursProvider from '../../context/CoursContext'


export default function UserRoute() {
  return (
    <CoursProvider>
       <Routes>
        <Route element={<UserLayout/>}>
            <Route index element={<HomeUser/>}/>
            <Route path='home' element={<HomeUser/>}/>
            <Route path='tableau' element={<TableauBoard/>}/>
            <Route path='cours' element={<Cours/>}/>
            <Route path='order' element={<Order/>}/>
        </Route>
     </Routes>
    </CoursProvider>
  )
}
