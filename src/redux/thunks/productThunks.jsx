import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchProductsFailure,
  fetchProductsRequest,
  fetchProductsSuccess,
} from "../actions/productActions";
import { fetchProductsService } from "../services/productService";
import { fetchAddProductService } from "../services/addProductService";

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

export const addProductThunk = createAsyncThunk(
  "product/addProductThunk",
  async (product) => {
    const data = await fetchAddProductService(product);
    return data;
  }
);
