import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getProductsSearch = createAsyncThunk(
  "getProductsSearch",
  async (id = "", thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const details = await axios({
        method: "get",
        url: `https://dummyjson.com/products/search?q=${id}`,
      });
      return details.data;
    } catch (er) {
      return rejectWithValue(er);
    }
  }
);

const data = {
  nav: false,
  searchResultsLoading: false,
  searchResultsData: null,
  searchResultsError: null,
  inputValue: "",
  opendrawer: false,
};

const headerSlice = createSlice({
  name: "headerSlice",
  initialState: data,
  reducers: {
    openNav: (state) => {
      state.nav = !state.nav;
    },
    handleSearch: (state, action) => {
      state.inputValue = action.payload.target.value;
    },
    handleOpenDrawer: (state, action) => {
      state.opendrawer = true;
    },
    handleCloseDrawer: (state, action) => {
      state.opendrawer = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsSearch.pending, (state, action) => {
      state.searchResultsLoading = true;
    });
    builder.addCase(getProductsSearch.fulfilled, (state, action) => {
      state.searchResultsLoading = false;
      state.searchResultsData = action.payload.products;
    });
    builder.addCase(getProductsSearch.rejected, (state, action) => {
      state.searchResultsLoading = false;
      state.searchResultsError = action.error.message;
    });
  },
});

export const headerSlicee = headerSlice.reducer;
export const { openNav, handleSearch, handleOpenDrawer, handleCloseDrawer } =
  headerSlice.actions;
