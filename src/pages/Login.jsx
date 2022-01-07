import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { post } from '../api'
import Page from '../components/Page'
import { login } from '../features/user/userSlice'
export default function Login() {

    const dispatch = useDispatch()

    const handleLogin = (event)=>{
        event.preventDefault()
        const data = event.target
        const credentials = {
            correo:data.email.value,
            contrasena:data.password.value,
        }
        dispatch(login(credentials))

    }
    return (
        <Page>
            <section className='bg-gray-100 pb-20'>
                <h1 className='text-3xl font-bold max-w-7xl mx-auto py-10'>Login</h1>
                
                <div className='w-1/2 mx-auto'>
                    <form className='bg-white p-10 flex flex-col gap-5' onSubmit={handleLogin}>
                        <input className='bg-gray-100 p-2' name="email" placeholder="Email..." type="email" id="email" />
                        <input className='bg-gray-100 p-2' name="password" placeholder='Password...' type="password" id="password" />
                        <button className='bg-red-100'>Iniciar sesión</button>
                    </form>
                </div>
            </section>

        </Page>
    )
}
