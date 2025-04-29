import { axiosInstance } from "@/helpers/axiosInstance";
import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  isLoading: false,
  productsList: [],
};


export const fetchAllProducts=createAsyncThunk(
    '/admin/getproduct',
    async()=>{
        const response=await axios.get('http://localhost:7002/api/admin/getproduct')
    }
)
export const addNewProduct = createAsyncThunk(
  "/admin/product/add-product",
  async(formData)=>{
    const response=await axios.post('http://localhost:7002/api/admin/product/add-product',formData,headers)
  }
);
const AdminProductSlice = createSlice({
  name: "adminProducts",
  initialState,
  reducers,

  // product get section
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending,(state)=>{
        state.isLoading=true
    }).addCase(fetchAllProducts.fulfilled,(state,action)=>{
        state.isLoading=false
        state.productsList=action.payload
    }).addCase(fetchAllProducts.rejected,(state,action)=>{
        state.isLoading=false
        state.productsList=[]
    })
  },
});


export default AdminProductSlice.reducer