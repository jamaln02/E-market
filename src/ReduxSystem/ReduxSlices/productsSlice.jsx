import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getAllProducts = createAsyncThunk(
  "getAllProducts",
  async (id = "", thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const details = await axios({
        method: "get",
        url: `https://dummyjson.com/products/${id}?limit=0`,
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
  cartProductCount: 1,
};

const products = createSlice({
  name: "products",
  initialState: data,
  reducers: {
    increment: (state, action) => {
      let check = state.cart.some(
        (products) => products.id == action.payload.id
      );

      if (check) {
        let newCart = state.cart.map((ele) => {
          if (action.payload.id == ele.id) {
            ele.item += 1;
            state.productsData.item += 1;
          }
          return ele;
        });
        state.cart = newCart;
      } else {
        state.productsData.item += 1;
      }
    },
    decrement: (state, action) => {
      let newCart = state.cart.map((ele) => {
        if (action.payload.id == ele.id && ele.item > 0) {
          ele.item -= 1;
          state.productsData.item -= 1;
        }
        return ele;
      });
      state.cart = newCart;
    },
    cartDelet: (state, action) => {
      let newCart = state.cart.filter((ele) => ele.id !== action.payload.id);

      state.cart = newCart;
    },

    addToCart: (state, action) => {
      let check = state.cart.some(
        (products) => products.id == action.payload.id
      );

      if (check) {
        increment(action.payload);
      } else {
        increment(action.payload);
        state.cart = [...state.cart, action.payload];
      }
    },
    cartEmpty: (state, action) => {
      state.cart = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state, action) => {
      state.productsLoading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.productsLoading = false;
      state.productsData = { ...action.payload, item: 1 };
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

export const { increment, decrement, addToCart, cartDelet, cartEmpty } =
  products.actions;
