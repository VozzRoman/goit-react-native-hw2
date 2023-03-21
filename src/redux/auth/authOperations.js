
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from "../../firebase/config";
import { authSlice } from './authSlice';

console.log(auth);

export const authSignUpUser = ({ email, password, login}) => async (dispatch, state) => {
	try {
		const {user} = await createUserWithEmailAndPassword(auth, email, password);
		
		dispatch(authSlice.actions.updateUserProfile({userId: user.uid}))
		console.log('AuthOperations',user.uid);
		

	}catch (error) {
		console.log(error);
		console.log("error.message", error.message)
	}
}

export const authSignInUser = ({ email, password}) => async (dispatch, state) => {
	try {
		const user = await signInWithEmailAndPassword(auth, email, password);
		console.log(user);
	
		console.log(user);

	}catch (error) {
		console.log(error);
		console.log("error.message", error.message)
	}
}

// export const authSignOutUser = () => async (dispatch, state) => {}
