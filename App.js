
import RegistrationScreen from './src/Screens/RegistrationScreen/RegistrationScreen';
import { ImageBackground, Keyboard, SafeAreaView, TouchableNativeFeedback } from 'react-native';
import { styles } from './AppStyle';
import { useState } from 'react';

export default function App() {
	const [isShowKeyboard, setIsShowKeyboard] = useState(false);
	const hideKeyboard = () => {
		setIsShowKeyboard(false);
		Keyboard.dismiss();
	}
	
  return (
	<TouchableNativeFeedback onPress={hideKeyboard}>
	<SafeAreaView style={styles.container}>

	<ImageBackground style={styles.imageBg} source={require("./src/img/bg/PhotoBG.jpg")} resizeMode="cover">
   <RegistrationScreen isShowKeyboard={isShowKeyboard} setIsShowKeyboard={setIsShowKeyboard}/>
	</ImageBackground>

	</SafeAreaView>
	</TouchableNativeFeedback>
  );
}



