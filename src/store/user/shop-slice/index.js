import axios from "axios";

import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState={
    isLoading:false,
    productsList:[],
}


export const fetchProductsForUser = createAsyncThunk(
  "/shop/product",
  async ({ filterParams, sortParams }) => {
    const query = new URLSearchParams();

    if (filterParams) {
      if (filterParams.category) {
        query.append("category", filterParams.category.join(","));
      }
      if (filterParams.brand) {
        query.append("brand", filterParams.brand.join(","));
      }
    }

    if (sortParams) {
      query.append("sortBy", sortParams);
    }

    const response = await axios.get(
      `http://localhost:7002/api/shop/products?${query}`
    );

    return response.data;
  }
);




const UserProductSlice=createSlice({
    name:'userProducts',
    initialState,
    reducers:{},

    // user products listing section

    extraReducers:(builder)=>{
        builder.addCase(fetchProductsForUser.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(fetchProductsForUser.fulfilled,(state,action)=>{
            console.log('fetch product for user',action.payload)
            state.isLoading=false;
            state.productsList=action.payload.data
        })
        .addCase(fetchProductsForUser.rejected,(state)=>{
            state.isLoading=false;
            state.productsList=[]
        })

        // get fetch all product
        // .addCase()
    }
})
export default UserProductSlice.reducer