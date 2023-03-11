import React, { useRef, useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { styles } from "../../../AppStyle";
import { Avatar } from "../../components/Avatar/Avatar";
import { formStyles } from "./FormsStyle";
// import { useHeaderHeight } from '@react-navigation/elements';

const initialState = {
  login: "",
  email: "",
  password: "",
};
const initialFocuseState = {
  login: false,
  email: false,
  password: false,
};


const RegistrationScreen = ({isShowKeyboard, setIsShowKeyboard}) => {
	
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
          marginBottom: isShowKeyboard ? -190 : 0,
        }}
      >
        <Text style={formStyles.formTitle}>Регистрация</Text>
		  <Avatar/>
        <View style={{ marginBottom: 16 }}>
          <TextInput
            style={{
              ...formStyles.input,
              borderColor: focuse.login ? "#FF6C00" : "#E8E8E8",
            }}
            placeholder="Логин"
            value={value.login}
				onChangeText={(value) => setValue(prevState => ({...prevState, login: value}))}
            onFocus={() => onFocuseHandle("login")}
             onEndEditing={() => onBlureHandle("login")}
				
          />
        </View>
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
          <Text style={formStyles.buttonTitle}>Зарегистрироваться</Text>
        </TouchableOpacity>
        <TouchableOpacity
		  activeOpacity={0.6}
		  onPress={handleRegistr}
		  >
		
          <Text style={formStyles.formLink}>Уже есть аккаунт? Войти</Text>
        </TouchableOpacity>
      </View>
  </KeyboardAvoidingView>
  );
};

export default RegistrationScreen;
