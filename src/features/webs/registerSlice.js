import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { registerUser } from './registerAPI';

const initialState = {
  status: 'idle',
  username: '',
  error: null,
};

export const registerAsync = createAsyncThunk(
  'register/register',
  async (userData) => {
    const response = await registerUser(userData);
    return response.data;
  }
);

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.status = 'success';
        state.username = action.payload.username;
        state.error = null;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error.message;
      });
  },
});

// export const { selectUsername, selectStatus, selectError } = registerSlice.actions;
export const selectUsername = (state) => state.register.username;
export const selectError = (state) => state.register.error;
export const selectStatus = (state) => state.register.status;
export default registerSlice.reducer;
