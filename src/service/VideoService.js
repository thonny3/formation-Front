import Axios from "./CallerAxios";

let createVideo = (data) => {
    return Axios.post('video', data)
}

let getVideoCourse = (id) => {
    return Axios.get('video/cours/' + id)
}

let  getCountVideo = (id)=>{
    return Axios.get('video/count/'+id)
}
export const VideoService = {
    createVideo,
    getVideoCourse,
    getCountVideo
}