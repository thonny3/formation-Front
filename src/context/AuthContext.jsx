// context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';


const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  
    const [role,setRole] = useState(localStorage.getItem("role"))

    const [user, setUser] = useState(
        () => JSON.parse(localStorage.getItem("user")) || null
      );

    const logout = ()=>{
        setUser(null)
        localStorage.removeItem("user")
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
        localStorage.removeItem("role")
        
        

    }
    return (
        <AuthContext.Provider value={{ user, setUser,logout ,role,setRole}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
