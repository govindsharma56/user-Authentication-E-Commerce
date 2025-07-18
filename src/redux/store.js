import {configureStore} from '@reduxjs/toolkit'
import searchReducer from '../feature/searchslice/searchslice'
export const store=configureStore({
    reducer:{
        search:searchReducer,
    },
})