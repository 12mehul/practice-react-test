import { createSlice } from "@reduxjs/toolkit";
import { addProductThunk } from "../thunks/productThunks";

const initialState = {
  loading: false,
  success: false,
  error: null,
  product: {
    title: "",
    category: "",
  },
};

const addProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateProduct: (state, action) => {
      state.product = { ...state.product, ...action.payload };
    },
    clearProduct: (state) => {
      state.product = {
        title: "",
        category: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProductThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProductThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(addProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { updateProduct, clearProduct } = addProductSlice.actions;

export default addProductSlice.reducer;
