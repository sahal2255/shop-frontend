import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth-slice'
import adminProductsSlice from './admin/product-slice/index'
import userProductsSlice from './user/shop-slice/index'
const store = configureStore({
    reducer:{
        auth: authReducer,
        adminProducts:adminProductsSlice,
        userProducts:userProductsSlice

    }
}) 


export default store;