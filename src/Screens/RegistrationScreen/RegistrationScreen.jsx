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
import { useDispatch } from "react-redux";
import { authSignUpUser} from "../../redux/auth/authOperations";
import { Avatar } from "../../components/Avatar/Avatar";
import { formStyles } from "./FormsStyle";
import MainButton from "../../components/Buttons/MainButton/MainButton";
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

	

	const dispatch = useDispatch();
	
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [value, setValue] = useState(initialState);
  const [focuse, setFocuse] = useState(initialFocuseState);
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 20 * 2
  );
  const handleLogIn = () => {
    navigation.navigate("Login");
  };



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

  const showHandlePassword = () => {
    setIsShowPassword((prevState) => !prevState);
  };

  const hideKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
   //  console.log(value);
    setValue(initialState);
	 dispatch(authSignUpUser(value));
	 navigation.navigate("Login");

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
            <Avatar />
            <View style={{ marginBottom: 16, width: "100%" }}>
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
