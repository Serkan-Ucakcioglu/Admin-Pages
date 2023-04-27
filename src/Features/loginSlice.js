import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user") | null,
};

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {},
});

export default loginSlice.reducer;
