import { createSlice } from "@reduxjs/toolkit";
import {
  deleteProductThunk,
  fetchProductsThunk,
  fetchSingleProductThunk,
} from "../thunks/productThunks";

const initialState = {
  loading: false,
  products: [],
  error: null,
  singleProduct: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get All Lists
      .addCase(fetchProductsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProductsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Single Product
      .addCase(fetchSingleProductThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSingleProductThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.singleProduct = action.payload;
      })
      .addCase(fetchSingleProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete Product
      .addCase(deleteProductThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProductThunk.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
