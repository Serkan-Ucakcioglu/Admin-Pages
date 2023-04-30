import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user || null,
  formErr: false,
  step: 0,
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
    addStep: (state, { payload }) => {
      state.step = state.step = payload;
    },
  },
});

export const { loginCheck, logOut, addStep } = loginSlice.actions;
export const selectedUser = (state) => state.loginSlice.user;
export const selectedErr = (state) => state.loginSlice.formErr;
export const selectedStep = (state) => state.loginSlice.step;
export default loginSlice.reducer;
