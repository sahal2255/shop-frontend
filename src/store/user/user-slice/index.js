import axios from "axios";

import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState={
    isLoading:false,
    prductsList:[],
}


export const fetchProductsForUser=createAsyncThunk(
    '/shop/product',
    async()=>{
        const response=await axios.get(
            "http://localhost:7002/api/shop/products"
        )
        console.log('fetch shop products',response)
        return response.data
    }
)