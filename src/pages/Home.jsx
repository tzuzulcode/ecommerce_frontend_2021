import React from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { agregarAlCarrito } from '../features/carrito/carritoSlice'
import { obtenerProductos } from '../features/productos/productosSlice'
export default function Home() {
    

    const dispatch = useDispatch()
    const {length:tamaño} = useSelector(function(state){
        return state.carrito.productos
    })
    const productos = useSelector(state=>state.productos.productos)

    useEffect(()=>{
        dispatch(obtenerProductos())
    },[])

    const agregar = (producto)=>{
        dispatch(agregarAlCarrito(producto))
    }

    return (
        <div>
            <p>Carrito {tamaño}</p>
            {productos.map(producto=><div>
                <p>{producto.nombre}</p>
                <p>{producto.descripcion}</p>
                <img src={producto.img}></img>
                <button onClick={()=>{
                    agregar(producto)
                }}>Agregar al carrito</button>
            </div>)}
        </div>
    )
}
