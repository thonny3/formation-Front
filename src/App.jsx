import { useState, useEffect } from "react";
import "./App.css";
import PublicRoute from "./Pages/Public/PublicRoute";
import AdminRoute from "./Pages/Admin/AdminRoute";
import { Routes, Route, useNavigate } from "react-router-dom";
import IsLogin from "./isLogin/IsLogin";
import UserRoute from "./Pages/User/UserRoute";
import NotLogin from "./isLogin/NotLogin";
import UserProtectRoute from "./components/protected-route/UserProtectRoute";
import PublicProtectRoute from "./components/protected-route/PublicProtectRoute";
import AdminProtectRoute from "./components/protected-route/AdminProtectRoute";


function App() {




  return (
    <>
      <Routes> 
         {/* Route publique accessible à tous */}
        <Route path="/*" element={
          <PublicProtectRoute>
            <PublicRoute />
          </PublicProtectRoute>
        } />
        
        {/* Route pour les utilisateurs connectés (User) */}
        <Route
          path="/user/*"
          element={
            <UserProtectRoute>
              <UserRoute />
            </UserProtectRoute>
          }
        />
        
        {/* Route pour les administrateurs et formateurs */}
        <Route
          path="/admin/*"
          element={
              <AdminProtectRoute>
                <AdminRoute />
              </AdminProtectRoute>
          }
        />
      </Routes>
      
    </>
  );
}

export default App;
