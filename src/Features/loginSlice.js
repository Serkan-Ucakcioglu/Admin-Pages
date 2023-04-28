import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user || null,
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
        state.user = "solarvis";
        localStorage.setItem("user", JSON.stringify("solarvis"));
      } else {
        state.formErr = true;
      }
      return;
    },
    logOut: (state) => {
      state.user = state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { loginCheck, logOut } = loginSlice.actions;
export const selectedUser = (state) => state.loginSlice.user;
export const selectedErr = (state) => state.loginSlice.formErr;
export default loginSlice.reducer;
