import { StyleSheet } from "react-native";

export const stylesAvatar = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		
		marginVertical: 40,
	},
	userName: {
		color: '#212121',
		fontFamily: 'RobotoBold',
		fontSize: 13,
	},
	avaBox: {
		width: 70, 
		height: 70, 
		marginRight: 10, 
		backgroundColor: 'gray', 
		borderRadius: 6,
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
	}
}) 