import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  ImageBackground,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { useDispatch } from "react-redux";
import MainButton from "../../components/Buttons/MainButton/MainButton";
import { authSignInUser } from "../../redux/auth/authOperations";
import { formStyles } from "../RegistrationScreen/FormsStyle";


const initialState = {
  email: "",
  password: "",
};
const initialFocuseState = {
  email: false,
  password: false,
};



const LoginScreen = ({navigation}) => {

	const dispatch = useDispatch();

	// console.log(navigation);
const [error, setError] = useState('');
const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [value, setValue] = useState(initialState);
  const [focuse, setFocuse] = useState(initialFocuseState);
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [dimensions, setDimensions] = useState(Dimensions.get('window').width - 20 * 2);

//   useEffect(() => {
// 	const onChange = () => {
// 	  const width = Dimensions.get('window').width - 20 * 2;
// 	//   console.log('width', width)
// 	  setDimensions(width);
// 	};
// 	Dimensions.addEventListener('change', onChange);
// 	return () => {
// 	  Dimensions.removeEventListener('change', onChange);
// 	}
//   }, [])


    //---------------Validation----------------//
	 const isValidObject = (obj) => {
		return Object.values(obj).every(value => value.trim())
	  }

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
	  const isValidForm = () => {
		if(!isValidObject(value)) 
		return updateError('Required all fields!', setError)
		if(!isValidateEmail(value.email)) return updateError('Invalid email!', setError)
		if(!value.password.trim() || value.password.length < 6) 
		return updateError('Password must have 6 or more digits', setError)
		return true;
	  }
	
	  //----------------------validation---------------------------//


  const handleRegistr = () => {
	navigation.navigate('Register');
  }

  const showHandlePassword = () => {
	setIsShowPassword(prevState => !prevState);
  }

  const hideKeyboard = () => {
	if(isValidForm()) {
		setIsShowKeyboard(false);
		// navigation.navigate('Home');
		Keyboard.dismiss();
		// console.log(value);
		dispatch(authSignInUser(value))
		setValue(initialState);
	}
  }

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
}
  

  return (
	<TouchableWithoutFeedback onPress={hideTouchble}>
<ImageBackground style={formStyles.imageBg} source={require("../../img/bg/PhotoBG.jpg")} resizeMode="cover">
    <KeyboardAvoidingView
      style={{ width: "100%" }}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === 'android' ? 400 : 0}
		
    >
      <View
        style={{
          ...formStyles.registration,
          marginBottom: isShowKeyboard ? -240 : 0, 
			 paddingTop: 32, 
			 paddingBottom: 144,
			//  width: dimensions,

        }}
      >
        <Text style={formStyles.formTitle}>Войти</Text>
        <View style={{ marginBottom: 16, width: "100%"}}>
		  {error ? <Text style={{position:'absolute', top: -25, color: 'red', fontSize: 14, textAlign: 'center', paddingBottom: 10}}>{error}</Text> : null}
          <TextInput
            value={value.email}
            style={{
              ...formStyles.input,
              borderColor: focuse.email ? "#FF6C00" : "#E8E8E8",
            }}
				onChangeText={(value) => setValue(prevState => ({...prevState, email: value}))}
            placeholder="Адрес электронной почты"
            onFocus={() => onFocuseHandle("email")}
             onEndEditing={() => onBlureHandle("email")}
          />
        </View>
        <View style={{ marginBottom: 43, position: "relative", width: "100%" }}>
          <TextInput
            style={{
              ...formStyles.input,
              borderColor: focuse.password ? "#FF6C00" : "#E8E8E8",
            }}
				secureTextEntry={isShowPassword}
				onChangeText={(value) => setValue(prevState => ({...prevState, password: value}))}
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
				<Text style={{color: '#1B4371', fontSize: 16}}>{isShowPassword ? 'Показать' : 'Не показывать'}</Text>
			 </TouchableOpacity>
        </View>
   
				<View style={{width: '100%'}}>
		<MainButton onPress={hideKeyboard} activeOpacity={0.8}  title='Войти' style={20}/>
				</View>
        <TouchableOpacity
		  activeOpacity={0.6}
		  onPress={handleRegistr}
		  >
		
          <Text style={formStyles.formLink}>Нет аккаунта? Зарегистрироваться</Text>
        </TouchableOpacity>
      </View>
  </KeyboardAvoidingView>
  </ImageBackground>
  </TouchableWithoutFeedback>
  );
};

export default LoginScreen;