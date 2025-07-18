import {createSlice} from '@reduxjs/toolkit'

export const searchslice=createSlice({
       name:'search',
       initialState:{
        query:'',
       },
       reducers:{
        setSearchQuery:(state,action)=> {state.query=action.payload}
       }
})
export const {setSearchQuery}=searchslice.actions;
export default searchslice.reducer;