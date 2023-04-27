import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const initialState = {
  user: localStorage.getItem("user") | false,
};

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    loginCheck: (state, { payload }) => {
      console.log("se");
      if (
        payload.email == "solarvis@gmail.com" &&
        payload.password == "solarvis123"
      ) {
        return (state.user = "solarvis");
      } else {
        return false;
      }
    },
  },
});

export const { loginCheck } = loginSlice.actions;
export const selectedUser = (state) => state.loginSlice.user;
export default loginSlice.reducer;
