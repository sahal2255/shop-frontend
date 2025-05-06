 import axios from "axios";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  productsList: [],
  isAddingProduct:false,
};

export const fetchAllProducts = createAsyncThunk(
  "/admin/getproduct",
  async () => {
    const response = await axios.get(
      "http://localhost:7002/api/admin/getproduct"
    );
    console.log('response',response)
    return response.data
  }
);

export const addNewProduct = createAsyncThunk(
  "/admin/product/add-product",
  async (formData) => {
    const response = await axios.post(
      "http://localhost:7002/api/admin/product/add-product",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data
  }
);

const AdminProductSlice = createSlice({
  name: "adminProducts",
  initialState,
  reducers:{},

  // product get section
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        console.log('action.payload',action.payload);
        
        state.isLoading = false;
        state.productsList = action.payload.data;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.productsList = [];
      })

      // new product add section
      .addCase(addNewProduct.pending, (state) => {
        state.isAddingProduct = true;
      })
      .addCase(addNewProduct.fulfilled, (state) => {
        state.isAddingProduct = false;
      })
      .addCase(addNewProduct.rejected, (state) => {
        state.isAddingProduct = false;
      });

      
  },
});

export default AdminProductSlice.reducer;
