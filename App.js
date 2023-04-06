
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./AppStyle";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { Provider } from "react-redux";
import { store } from "./src/redux/store";


import './src/firebase/config';
import { Main } from "./src/components/Main";



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
