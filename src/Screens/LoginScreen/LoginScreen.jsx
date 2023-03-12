import React, { useRef, useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { formStyles } from "../RegistrationScreen/FormsStyle";
// import { useHeaderHeight } from '@react-navigation/elements';

const initialState = {
  email: "",
  password: "",
};
const initialFocuseState = {
  email: false,
  password: false,
};


const LoginScreen = ({isShowKeyboard, setIsShowKeyboard}) => {
	
  const [value, setValue] = useState(initialState);
  const [focuse, setFocuse] = useState(initialFocuseState);
  const [isShowPassword, setIsShowPassword] = useState(true);

  const handleRegistr = () => {
	console.log('navigate to log');
  }

  const showHandlePassword = () => {
	setIsShowPassword(prevState => !prevState);
  }

  const hideKeyboard = () => {
		setIsShowKeyboard(false);
		Keyboard.dismiss();
		console.log(value);
		setValue(initialState);
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

  return (

    <KeyboardAvoidingView
      style={{ width: "100%" }}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={400}
		
    >
      <View
        style={{
          ...formStyles.registration,
          marginBottom: isShowKeyboard ? -260 : 0, paddingTop: 32, paddingBottom: 144,
        }}
      >
        <Text style={formStyles.formTitle}>Войти</Text>
        <View style={{ marginBottom: 16 }}>
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
        <View style={{ marginBottom: 43, position: "relative" }}>
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
        <TouchableOpacity
          style={formStyles.formButton}
          activeOpacity={0.8}
          onPress={hideKeyboard}
        >
          <Text style={formStyles.buttonTitle}>Войти</Text>
        </TouchableOpacity>
        <TouchableOpacity
		  activeOpacity={0.6}
		  onPress={handleRegistr}
		  >
		
          <Text style={formStyles.formLink}>Нет аккаунта? Зарегистрироваться</Text>
        </TouchableOpacity>
      </View>
  </KeyboardAvoidingView>
  );
};

export default LoginScreen;