
import RegistrationScreen from './src/Screens/RegistrationScreen/RegistrationScreen';
import { ImageBackground, Keyboard, SafeAreaView, TouchableNativeFeedback, Dimensions } from 'react-native';
import { styles } from './AppStyle';
import { useCallback, useEffect, useState } from 'react';
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
	const [dimensions, setDimensions] = useState(Dimensions.get('window').width - 20 * 2);

useEffect(() => {
 const onChange = () => {
	const width = Dimensions.get('window').width - 20 * 2;
	console.log('width', width)
	setDimensions(width);
 };
 Dimensions.addEventListener('change', onChange);
 return () => {
	Dimensions.removeEventListener('change', onChange);
 }
}, [])

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
   <RegistrationScreen dimensions={dimensions} isShowKeyboard={isShowKeyboard} setIsShowKeyboard={setIsShowKeyboard}/>
	{/* <LoginScreen dimensions={dimensions} isShowKeyboard={isShowKeyboard} setIsShowKeyboard={setIsShowKeyboard} /> */}
	</ImageBackground>

	</SafeAreaView>
	</TouchableNativeFeedback>
  );
} 

