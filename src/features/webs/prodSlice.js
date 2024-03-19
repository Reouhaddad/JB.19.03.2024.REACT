import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProds, addProd, deleteProd } from './prodAPI';

const initialState = {
  status: 'idle',
  prods: []
};

export const getProdsAsync = createAsyncThunk(
  'prod/getProds',
  async () => {
    // console.log(formData);
    const response = await getProds();

    return response.data;
  }
);
export const addProdAsync = createAsyncThunk(
  'prod/addProd',
  async (prod) => {
    const response = await addProd(prod);
    return response.data;
  }
);

// upd 

export const deleteProdAsync = createAsyncThunk(
  'prod/deleteProd',
  async (id) => {
    const response = await deleteProd(id);
    return id; // Returning the deleted product ID for efficient removal from the state
  }
);


export const prodSlice = createSlice({
  name: 'prod',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProdsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProdsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.prods = action.payload;
      }).addCase(addProdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.prods.push(action.payload);
      }).addCase(deleteProdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.prods = state.prods.filter(prod => prod.id !== action.payload);
      });
  },
});


export const selectProds = (state) => state.prod.prods;
export default prodSlice.reducer;