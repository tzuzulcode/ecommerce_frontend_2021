import { configureStore } from '@reduxjs/toolkit'
import carritoReducer from '../features/carrito/carritoSlice'
import productosReducer from '../features/productos/productosSlice'
import userReducer from '../features/user/userSlice'

const store = configureStore({
    reducer:{
        carrito:carritoReducer,
        user:userReducer,
        productos:productosReducer
    }
})

export default store