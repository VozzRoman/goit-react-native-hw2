import { StyleSheet } from "react-native";


export const postScreenStyle = StyleSheet.create({
		container: {
				flex: 1,
				justifyContent: 'flex-start',
				// alignItems: 'center',
		},
		header: {
			position: 'relative',
			width: '100%',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			height: 44,
			backgroundColor: '#fff',
		},
		 title: {
			fontSize: 17,
			fontFamily: 'RobotMedium',
		 },
		 logOut: {
			position: 'absolute',
			top: 10,
			right: 10,
		 }
})
