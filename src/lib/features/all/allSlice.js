import { createSlice } from "@reduxjs/toolkit";

export const dataslice = createSlice({
  name: "data",
  initialState: {
    activeMenu: false,
  },
  reducers: {
    Menuactive: (state) => {
      state.activeMenu = true;
      b;
    },
    Menudesactive: (state) => {
      state.activeMenu = false;
    },
  },
});

export const { Menuactive, Menudesactive } = allSlice.actions;

export default allSlice.reducer;
