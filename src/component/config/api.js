import axios from "axios"

export const API_URL=""


export const API=axios.create({
    baseURL:API_URL,
    headers:{
        "Content-Type":"application/json",
    }
})