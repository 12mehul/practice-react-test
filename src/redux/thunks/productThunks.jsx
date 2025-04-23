import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchProductsFailure,
  fetchProductsRequest,
  fetchProductsSuccess,
} from "../actions/productActions";
import {
  addProductService,
  deleteProductService,
  fetchProductsService,
  fetchSingleProductService,
  updateProductService,
} from "../services/productService";

export const fetchProducts = () => async (dispatch) => {
  dispatch(fetchProductsRequest());
  try {
    const products = await fetchProductsService();
    dispatch(fetchProductsSuccess(products));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};

export const fetchProductsThunk = createAsyncThunk(
  "products/fetchProductsThunk",
  async () => {
    const products = await fetchProductsService();
    return products;
  }
);

export const fetchSingleProductThunk = createAsyncThunk(
  "products/fetchSingleProductThunk",
  async (id) => {
    const data = await fetchSingleProductService(id);
    return data;
  }
);

export const deleteProductThunk = createAsyncThunk(
  "products/deleteProductThunk",
  async (id) => {
    const data = await deleteProductService(id);
    return data;
  }
);

export const addProductThunk = createAsyncThunk(
  "product/addProductThunk",
  async (product) => {
    const data = await addProductService(product);
    return data;
  }
);

export const updateProductThunk = createAsyncThunk(
  "product/updateProductThunk",
  async (id, product) => {
    const data = await updateProductService(id, product);
    return data;
  }
);
