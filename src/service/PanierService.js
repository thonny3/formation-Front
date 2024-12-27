import Axios from "./CallerAxios";

let createPanier = (data) => {
    return Axios.post('panier', data)
}

let getPayementByUser = (id) => {
    return Axios.get('panier/' + id)
}

let  deletePanier = (id)=>{
    return Axios.delete('panier/'+id)
}
export const PanierService = {
    createPanier,
    getPayementByUser,
    deletePanier
}