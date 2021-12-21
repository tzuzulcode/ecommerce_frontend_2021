import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import { getProducts } from "../../api/productos"

const initialState ={
    productos:[],
    loading:false
}

export const obtenerProductos = createAsyncThunk("productos/get", async ()=>{
    const productos = await getProducts()
    return productos
})

const carritoSlice = createSlice({
    name:"productos",
    initialState,
    extraReducers(builder){
        builder.addCase(obtenerProductos.pending,(state)=>{
            state.loading = true
        }).addCase(obtenerProductos.fulfilled,(state,action)=>{
            state.productos = action.payload
            state.loading = false
        })
    }
})

export default carritoSlice.reducer