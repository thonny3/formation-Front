import Axios from "./CallerAxios"

const login = (data) => {
    return Axios.post('auth/login',data)
   
}

const logout = () => {
    localStorage.removeItem('token')
}

const isLoggin = () => {
    let token = JSON.stringify(localStorage.getItem('user'))
    return !!token
}

const getToken = () => {
    
    return  JSON.parse(localStorage.getItem('user'))
}
const register = (data)=>{
    return Axios.post('utilisateur',data)
}
export const serviceCount = { login, isLoggin, logout, getToken ,register}