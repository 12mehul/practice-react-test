import axios from "axios";

export const fetchAddProductService = async (product) => {
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
