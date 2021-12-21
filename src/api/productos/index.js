import { db } from "..";
import {collection,getDocs} from 'firebase/firestore'

export async function getProducts(){
    const productosCol = collection(db,"productos")
    const snapshot = await getDocs(productosCol)

    return snapshot.docs.map(documento=>documento.data())
}