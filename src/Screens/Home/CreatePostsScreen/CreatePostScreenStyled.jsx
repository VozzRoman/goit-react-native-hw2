import { StyleSheet } from "react-native";
import { transparent } from "react-native";


export const createPostScreenStyle = StyleSheet.create({
		container: {
				flex: 1,
				justifyContent: 'flex-end',
				paddingVertical: 30,
				paddingHorizontal: 16,
				backgroundColor: '#fff',
			
		},
		imageBox: {
			justifyContent: 'center',
			alignItems: 'center',
			width: "100%",
			height: 240,
			backgroundColor: '#F6F6F6',
			borderWidth: 1,
			borderColor: '#E8E8E8',
			borderRadius: 8,
			marginBottom: 8,
			
		},
		loadBth: {
			color: '#BDBDBD',
			fontSize: 16,
			marginBottom: 32,

		},
		labelInput:{
			width: "100%",
			height: 50,
			marginBottom: 16,
			backgroundColor: "#fff",
		},
		input: {
			backgroundColor: "#fff",
		},
		formButton: {
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: 100,
			height: 51,
			backgroundColor: '#F6F6F6',
			marginBottom: 70,
			marginTop: 16,
			
		
		},
		buttonTitle: {
			fontSize: 16,
			color: '#BDBDBD',
			fontFamily: 'RobotRegular',
			
		},
		tabBth: {
			width: 70,
			height: 40,
			borderRadius: 20,
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: '#F6F6F6',
		},
		
		iconLocation: {
			position: 'absolute',
			top: 10,
			
		
		}

})