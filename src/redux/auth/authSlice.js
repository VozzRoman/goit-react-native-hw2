import { createSlice } from "@reduxjs/toolkit";

export const userSelector = (state) => state.auth;

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: null,
    login: null,
	 userEail: null,
    stateChange: false,
	 avatarImage: null,
	 
  },
  reducers: {
    updateUserProfile: (state, { payload }) => {
      console.log("updateUserProfile-payload===>", payload);
      return {
        ...state,
        userId: payload.userId,
        login: payload.login,
		  userEail: payload.userEail,
		  avatarImage: payload.avatarImage,
      };
    },
	 authSignIn: (state, {payload}) => {
		console.log("authSignInProfile-payload===>", payload);
		return {
			...state,
			login: payload.login,
			userEail: payload.userEail,
			avatarImage: payload.avatarImage,
		}

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

export const {updateUserProfile} = authSlice.actions;

export default authSlice.reducer;
