
import React from 'react'
import { View, Text, Image } from 'react-native';
import { stylesAvatar } from './ProfileAvatarStyled';




const ProfileAvatar = ({photo, name, mail, title}) => {

	
  return (
	 <View style={stylesAvatar.container}>
		<View style={stylesAvatar.avaBox}>
		<Image style={{position: 'absolute',	width: 70, height: 70, }}  source={{uri: photo}}></Image>
		<Text style={{fontSize: 40, fontWeight: 700}}>{title}</Text>
		</View>

		<View>
		<Text style={stylesAvatar.userName}>{name}</Text>
		<Text>{mail}</Text>
		</View>
	 </View>
  )
}

export default ProfileAvatar;
