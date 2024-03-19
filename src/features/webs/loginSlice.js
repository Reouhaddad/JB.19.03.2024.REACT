import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login } from './loginAPI';
import { jwtDecode } from "jwt-decode";
const initialState = {
  status: 'idle',
  access:"",
  username:"",
  admin:false,
  logged:false
};

export const loginAsync = createAsyncThunk(
  'login/login',
  async (userData) => {
    const response = await login(userData);
    return response.data;
  }
);



export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    test: (state) => {
        console.log("testttttttttttttttttt");
    },
    logout: (state) => {
        state.access = ""
        state.username= ""
        state.admin = false
        state.logged =false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.access = action.payload.access
        state.username= jwtDecode(action.payload.access).username
        state.admin = jwtDecode(action.payload.access).isSuper
        state.logged =true
        console.log(action.payload);
      });
  },
});

export const { test, logout } = loginSlice.actions;
export const selectstatus = (state) => state.login.status;
export const selectUsername = (state) => state.login.username;
export const selectlogged = (state) => state.login.logged;
export const selectAdmin = (state) => state.login.admin;
export default loginSlice.reducer;
