
import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import { postScreenStyle,  } from './PostScreenStyled';
import { Feather } from '@expo/vector-icons'; 
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import ProfileAvatar from '../../../components/ProfileAvatar/ProfileAvatar';


const PostScreen = ({navigation}) => {
	const handleSignOut = () => {
		navigation.navigate("Login");
	}
  return (
	 <View style={postScreenStyle.container}>
		<ProfileAvatar name='Natali Romanova' mail='email@example.com'/>
	 </View>
  )
}

export default PostScreen;
