import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { agregarAlCarrito, guardarCarrito } from '../features/carrito/carritoSlice'


export default function Product({producto}) {
    const dispatch = useDispatch()
    const [added,setAdded] = useState(false)
    const {productos} = useSelector(state=>state.carrito)
    
    useEffect(()=>{
        if(productos.length!==0){
            const enCarrito = productos.find(prod=>prod.id===producto.id)

            if(enCarrito){
                setAdded(true)
            }else{
                setAdded(false)
            }
        }
    },[productos,producto.id])
    
    const agregar = (producto)=>{
        dispatch(agregarAlCarrito(producto))
        dispatch(guardarCarrito())
    }

    return (
        <article className='shadow bg-white rounded-lg'>
            <img className='rounded-t-lg' src={producto.img}></img>
            <section className='p-5'>
                <h4 className='text-xl font-bold mb-3'>{producto.nombre}</h4>
                <p>{producto.descripcion}</p>
                {added?<p className='bg-green-100 mt-5 p-2 rounded-md'>
                    Agregado al carrito
                </p>:
                <button className='bg-red-100 hover:bg-orange-100 mt-5 p-2 rounded-md' onClick={()=>{
                    agregar(producto)
                }}>Agregar al carrito</button>}
            </section>
        </article>
    )
}
