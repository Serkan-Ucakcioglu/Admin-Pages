import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../Features/loginSlice";

export const store = configureStore({
  reducer: {
    loginSlice,
  },
});
