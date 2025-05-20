 import axios from "axios";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  productsList: [],
  isAddingProduct:false,
  isDeleteProduct:false,
  isEditProduct:false,
};

//fetch all product section
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

// add new product section
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


// edit exist product section
export const editExistProduct=createAsyncThunk(
  "/admin/prdouct/edit",
  async({id,form})=>{
    console.log('edited formdata in the slice',form)
    const response=await axios.put(
      `http://localhost:7002/api/admin/product/edit/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
  }
)

// delete selected product section

export const deleteExistProduct=createAsyncThunk(
 "/admin/product/delete",
  async(id)=>{
    const response=await axios.delete(
      `http://localhost:7002/api/admin/product/delete/${id}`
    );
    return response.data
  }
)
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
      })

      // delete product section 
      .addCase(deleteExistProduct.pending,(state)=>{
        state.isDeleteProduct=true
      })
      .addCase(deleteExistProduct.fulfilled,(state,action)=>{
        state.isDeleteProduct=false,
        state.productsList=state.productsList.filter(
          (product)=>product._id!==action.payload
        )
      })
      .addCase(deleteExistProduct.rejected,(state)=>{
        state.isDeleteProduct=false
      })

      // edit product function 
      // .addCase(editExistProduct.pending,(state)=>{
      //   state.isEditProduct=true
      // })
      // .addCase(deleteExistProduct.fulfilled,(state)=>{
      //   state.isEditProduct=false
      // })
      // .addCase(editExistProduct.rejected,(state)=>{
      //   state.isEditProduct=false
      // })
      
  },
});

export default AdminProductSlice.reducer;
