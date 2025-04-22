import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducers/productReducer";
import productsSlice from "../slice/productSlice";
import addProductSlice from "../slice/addProductSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    productsSlice: productsSlice,
    addProduct: addProductSlice,
  },
});

export default store;
