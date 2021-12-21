import { configureStore } from '@reduxjs/toolkit'
import carritoReducer from '../features/carrito/carritoSlice'
import productosReducer from '../features/productos/productosSlice'

const store = configureStore({
    reducer:{
        carrito:carritoReducer,
        productos:productosReducer
    }
})

export default store