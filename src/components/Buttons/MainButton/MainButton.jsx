import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';


const MainButton = ({onPress, activeOpacity, dimension, style, title}) => {
  return (
	<TouchableOpacity
	style={{...styles.formButton, width: dimension, marginBottom: style}}
	activeOpacity={activeOpacity}
	onPress={onPress}
 >
	<Text style={styles.buttonTitle}>{title}</Text>
 </TouchableOpacity>
  )
}

export default MainButton;

const styles = StyleSheet.create({
	buttonTitle: {
		fontSize: 16,
		color: '#fff',
		fontFamily: 'RobotRegular',
	},
	formButton: {
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 100,
		height: 51,
		backgroundColor: '#FF6C00',
		
	},

})


