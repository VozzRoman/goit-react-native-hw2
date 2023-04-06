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

const auth = getAuth(db);

// console.log(auth);

export const authSignUpUser =
  (avatar, { email, password, login }) =>
  async (dispatch, getState) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      const user = await auth.currentUser;

      await updateProfile(user, {
        displayName: login,
        photoURL: avatar,
      });
      // console.log("Regisrt user", user);
      const { displayName, uid, photoURL } = await auth.currentUser;
      // console.log("displayName, uid", displayName, uid, email);

      dispatch(
        authSlice.actions.updateUserProfile({
          userId: uid,
          login: displayName,
          userEail: email,
          avatarImage: photoURL,
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
      await signInWithEmailAndPassword(auth, email, password);
      const user = await auth.currentUser;
      dispatch(
        authSlice.actions.authSignIn({
          userEail: user.email,
          login: user.displayName,
          avatarImage: user.photoURL,
        })
      );
      // console.log("Login user=====>", user);

      // console.log(user);
    } catch (error) {
      console.log(error);
      console.log("такого юзера нет", error.message);
      alert(`Sorry but ${email} user dose not exist`);
    }
  };
export const authStateChangeUser = () => async (dispatch, state) => {
	
  try {
	
    await onAuthStateChanged(auth, (user) => {
		
		
      if (user) {
        // console.log('changeUser',user);
        const { displayName, uid, photoURL, email } = user;
		  console.log("USER", user);
		//   user._redirectEventId = true;

        console.log("onAuthStateChanged=====>", displayName, uid);
        dispatch(
          authSlice.actions.updateUserProfile({
            userId: uid,
            login: displayName,
            avatarImage: photoURL,
            userEail: email,
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
