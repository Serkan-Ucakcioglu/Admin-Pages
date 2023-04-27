import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user") | false,
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
        state.user = "solarvis";
      } else {
        return false;
      }
    },
  },
});

export default loginSlice.reducer;
