
import React from 'react'
import { View, Text, Image } from 'react-native';
import { stylesAvatar } from './ProfileAvatarStyled';




const ProfileAvatar = ({photo, name, mail}) => {

	
  return (
	 <View style={stylesAvatar.container}>
		<View>
		<Image style={{width: 70, height: 70, marginRight: 10}} source={require("../../img/svg/ava.png")}></Image>
		</View>

		<View>
		<Text style={stylesAvatar.userName}>{name}</Text>
		<Text>{mail}</Text>
		</View>
	 </View>
  )
}

export default ProfileAvatar;
