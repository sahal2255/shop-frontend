import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  cartItems: [],
  isLoading: false,
};

export const addToCart = createAsyncThunk(
  "cart/add-to-cart",
  async ({ userId, productId, quantity }) => {
    const response = await axios.post(
      `http://localhost:7002/api/shop/cart/add-to-cart`,
      { userId, productId, quantity }
    );
    return response.data;
  }
);

export const fetchCartItems = createAsyncThunk("cart/get", async (userId) => {
  const response = await axios.get(
    `http://localhost:7002/api/shop/cart/get/${userId}`
  );
//   console.log('response in the fetching the cart items',response.data)
  return response.data;
});

export const deleteCartItem = createAsyncThunk(
  "cart/delete",
  async ({productId, user}) => {
    // console.log('userId in the dispatch fucntion',user)
    const response = await axios.delete(
      `http://localhost:7002/api/shop/cart/delete`,
      {data:{ productId, userId:user.id }}
    );
    console.log('delete response',response.data)
    return response.data;
  }
);


export const incrementProductQuantity=createAsyncThunk(
  '/cart/quantity-update/incremnt',
  async({userId , productId,quantity})=>{
    const response=await axios.put(
      `http://localhost:7002/api/shop/cart/update-quantity/increment`,
      {userId,productId,quantity}
    )
  }
)

export const decrementProductQuantity=createAsyncThunk(
  '/cart/quantity-update/decrement',
  async()=>{
    const response=await axios.put(
      `http://localhost:7002/api/shop/cart/update-quantity/decrement`,
      {userId,productId,quantity}
    )
  }
)

const shoppingCartSlice = createSlice({
  name: "ShoppingCart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // add to cart section
    builder
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload.data;
      })
      .addCase(addToCart.rejected, (state) => {
        state.isLoading = false;
        state.cartItems = [];
      })

      // fetch cart item section
      .addCase(fetchCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload.data;
      })
      .addCase(fetchCartItems.rejected, (state) => {
        state.isLoading = false;
        state.cartItems = [];
      })

      // delete cart item section

      .addCase(deleteCartItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload.data;
      })
      .addCase(deleteCartItem.rejected, (state) => {
        state.isLoading = false;
        state.cartItems = [];
      });
  },
});

export default shoppingCartSlice.reducer;
