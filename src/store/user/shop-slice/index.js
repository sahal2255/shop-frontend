import axios from "axios";

import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState={
    isLoading:false,
    productsList:[],
    singleProduct:null
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
export const fetchProductDetails=createAsyncThunk(
    '/shop/fetchproductdetails',
    async (id) => {
        const response =await axios.get(
            `http://localhost:7002/api/shop/products/${id}`
            )
            return response.data
    }
)



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
            // console.log('fetch product for user',action.payload)
            state.isLoading=false;
            state.productsList=action.payload.data
        })
        .addCase(fetchProductsForUser.rejected,(state)=>{
            state.isLoading=false;
            state.productsList=[]
        })
        // get fetch single product details
        .addCase(fetchProductDetails.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(fetchProductDetails.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.singleProduct=action.payload.data
        })
        .addCase(fetchProductDetails.rejected,(state)=>{
            state.isLoading=false
            state.singleProduct=null
        })
        
        
    }
})
export default UserProductSlice.reducer