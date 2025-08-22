import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://dummyjson.com/products";

// 🔹 GET prodotti (solo laptop e smartphone)
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const categories = ["laptops", "smartphones"];
  let allProducts = [];

  for (const cat of categories) {
    const res = await axios.get(`${API_URL}/category/${cat}`);
    allProducts = [...allProducts, ...res.data.products];
  }

  return allProducts;
});

const productsSlice = createSlice({
  name: "products",
  initialState: { list: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
