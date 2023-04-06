import { useRoute } from "../../utils/routing";

import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  ImageBackground,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useDispatch } from "react-redux";
import { authSignUpUser} from "../../redux/auth/authOperations";
import { Avatar } from "../../components/Avatar/Avatar";
import { formStyles } from "./FormsStyle";
import MainButton from "../../components/Buttons/MainButton/MainButton";
import * as ImagePicker from 'expo-image-picker';
import { uuidv4 } from '@firebase/util';
import db from '../../firebase/config';
import { getStorage , ref, uploadBytes, getDownloadURL} from "firebase/storage";
const storage = getStorage(db);
console.log('STORAGE',storage);

import * as Animatable from 'react-native-animatable';

// import { useHeaderHeight } from '@react-navigation/elements';


const initialState = {
  login: "",
  email: "",
  password: "",
};
const initialFocuseState = {
  email: false,
  password: false,
  login: false,
};

const RegistrationScreen = ({ navigation }) => {

	const [error, setError] = useState('');
	

	const dispatch = useDispatch();
	
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [value, setValue] = useState(initialState);
  const [focuse, setFocuse] = useState(initialFocuseState);
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [image, setImage] = useState(null);
  const [avator, setAvator] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 20 * 2
  );
  const handleLogIn = () => {
    navigation.navigate("Login");
  };


console.log('AVATOR____', avator);
//   useEffect(() => {
//     const onChange = () => {
//       const width = Dimensions.get("window").width - 20 * 2;
//       console.log("width", width);
//       setDimensions(width);
//     };
//     Dimensions.addEventListener("change", onChange);
//     return () => {
//       Dimensions.removeEventListener("change", onChange);
//     };
//   }, []);

//---------------------------------------------AVATOR



const framePhoto = async () => {

	const { status } = await Camera.requestCameraPermissionsAsync();
	await MediaLibrary.requestPermissionsAsync();
	setHasPermission(status === "granted");

	if (hasPermission === null) {
		return <View />;
	 }
	 if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	 }

	// No permissions request is necessary for launching the image library
	let result = await ImagePicker.launchImageLibraryAsync({
	  mediaTypes: ImagePicker.MediaTypeOptions.All,
	  allowsEditing: true,
	  aspect: [4, 3],
	  quality: 1,
	});

	console.log(result);

	if (!result.canceled) {
	
	  setImage(result.assets[0].uri);
	}
	const response = await fetch(image); //бере фото из стейта
	console.log(response);
	const file = await response.blob(); // формат для сервера
  const avaImageId = uuidv4();
  console.log('FILE====>', file);
  console.log('AVAIMAGE=====>', avaImageId);
  const avator = await ref(storage, `avator/${avaImageId}`);
  console.log(avator);
  const sendPic = await uploadBytes(avator, file); // загрузка
  console.log(sendPic);

  const pathAvaReference = await getDownloadURL(
	  ref(storage, `avator/${avaImageId}`)
	);
	console.log('AVA-REFF====>', pathAvaReference);
	setAvator(pathAvaReference);
}

useEffect(() => {
	(async () =>{
	if (Platform.OS !== "web") {
      const {
        status,
      } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }})();
},[])
//----------------------------------------------

  const showHandlePassword = () => {
    setIsShowPassword((prevState) => !prevState);
  };

    //---------------Validation----------------//
const isValidateEmail = (value) => {
	const regx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	return regx.test(value);
}


const updateError = (error, stateUpdater) => {
	stateUpdater(error);
	setTimeout(() => {
		stateUpdater('');
	}, 2500);
}


  const isValidObject = (obj) => {
	return Object.values(obj).every(value => value.trim())
  }

  const isValidForm = () => {
	if(!isValidObject(value)) 
	return updateError('Required all fields!', setError)
	if(!value.login.trim() || value.login.length < 3) 
	return updateError('Login must have 3 or more letters!', setError)
	if(!isValidateEmail(value.email)) return updateError('Invalid email!', setError)
	if(!value.password.trim() || value.password.length < 6) 
	return updateError('Password must have 6 or more digits', setError)
	return true;
  }


  //----------------------validation---------------------------//

  const hideKeyboard = () => {
	if(isValidForm()){
		setIsShowKeyboard(false);
		Keyboard.dismiss();
	  //  console.log(value);
		setValue(initialState);
		dispatch(authSignUpUser(image, value))
		  navigation.navigate("Login");
	}
  
	
	
	 
	

  };

  const onFocuseHandle = (input) => {
    setIsShowKeyboard(true);
    setFocuse({
      [input]: true,
    });
  };

  const onBlureHandle = (input) => {
    setIsShowKeyboard(false);
    setFocuse({
      [input]: false,
    });
  };

  const hideTouchble = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };




  return (
    <TouchableWithoutFeedback onPress={hideTouchble}>
      <ImageBackground
        style={formStyles.imageBg}
        source={require("../../img/bg/PhotoBG.jpg")}
        resizeMode="cover"
      >
        <KeyboardAvoidingView
          style={{ width: "100%" }}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "android" ? 400 : 0}
        >
          <View
            style={{
              ...formStyles.registration,
              marginBottom: isShowKeyboard ? -170 : 0,
            }}
          >
            <Text style={formStyles.formTitle}>Регистрация</Text>
            <Avatar source={image} onPress={framePhoto}/>
            <View style={{ position: 'relative', marginBottom: 16, width: "100%" }}>
					
              <TextInput
                style={{
                  ...formStyles.input,
                  borderColor: focuse.login ? "#FF6C00" : "#E8E8E8",
                }}
                keyboardType="default"
                placeholder="Логин"
                value={value.login}
                onChangeText={(value) =>
                  setValue((prevState) => ({ ...prevState, login: value }))
                }
                onFocus={() => onFocuseHandle("login")}
                onEndEditing={() => onBlureHandle("login")}
              />
				
				  {error ? <Text style={{position:'absolute', top: -25, color: 'red', fontSize: 14, textAlign: 'center', paddingBottom: 10}}>{error}</Text> : null}
				  
            </View>
            <View style={{ marginBottom: 16,  width: "100%", }}>
              <TextInput
                value={value.email}
                style={{
                  ...formStyles.input,
                  borderColor: focuse.email ? "#FF6C00" : "#E8E8E8",
                }}
                keyboardType="email-address"
                onChangeText={(value) =>
                  setValue((prevState) => ({ ...prevState, email: value }))
                }
                placeholder="Адрес электронной почты"
                onFocus={() => onFocuseHandle("email")}
                onEndEditing={() => onBlureHandle("email")}
              />
            </View>
            <View
              style={{
                marginBottom: 43,
                position: "relative",
                width: "100%",
              }}
            >
              <TextInput
                style={{
                  ...formStyles.input,
                  borderColor: focuse.password ? "#FF6C00" : "#E8E8E8",
                }}
                secureTextEntry={isShowPassword}
                onChangeText={(value) =>
                  setValue((prevState) => ({ ...prevState, password: value }))
                }
                placeholder="Пароль"
                value={value.password}
                onFocus={() => onFocuseHandle("password")}
                onEndEditing={() => onBlureHandle("password")}
                //  onEndEditing={() => setIsShowKeyboard(false)}
              />
              <TouchableOpacity
                style={formStyles.showBth}
                activeOpacity={0.8}
                onPress={showHandlePassword}
              >
                <Text
                  style={{
                    color: "#1B4371",
                    fontSize: 16,
                    fontFamily: "RobotRegular",
                  }}
                >
                  {isShowPassword ? "Показать" : "Не показывать"}
                </Text>
              </TouchableOpacity>
            </View>
				<View style={{width: "100%"}}>
				<MainButton onPress={hideKeyboard} activeOpacity={0.8} title='Зарегистрироваться' style={20}/>
				</View>
            <TouchableOpacity activeOpacity={0.6} onPress={handleLogIn}>
              <Text style={formStyles.formLink}>Уже есть аккаунт? Войти</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
