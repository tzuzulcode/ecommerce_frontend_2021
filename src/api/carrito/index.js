import { db } from "..";
import {collection,getDocs} from 'firebase/firestore'

export async function saveCart(){
    collection(db,"carritos")
}
export async function getCarts(){
    const carritosCol = collection(db,"carritos")
    const snapshot = await getDocs(carritosCol)

    const carritos = snapshot.docs.map(documento=>documento.data())

    return carritos
}
