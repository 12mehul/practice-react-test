import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducers/productReducer";
import productsSlice from "../slice/productSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    productsSlice: productsSlice,
  },
});

export default store;
