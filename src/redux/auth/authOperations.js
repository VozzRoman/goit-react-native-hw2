import db from "../../firebase/config";

import {
  updateProfile,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { authSlice } from "./authSlice";
import { async } from "@firebase/util";

const auth = getAuth(db);

// console.log(auth);

export const authSignUpUser =
  ({ email, password, login }) =>
  async (dispatch, getState) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      const user = await auth.currentUser;

      await updateProfile(user, {
        displayName: login,
      });
      // console.log('Regisrt user',user)
      const { displayName, uid } = await auth.currentUser;
      console.log("displayName, uid", displayName, uid);

      dispatch(
        authSlice.actions.updateUserProfile({
          userId: uid,
          login: displayName,
        })
      );
    } catch (error) {
      console.log(error);
      console.log("error.message", error.message);
    }
  };

export const authSignInUser =
  ({ email, password }) =>
  async (dispatch, state) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      // console.log('Login user', user);

      // console.log(user);
    } catch (error) {
      console.log(error);
      console.log("такого юзера нет", error.message);
    }
  };

export const authStateChangeUser = () => async (dispatch, state) => {
  try {
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log('changeUser',user);
        const { displayName, uid } = user;
        console.log("onAuthStateChanged=====>", displayName, uid);
        dispatch(
          authSlice.actions.updateUserProfile({
            userId: uid,
            login: displayName,
          })
        );
        dispatch(authSlice.actions.authStateChange({ stateChange: true }));
      }
    });
  } catch (e) {
    console.log(e.message);
  }
};

export const singOutUser = () => async (dispatch, state) => {
  try {
    await signOut(auth);
    dispatch(authSlice.actions.authSignOut());
  } catch (e) {
    console.log(e.message);
  }
};
