import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getAllProducts = createAsyncThunk(
  "getAllProducts",
  async (id = "", thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const details = await axios({
        method: "get",
        url: `https://dummyjson.com/products/${id}`,
      });
      return details.data;
    } catch (er) {
      return rejectWithValue(er);
    }
  }
);

export const getAllCategories = createAsyncThunk(
  "getAllCategories",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const details = await axios({
        method: "get",
        url: `https://dummyjson.com/products/categories`,
      });
      return details.data;
    } catch (er) {
      return rejectWithValue(er);
    }
  }
);

const data = {
  productsData: null,
  productsError: null,
  productsLoading: false,
  categoriesData: null,
};

const products = createSlice({
  name: "products",
  initialState: data,
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state, action) => {
      state.productsLoading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.productsLoading = false;
      state.productsData = action.payload;
      console.log(action.payload);
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.productsLoading = false;
      state.productsError = action.error.message;
    });

    // categories /////////////////////////////

    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.productsLoading = false;
      state.categoriesData = action.payload;
    });
  },
});

export const allProducts = products.reducer;
