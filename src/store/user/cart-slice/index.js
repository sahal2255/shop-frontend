const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState={
    cartItems:[],
    isLoading:false,
}


export const addToCart=createAsyncThunk(
    '/cart/add-to-cart',
    async({userId,productId,quantity})=>{
        const response=await axios.post(
            `http://localhost:7002/api/shop/cart/add-to-cart`,
            {userId,productId,quantity}
        )
        return response.data
    }
)


const shoppingCartSlice=createSlice({
    name:'ShoppingCart',
    initialState:[],
    reducers:{},
    extraReducers:(builder)=>{
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
    }
}) 