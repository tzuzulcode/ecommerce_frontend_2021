import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    productos:[]
}

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
                producto.cantidad = 1
                state.productos.push(action.payload)
            }
            // Por detrás
            //state.productos.push(action.payload)
            // state.productos = [...state.productos]
            //return 
        },
        
    }
})

export const {agregarAlCarrito} = carritoSlice.actions

export default carritoSlice.reducer