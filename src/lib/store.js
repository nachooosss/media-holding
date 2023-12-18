import { configureStore } from "@reduxjs/toolkit";
import allSlice from "./features/all/allSlice";
export const makeStore = () => {
  return configureStore({
    reducer: { data: allSlice },
  });
};
