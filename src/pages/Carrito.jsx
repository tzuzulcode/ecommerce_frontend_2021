import React from 'react'
import { useSelector } from 'react-redux'
import Page from '../components/Page'

export default function Carrito() {
    const {productos:carrito} = useSelector(state=>state.carrito)
    
    return (
        <Page>
            <section className='bg-gray-100'>
                <div className='max-w-7xl mx-auto space-y-5 py-10'>
                    {carrito.map(elemento=><article className='flex items-center justify-between' key={elemento.id}>
                        <img className=' w-36' src={elemento.img} alt={elemento.nombre} />
                        <p>{elemento.nombre}</p>
                        <p>{elemento.cantidad}</p>
                        <button onClick={()=>{}}>Restar cantidad</button>
                        <button onClick={()=>{}}>Remover</button>
                    </article>
                        )}
                </div>
            </section>
            
        </Page>
    )
}
