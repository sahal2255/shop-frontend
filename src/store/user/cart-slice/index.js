import { createSlice, createAsyncThunk }  from '@reduxjs/toolkit'
import axios from 'axios'
const initialState={
    cartItems:[],
    isLoading:false,
}


export const addToCart=createAsyncThunk(
    'cart/add-to-cart',
    async({userId,productId,quantity})=>{
        const response=await axios.post(
            `http://localhost:7002/api/shop/cart/add-to-cart`,
            {userId,productId,quantity}
        )
        return response.data
    }
)

export const fetchCartItems=createAsyncThunk(
    'cart/get',
    async(userId)=>{
        const response=await axios.get(
            `http://localhost:7002/api/shop/cart/get/${userId}`
        )
        return response.data
    }
)

const shoppingCartSlice=createSlice({
    name:'ShoppingCart',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        // add to cart section
        builder.addCase(addToCart.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(addToCart.fulfilled,(state,action)=>{
            state.isLoading=false
            cartItems=action.payload.data
        })
        .addCase(addToCart.rejected,(state)=>{
            state.isLoading=false
            state.cartItems=[]
        })

        // fetch cart item section
        .addCase(fetchCartItems.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(fetchCartItems.fulfilled,(state,action)=>{
            state.isLoading=false
            cartItems=action.payload.data
        })
        .addCase(fetchCartItems.rejected,(state)=>{
            state.isLoading=false
            state.cartItems=[]
        })
    }
}) 


export default shoppingCartSlice.reducer