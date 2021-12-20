import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { agregarAlCarrito } from '../features/carrito/carritoSlice'
export default function Home() {
    const productos = [{id:1,nombre:"Laptop",descripcion:"Laptop de 15 pulgadas con estas caracteristicas",img:"https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},
    {id:2,nombre:"Laptop 2",descripcion:"Laptop de 15 pulgadas con estas caracteristicas",img:"https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},
    {id:3,nombre:"Laptop 3",descripcion:"Laptop de 15 pulgadas con estas caracteristicas",img:"https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}]

    const dispatch = useDispatch()
    const {length:tamaño} = useSelector(function(state){
        return state.carrito.productos
    })

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
