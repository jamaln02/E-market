const { createSlice } = require("@reduxjs/toolkit");

const data = {
  nav: false,
};

const headerSlice = createSlice({
  name: "headerSlice",
  initialState: data,
  reducers: {
    openNav: (state) => {
      state.nav = !state.nav;
    },
  },
});

export const headerSlicee = headerSlice.reducer;
export const { openNav } = headerSlice.actions;
