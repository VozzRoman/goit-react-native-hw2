import { StyleSheet } from "react-native";

export const formStyles = StyleSheet.create({
	registration: {
		position: 'relative',
		width: '100%',
		backgroundColor: "white",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		paddingTop: 92,
		paddingBottom: 78,
		paddingHorizontal: 16
	
	},
	formTitle: {
		textAlign: 'center',
		fontSize: 30,
		fontWeight: 500,
		marginBottom: 32,
		fontFamily:"RobotMedium",
		
	}, 
	input: {
		width: "100%",
		borderWidth: 1,
		borderColor: '#E8E8E8',
		height: 50,
		paddingLeft: 16,
		backgroundColor: '#f4f4f4',
		borderRadius: 8,
		fontFamily: 'RobotRegular',
		color: '#212121',
	},
	formButton: {
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 100,
		height: 51,
		backgroundColor: '#FF6C00',
		marginBottom: 16,
	
	},
	buttonTitle: {
		fontSize: 16,
		color: '#fff',
		fontFamily: 'RobotRegular',
	},
	formLink: {
		textAlign: 'center',
		fontSize: 16,
		color: '#1B4371',
		fontFamily: 'RobotRegular'
	},
	showBth: {
		position: "absolute",
		top: 15,
		right: 15,
		
	}
})