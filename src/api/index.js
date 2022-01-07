import { initializeApp } from 'firebase/app';
import axios from 'axios';
import { getFirestore } from 'firebase/firestore';
import credentials from './credentials';
// TODO: Replace the following with your app's Firebase project configuration


const app = initializeApp(credentials);

export const db = getFirestore(app)

const instance = axios.create({
    baseURL: 'https://pruebastzuzulcode.wl.r.appspot.com/'
})

const get = async (url)=>{
    return await instance.get(url,{
        withCredentials:true
    })
}
const post = async (url,data)=>{
    return await instance.post(url,data,{
        withCredentials:true // Permite enviar cookies
    })
}


export {get,post}