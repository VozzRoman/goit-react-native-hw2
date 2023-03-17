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
const ProfileScreen = ({navigation}) => {
  return (
	
	<ImageBackground
	  style={formStyles.imageBg}
	  source={require("../../../img/bg/PhotoBG.jpg")}
	  resizeMode="cover"
	>

		 <View
			style={formStyles.registration}
		 >
			<Text style={formStyles.formTitle}>Natali Romanova</Text>
			<Avatar />
			<View style={profileScreenStyle.signOutButton}>
			<SignOutBth onPress={() => navigation.navigate('Login')}/>
			</View>
			
		

		 </View>
	  
	</ImageBackground>
 
  )
}

export default ProfileScreen;
