import React, { act } from 'react'
import { createSlice } from '@reduxjs/toolkit'
import { BsExposure } from 'react-icons/bs'
import { json } from 'react-router-dom'

const storedItems =localStorage.getItem('cartItems')

const initialState ={ 
    cartItems :[],
    count: 0,
    carttotalQuantity:0,
    carttotalAmont:0,
    cartItems : storedItems? JSON.parse(storedItems):[]
}

const cartSlice = createSlice({

    name:'cart',
    initialState,
    reducers :{
        addToCart :( state,action) => {
            
            const newItem =action.payload
            const existingItem = state.cartItems.find(items =>items.id == newItem.id)
            
            if(existingItem){
                existingItem.quantity += newItem.quantity
            }else{
                state.cartItems.push({
                    id:newItem.id,
                    title:newItem.title,
                    img:newItem.img,
                    price:newItem.price,
                    des:newItem.des,
                    quantity:newItem.quantity
                });
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        deleteFromCart: (state,action) =>{
            state.cartItems =state.cartItems.filter(items =>items.id !== action.payload.id)
            localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
        },
        removeCart :(state) =>{
            state.cartItems =[]
            localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
        },
        updateQuantity:(state, action) =>{
            const {id,quantity}= action.payload
            const itemToUpdate = state.cartItems.find(item => item.id === id)
            if(itemToUpdate){
                itemToUpdate.quantity = quantity;
                localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
            }
        },
       
    },
})

export default cartSlice.reducer
export const{addToCart,deleteFromCart,removeCart, updateQuantity} = cartSlice.actions
/* action, reducer*/