import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import { get, post } from "../../api"

const initialState ={
    user:{},
    logged:false,
    loading:false
}

export const login = createAsyncThunk("user/login", async (data)=>{
    const productos = await post("/auth/login",data)
    return productos.data
})

const userSlice = createSlice({
    name:"user",
    initialState,
    extraReducers(builder){
        builder.addCase(login.pending,(state)=>{
            state.loading = true
        }).addCase(login.fulfilled,(state,action)=>{
            state.user = action.payload
            state.loading = false
            state.logged = true
        })
    }
})

export default userSlice.reducer