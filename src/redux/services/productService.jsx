import axios from "axios";

export const fetchProductsService = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data.products;
  } catch (error) {
    // More robust error handling
    const errorMessage =
      error.response?.data?.message || "Failed to fetch products";
    // It's better to throw the error rather than return it
    throw new Error(errorMessage);
  }
};

export const fetchSingleProductService = async (id) => {
  try {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Failed to fetch product";
    throw new Error(errorMessage);
  }
};

export const deleteProductService = async (id) => {
  try {
    const response = await axios.delete(`https://dummyjson.com/products/${id}`);
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Failed to delete product";
    throw new Error(errorMessage);
  }
};

export const addProductService = async (product) => {
  try {
    const response = await axios.post(
      "https://dummyjson.com/products/add",
      product
    );
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Failed to create product";
    throw new Error(errorMessage);
  }
};

export const updateProductService = async (id, updatedProduct) => {
  try {
    const response = await axios.put(
      `https://dummyjson.com/products/${id}`,
      updatedProduct
    );
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Failed to update product";
    throw new Error(errorMessage);
  }
};
