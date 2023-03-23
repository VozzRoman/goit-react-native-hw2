import { createSlice } from "@reduxjs/toolkit";

export const userSelector = (state) => state.auth;

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: null,
    login: null,
    stateChange: false,
  },
  reducers: {
    updateUserProfile: (state, { payload }) => {
      console.log("updateUserProfile-payload===>", payload);
      return {
        ...state,
        userId: payload.userId,
        login: payload.login,
      };
    },
    authStateChange: (state, { payload }) => {
      console.log("authStateChange-payload===>", payload);
      return {
        ...state,
        stateChange: payload.stateChange,
      };
    },
    authSignOut: () => {
      return {
        userId: null,
        login: null,
        stateChange: false,
      };
    },

    // updateUserProfile(state, actions) {
    // 	state.userId = actions.payload.userId;
    // 	state.login = actions.payload.login;
    // },
  },
});
console.log("authSlice", authSlice);

export default authSlice.reducer;
