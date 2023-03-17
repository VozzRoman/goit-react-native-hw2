import React from 'react'
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
const BackBth = ({onPress}) => {

  return (
	 <TouchableOpacity onPress={onPress}>
		<AntDesign style={{marginLeft: 10}} name="arrowleft" size={24} color="#BDBDBD" />
	 </TouchableOpacity>
  )
}

export default BackBth;