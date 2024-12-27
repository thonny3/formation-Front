import axios from "axios"
import { serviceCount } from "./Service"

const  Axios  = axios.create({
    baseURL : 'http://localhost:3000'
})

Axios.interceptors.request.use(request=>{
    if (serviceCount.isLoggin()) {
        request.headers.Authorization = 'Bearer '+localStorage.getItem('accessToken')
    }
    return request
})
export default Axios