import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // { username, password }
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action) => {
      const { username, password } = action.payload;
      state.user = { username, password };
      state.isAuthenticated = true;
    },
    login: (state, action) => {
      const { username, password } = action.payload;
      if (
        state.user &&
        state.user.username === username &&
        state.user.password === password
      ) {
        state.isAuthenticated = true;
      } else {
        alert("❌ Credenziali errate o utente non registrato!");
      }
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
