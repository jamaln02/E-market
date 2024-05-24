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
  productDetailsCount: 0,
  cart: [],
};

const products = createSlice({
  name: "products",
  initialState: data,
  reducers: {
    increment: (state) => {
      state.productDetailsCount += 1;
    },
    decrement: (state) => {
      if (state.productDetailsCount > 0) {
        state.productDetailsCount -= 1;
      }
    },
    addToCart: (state, action) => {
      let check = state.cart.some(
        (products) => products.id == action.payload.id
      );

      if (check) {
        increment(action.payload.item);
        console.log(action.payload.item);
      } else {
        action.payload = { ...action.payload, item: 1 };

        state.cart = [...state.cart, action.payload];
      }
      console.log(state.cart);
    },
  },
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

export const { increment, decrement, addToCart } = products.actions;
