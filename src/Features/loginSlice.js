import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user") | false,
  count: 0,
};

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    loginCheck: (state, { payload }) => {
      console.log("te");
    },
  },
});

export const { loginCheck } = loginSlice.actions;
export const selectedUser = (state) => state.loginSlice.user;
export default loginSlice.reducer;
