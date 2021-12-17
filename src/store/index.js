import { configureStore } from '@reduxjs/toolkit'
import carritoReducer from '../features/carrito/carritoSlice'

const store = configureStore({
    reducer:{
        carrito:carritoReducer
    }
})

export default store