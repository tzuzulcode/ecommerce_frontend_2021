import { db } from "..";
import {collection,getDoc,setDoc,doc} from 'firebase/firestore'

export async function saveCart(id,productos){
    const documento = doc(db,"carritos",id)
    const carrito = await setDoc(documento,{productos})

    console.log(carrito)
    return carrito

}
export async function getCart(id){
    const documento = doc(db,"carritos",id)
    const snapshot = await getDoc(documento)

    if (snapshot.exists()) {
        return snapshot.data()
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        //Lanzar el error
    }    
}
