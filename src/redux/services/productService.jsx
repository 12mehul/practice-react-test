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
