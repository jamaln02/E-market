import { headerSlicee } from "./ReduxSlices/headerSlice";
import { allProducts } from "./ReduxSlices/productsSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    headerSlicee,
    allProducts,
  },
});

export default store;
