
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./AppStyle";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { Provider } from "react-redux";
import { store } from "./src/redux/store";


import './src/firebase/config';
import { Main } from "./src/components/Main";





// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// import LoginScreen from './src/Screens/LoginScreen/LoginScreen';
// import PostScreen from './src/Screens/Home/PostsScreen/PostScreen';
// import CreatePostScreen from './src/Screens/Home/CreatePostsScreen/CreatePostScreen';
// import ProfileScreen from './src/Screens/Home/ProfileScreen/ProfileScreen';
//Function Auth to Home
// const AuthStack = createNativeStackNavigator();
// const MainTab = createMaterialBottomTabNavigator();

// const useRoute = (isAuth) => {
// 	if(!isAuth){

//  return  <AuthStack.Navigator>
// <AuthStack.Screen options={{headerShown: false}} name='Login' component={LoginScreen}/>
// <AuthStack.Screen options={{headerShown: false}} name='Register' component={RegistrationScreen}/>
// 			</AuthStack.Navigator>

// 	}
// 	return <MainTab.Navigator>
// 	<MainTab.Screen name='Posts' component={PostScreen}/>
// 	<MainTab.Screen name='CreatePosts' component={CreatePostScreen}/>
// 	<MainTab.Screen name='Profile' component={ProfileScreen}/>
// 			</MainTab.Navigator>

// }


export default function App() {


 

  const [fontsLoaded] = useFonts({
    RobotoBold: require("./assets/Fonts/Roboto-Bold.ttf"),
    RobotMedium: require("./assets/Fonts/Roboto-Medium.ttf"),
    RobotRegular: require("./assets/Fonts/Roboto-Regular.ttf"),
  });

 

 
 

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
		<Provider store={store}>
      <Main/>
		</Provider>


    </SafeAreaView>
  );
}
