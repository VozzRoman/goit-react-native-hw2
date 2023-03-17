import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons";
const SignOutBth = ({onPress}) => {

  return (
	 <TouchableOpacity onPress={onPress}>
		<Feather style={{marginRight: 10}} name="log-out" size={24} color="#BDBDBD" />
	 </TouchableOpacity>
  )
}

export default SignOutBth
