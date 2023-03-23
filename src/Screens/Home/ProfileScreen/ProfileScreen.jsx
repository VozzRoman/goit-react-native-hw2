import React from 'react'
import { profileScreenStyle } from './ProfileScreenStyled';
import { formStyles } from "../../RegistrationScreen/FormsStyle";
import { Avatar } from "../../../components/Avatar/Avatar";
import {
	Text,
	View,
	ImageBackground,
 } from "react-native";
import SignOutBth from '../../../components/Buttons/SignOutBth/SignOutBth';
import { useDispatch, useSelector } from 'react-redux';
import { singOutUser } from '../../../redux/auth/authOperations';


const ProfileScreen = ({navigation}) => {
const dispatch = useDispatch();
	const userData = useSelector(state => state);
	console.log('userProfileState',userData.auth.login);

	const handleSingOut = () => {
		dispatch(singOutUser());
	}

  return (
	
	<ImageBackground
	  style={formStyles.imageBg}
	  source={require("../../../img/bg/PhotoBG.jpg")}
	  resizeMode="cover"
	>

		 <View
			style={formStyles.registration}
		 >
			<Text style={formStyles.formTitle}>{userData.auth.login}</Text>
			<Avatar />
			<View style={profileScreenStyle.signOutButton}>
			<SignOutBth onPress={handleSingOut}/>
			</View>
			
		

		 </View>
	  
	</ImageBackground>
 
  )
}

export default ProfileScreen;
