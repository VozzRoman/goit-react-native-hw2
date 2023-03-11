import React, { useRef, useState } from "react";
import { Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { formStyles } from "./FormsStyle";

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

const RegistrationScreen = () => {
const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [value, setValue] = useState(initialState);
  const [focuse, setFocuse] = useState(initialFocuseState);

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
	style={{width: "100%"}}
	behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
	keyboardVerticalOffset={0}

	>
    <View style={{...formStyles.registration, paddingBottom: isShowKeyboard ? 32 : 78}}>
      <Text style={formStyles.formTitle}>Регистрация</Text>
      <View style={{ marginBottom: 16 }}>
        <TextInput
          style={{
            ...formStyles.input,
            borderColor: focuse.login ? "#FF6C00" : "#E8E8E8",
          }}
          placeholder="Логин"
          value={value.login}
          onFocus={() => onFocuseHandle("login")}
         //  onBlur={() => onBlureHandle("login")}
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
          placeholder="Адрес электронной почты"
          onFocus={() => onFocuseHandle("email")}
         //  onBlur={() => onBlureHandle("email")}
			 onEndEditing={() => onBlureHandle("email")}
        />
      </View>
      <View style={{ marginBottom: 43 }}>
        <TextInput
          style={{
            ...formStyles.input,
            borderColor: focuse.password ? "#FF6C00" : "#E8E8E8",
          }}
          placeholder="Пароль"
          value={value.password}
          onFocus={() => onFocuseHandle("password")}
         //  onBlur={() => onBlureHandle("password")}
			 onEndEditing={() => onBlureHandle("password")}
        />
      </View>
      <TouchableOpacity style={formStyles.formButton} activeOpacity={0.8}>
        <Text style={formStyles.buttonTitle}>Зарегистрироваться</Text>
      </TouchableOpacity>
      <View>
        <Text style={formStyles.formLink}>Уже есть аккаунт? Войти</Text>
      </View>
    </View>
	  </KeyboardAvoidingView>
  );
};

export default RegistrationScreen;
