import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user") | false,
  formErr: false,
};

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    loginCheck: (state, { payload }) => {
      if (
        payload.email == "solarvis@gmail.com" &&
        payload.password == "solarvis123"
      ) {
        state.formErr = false;
        localStorage.setItem("user", JSON.stringify("solarvis"));
        return true;
      } else {
        state.formErr = true;
      }
    },
  },
});

export const { loginCheck } = loginSlice.actions;
export const selectedUser = (state) => state.loginSlice.user;
export const selectedErr = (state) => state.loginSlice.formErr;
export default loginSlice.reducer;
