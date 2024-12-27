import Axios from "./CallerAxios";

let getCoursUtilisateur = (id) => {
    return Axios.get('cours/user/'+id)
}

let  getCours=(id)=>{
    return Axios.get('cours/'+id)
}

let updateCours = (id,data) => {
    return Axios.put('cours/'+id,data)
}

let getAllCours = () => {
   return Axios.get('cours')
}

let createCours =  (courseData)=>{
    return Axios.post('cours', courseData)
}
let deleteCours = (id)=>{
    return Axios.delete('cours/'+id)
}
let createVideo =  (data)=>{
    return Axios.post('video',data)
}
let getChapitreByCours = (id) => {
    return Axios.get('cours/chapitre/'+id)
}
let getListPubCours =  ()=>{
    return Axios.get('cours/all/list')
}
export const CoursService = {
    getCoursUtilisateur,
    updateCours,
    getAllCours,
    createCours,
    deleteCours,
    createVideo,
    getCours,
    getChapitreByCours,
    getListPubCours
}