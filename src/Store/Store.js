/* reducer(add,remove,delte) */
import { configureStore } from "@reduxjs/toolkit"; 
import CartSlice from "./CartSlice/CartSlice";


export const store = configureStore({
    reducer:{
        cart:CartSlice
    }
})