
import RegistrationScreen from './src/Screens/RegistrationScreen/RegistrationScreen';
import { ImageBackground, Keyboard, SafeAreaView, TouchableNativeFeedback, Text } from 'react-native';
import { styles } from './AppStyle';
import { useCallback, useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import LoginScreen from './src/Screens/LoginScreen/LoginScreen';



export default function App() {
	const [fontsLoaded] = useFonts({
		'RobotoBold': require('./assets/Fonts/Roboto-Bold.ttf'),
		'RobotMedium': require('./assets/Fonts/Roboto-Medium.ttf'),
		'RobotRegular': require('./assets/Fonts/Roboto-Regular.ttf')
	 });
	const [isShowKeyboard, setIsShowKeyboard] = useState(false);
	const hideKeyboard = () => {
		setIsShowKeyboard(false);
		Keyboard.dismiss();
	}
	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
		  await SplashScreen.hideAsync();
		}
	 }, [fontsLoaded]);


	 if (!fontsLoaded) {
		return null;
	 }


  return (
	<TouchableNativeFeedback onPress={hideKeyboard}>
	<SafeAreaView style={styles.container} onLayout={onLayoutRootView}>

	<ImageBackground style={styles.imageBg} source={require("./src/img/bg/PhotoBG.jpg")} resizeMode="cover">
   <RegistrationScreen isShowKeyboard={isShowKeyboard} setIsShowKeyboard={setIsShowKeyboard}/>
	{/* <LoginScreen isShowKeyboard={isShowKeyboard} setIsShowKeyboard={setIsShowKeyboard} /> */}
	</ImageBackground>

	</SafeAreaView>
	</TouchableNativeFeedback>
  );
} 

