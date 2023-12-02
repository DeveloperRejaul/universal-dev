import { createSlice } from '@reduxjs/toolkit';
const auth = createSlice({
  name: 'auth',
  initialState: {
    login: false,
  },
  reducers: {
    handleLogin: (state) => {
      state.login = true;
    },

    handleLogout: (state, action) => {
      state.login = false;
    },
  },
});

export const { handleLogin, handleLogout } = auth.actions;
export default auth.reducer;
