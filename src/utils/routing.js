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
import RegistrationScreen from '../Screens/RegistrationScreen/RegistrationScreen';
import PostScreen from '../Screens/Home/PostsScreen/PostScreen';
import CreatePostScreen from '../Screens/Home/CreatePostsScreen/CreatePostScreen';
import ProfileScreen from '../Screens/Home/ProfileScreen/ProfileScreen';
import HomeMain from '../Screens/Home/HomeMain/HomeMain';
import Error from '../Screens/Home/Error/Error';



export const useRoute = (isAuth) => {
	

 return  <AuthStack.Navigator>
<AuthStack.Screen options={{headerShown: false}} name='Login' component={LoginScreen}/>
<AuthStack.Screen options={{headerShown: false}} name='Register' component={RegistrationScreen}/>

{isAuth && <AuthStack.Screen options={{headerShown: false}} name='Home' component={HomeMain}/>}

			</AuthStack.Navigator> 

	
	// return <MainTab.Navigator screenOptions={{tabBarStyle: {paddingHorizontal: 50, height: 83, }}}>
	// <MainTab.Screen options={{tabBarActiveTintColor: '#FF6C00', tabBarInactiveTintColor: '#fff', headerShown: false, tabBarLabel: '', tabBarIcon: ({focused, color}) => (
	// 	<View style={{...styles.tabBth, backgroundColor: color}}>
	// 	<Feather name="grid" size={24} color={focused ? '#fff' : 'gray'} />
	// 	</View>
	// )}} name='Posts' component={PostScreen}/>
	// <MainTab.Screen options={{tabBarActiveTintColor: '#FF6C00', tabBarInactiveTintColor:'#fff', headerShown: false, tabBarLabel: '', tabBarIcon: ({focused, color}) => (
	// 	<View style={{...styles.tabBth, backgroundColor: color}}>
	// 	<Feather name="plus" size={24} color={focused ? '#fff' : 'gray'} />
	// 	</View>
	// )}} name='CreatePosts' component={CreatePostScreen} />
	// <MainTab.Screen options={{tabBarActiveTintColor: '#FF6C00', tabBarInactiveTintColor:'#fff',headerShown: false, tabBarLabel: '', tabBarIcon: ({focused, color}) => (
	// 		<View style={{...styles.tabBth, backgroundColor: color}}>
	// 	<Feather name="user" size={24} color={focused ? '#fff' : 'gray'} />
	// 	</View>
	// )}} name='Profile' component={ProfileScreen} />
	// 		</MainTab.Navigator>

}

// const styles = StyleSheet.create({
// 	tabBth: {
// 		width: 70,
// 		height: 40,
// 		borderRadius: 20,
// 		alignItems: 'center',
// 		justifyContent: 'center',
	
// 	}
// })

