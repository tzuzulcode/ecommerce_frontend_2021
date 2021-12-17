import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    productos:[]
}

const carritoSlice = createSlice({
    name:"carrito",
    initialState,
    reducers:{
        agregarAlCarrito(state,action){
            //state.productos.push(action.payload)
        }
    }
})

export const {agregarAlCarrito} = carritoSlice.actions

export default carritoSlice.reducer