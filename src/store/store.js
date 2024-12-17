import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./fetchSlice";

export const store = configureStore({
  reducer: {
    fetchData: dataReducer,
  },
});
