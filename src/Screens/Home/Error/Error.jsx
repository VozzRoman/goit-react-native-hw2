import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
const Error = () => {
  return (
	 <View style={style.container}>
		<Text>Please sigUp</Text>
	 </View>
  )
}

export default Error;

const style = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
})