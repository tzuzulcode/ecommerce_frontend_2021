import React from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Hero from '../components/Hero'
import Page from '../components/Page'
import Product from '../components/Product'
import { obtenerProductos } from '../features/productos/productosSlice'
export default function Home2() {
    

    const dispatch = useDispatch()
    const {productos,loading} = useSelector(state=>state.productos)

    useEffect(()=>{
        dispatch(obtenerProductos())
    },[dispatch])

    
    return (
        <Page>
            <Hero/>
            <div className='bg-gray-100 grid grid-cols-3 gap-5 max-w-7xl mx-auto'>
                {
                    loading?<div className='bg-green-200 p-5 text-xl'>
                        Loading....
                    </div>:
                    productos.map(producto=><Product producto={producto}/>)
                }
            </div>
        </Page>
    )
}
