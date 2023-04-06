import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import { View, StyleSheet, Text } from 'react-native';



const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

import LoginScreen from '../Screens/LoginScreen/LoginScreen';
import RegistrationScreen from '../../src/Screens/RegistrationScreen/RegistrationScreen';
import PostScreen from '../Screens/Home/PostsScreen/PostScreen';
import CreatePostScreen from '../Screens/Home/CreatePostsScreen/CreatePostScreen';
import ProfileScreen from '../Screens/Home/ProfileScreen/ProfileScreen';
import HomeMain from '../Screens/Home/HomeMain/HomeMain';
import CommentsScreen from '../Screens/NestedScreen/CommentsScreen/CommentsScreen';
import { HeaderTitle } from '@react-navigation/elements';




export const useRoute = (isAuth) => {

	if(!isAuth){

 return  <AuthStack.Navigator>
<AuthStack.Screen options={{headerShown: false}} name='Login' component={LoginScreen}/>
<AuthStack.Screen options={{headerShown: false}} name='Register' component={RegistrationScreen}/>



			</AuthStack.Navigator> 
	} 
		
	return <AuthStack.Navigator>
	<AuthStack.Screen options={{headerShown: false}} name='Home' component={HomeMain}/>
	<AuthStack.Screen options={{
		headerShown: true,
		title: 'Комментари',
		headerTitleAlign: 'center',
		headerTitleStyle: {fontSize: 17}

		
		
		}} name='CommentScreen' component={CommentsScreen}/>

	
	 </AuthStack.Navigator>
}



