import { createSlice } from "@reduxjs/toolkit";

const TOKEN_KEY = JSON.parse(localStorage.getItem('token')) || null;
const DATA_KEY = JSON.parse(localStorage.getItem("data")) || null;

const authSlice = createSlice({
  name: "auth",
  initialState: { token: TOKEN_KEY, data: DATA_KEY },
  reducers: {
    setCredentials: (state, action) => {
      const { token, data } = action.payload;
      state.token = token;
      state.data = data;
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem('data', JSON.stringify(data));
    },
    logOut: (state, action) => {
      state.token = null;
      state.data = null;
      localStorage.removeItem('token');
      localStorage.removeItem('data');
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentData = (state) => ({
  token: state.auth.token,
  data: state.auth.data,
});
