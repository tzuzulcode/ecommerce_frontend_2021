import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getCart, saveCart } from "../../api/carrito"

const initialState ={
    productos:[],
    idUsuario:'tzuzulcode',
    loading:false
}

export const guardarCarrito = createAsyncThunk("carrito/guardar",async (data,{getState})=>{
    
    const {carrito:state} = getState()
    const {productos,idUsuario} = state
    
    const carrito = await saveCart(idUsuario,productos)

    return carrito
})
export const recuperarCarrito = createAsyncThunk("carrito/recuperar",async (data,{getState})=>{
    
    const {carrito:state} = getState()
    const {idUsuario} = state
    
    const carrito = await getCart(idUsuario)

    return carrito
})

const carritoSlice = createSlice({
    name:"carrito",
    initialState,
    reducers:{
        agregarAlCarrito(state,action){
            let existe = false
            let pos = 0
            const producto = action.payload

            state.productos.forEach((elemento,index)=>{
                if(elemento.id===producto.id){
                    existe = true
                    pos = index
                }
            })

            if(existe){
                state.productos[pos].cantidad++
            }else{
                const copia = {...producto}
                copia.cantidad = 1
                state.productos.push(copia)
            }
            // Por detrás
            //state.productos.push(action.payload)
            // state.productos = [...state.productos]
            //return 
        },
    },
    extraReducers(builder){
        builder.addCase(guardarCarrito.pending,(state)=>{
            state.loading = true
        }).addCase(guardarCarrito.fulfilled,(state,action)=>{
            //state.productos = action.payload
            state.loading = false
        }).addCase(recuperarCarrito.pending,(state)=>{
            state.loading = true
        }).addCase(recuperarCarrito.fulfilled,(state,action)=>{
            state.loading = false
            state.productos = action.payload.productos
        })
    }

})

export const {agregarAlCarrito} = carritoSlice.actions

export default carritoSlice.reducer