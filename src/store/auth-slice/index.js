import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
};

// user register section
export const registerUser = createAsyncThunk(
  "/auth/register",
  async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:7002/api/auth/register",
        formData,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      // console.log('error response',error.response)
      const message = error.response?.data?.message || "Something went wrong";
      return message;
    }
  }
);
// user login section 
export const loginUser = createAsyncThunk("/auth/login", async (formData) => {
  try {
    const response = await axios.post(
      "http://localhost:7002/api/auth/login",
      formData,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    // console.log('error response',error.response)
    const message = error.response?.data?.message || "Something went wrong";
    return message;
  }
});
// user check authentication section 
export const checkAuth = createAsyncThunk("/auth/check-auth", async () => {
  try {
    const response = await axios.get(
      "http://localhost:7002/api/auth/check-auth",
      {
        withCredentials: true,
        headers:{'Cache-Control':'not-store , no-cache , must-revalidate ,proxy-revalidate'}
      }
    );
    return response.data;
  } catch (error) {
    // console.log('error response',error.response)
    const message = error.response?.data?.message || "Something went wrong";
    return message;
  }
});
// logout function
// export const logout=createSlice({

// })
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthenticated = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = true;
        state.user = null;
        state.isAuthenticated = false;
      })
      // Login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.success ? action.payload.user : null;
        state.isAuthenticated = !!action.payload.success;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.success ? action.payload.user : null;
        state.isAuthenticated = !!action.payload.success;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
