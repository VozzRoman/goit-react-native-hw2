import { createNativeStackNavigator } from '@react-navigation/native-stack';





const AuthStack = createNativeStackNavigator();


import LoginScreen from '../Screens/LoginScreen/LoginScreen';
import RegistrationScreen from '../../src/Screens/RegistrationScreen/RegistrationScreen';
import HomeMain from '../Screens/Home/HomeMain/HomeMain';
import CommentsScreen from '../Screens/NestedScreen/CommentsScreen/CommentsScreen';





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



