
import RegistrationScreen from './src/Screens/RegistrationScreen/RegistrationScreen';
import { ImageBackground, SafeAreaView } from 'react-native';
import { styles } from './AppStyle';
export default function App() {
  return (
	<SafeAreaView style={styles.container}>

	<ImageBackground style={styles.imageBg} source={require("./src/img/bg/PhotoBG.jpg")} resizeMode="cover">
   <RegistrationScreen/>
	</ImageBackground>

	</SafeAreaView>
  );
}



