import React from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Hero from '../components/Hero'
import Page from '../components/Page'
import Product from '../components/Product'
import { obtenerProductos } from '../features/productos/productosSlice'
import axios from 'axios'
import { get } from '../api'
export default function Home() {
    

    const dispatch = useDispatch()
    const {productos,loading} = useSelector(state=>state.productos)

    useEffect(()=>{
        dispatch(obtenerProductos())

        get('/api/productos')
        .then(result=>console.log(result.data))
        .catch(error=>console.log(error))

        // axios.post("https://misitio.com/api/productos",{
        //     //info
        // })
        // .then(result=>console.log(result.data))
        // .catch(error=>console.log(error))

        // fetch("http://localhost:4000/api/productos",{
        //     method:"POST",
        //     body:{
        //         //info
        //     }
        // })
        // .then(response=>response.json())
        // .then(data=>console.log(data))
        // .catch(error=>console.log(error))
    },[dispatch])

    
    return (
        <Page>
            <Hero/>
            <section className='bg-gray-100 pb-20'>
                <h2 className='text-3xl font-bold max-w-7xl mx-auto py-10'>Productos populares</h2>
                <div className='grid grid-cols-3 gap-5 max-w-7xl mx-auto'>
                    {
                        loading?<div className='bg-green-200 p-5 text-xl'>
                            Loading....
                        </div>:
                        productos.map(producto=><Product producto={producto}/>)
                    }
                </div>
            </section>
        </Page>
    )
}
