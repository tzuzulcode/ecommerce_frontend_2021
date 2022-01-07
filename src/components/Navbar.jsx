import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Item from './Item'

export default function Navbar() {
    const carrito = useSelector(state=>state.carrito.productos)
    const {logged,user} = useSelector(state=>state.user)
    return (
        <nav className='py-10'>
            <div className='flex justify-between max-w-7xl mx-auto'>
                <Link to={"/"}><p className="bg-red-100">Base color</p></Link>
                <ul className='flex space-x-5'>
                    <Item title="Home 2" to={"/home2"}></Item>
                    {logged?<p>{user.nombre}</p>:<Item title="Login" to={"/login"}></Item>}
                    <Item title="Link 3" to={"/home2"}></Item>
                    <Item title="Link 4" to={"/home2"}></Item>
                </ul>
                <Link to="/carrito">Carrito {carrito.length}</Link>
                {/* <button id="menu">Menu</button> */}
            </div>
        </nav>
    )
}
