import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type payloadType = {
    payload?:boolean
}

const drawer = createSlice({
    name:"drawer",
    initialState:{
        isOpen:false
    },
    reducers:{
        drawerToggle:(state, {payload}:payloadType)=> {
            payload ? state.isOpen = payload : state.isOpen = !state.isOpen
        }
    },
})
export const {drawerToggle} = drawer.actions
export default drawer.reducer