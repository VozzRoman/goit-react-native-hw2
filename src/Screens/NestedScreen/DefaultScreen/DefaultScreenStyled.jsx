import { StyleSheet } from "react-native";


export const postScreenStyle = StyleSheet.create({
		container: {
				flex: 1,
				marginHorizontal: 20,
				
				// alignItems: 'center',
		},
		// header: {
		// 	position: 'relative',
		// 	width: '100%',
		// 	display: 'flex',
		// 	alignItems: 'center',
		// 	justifyContent: 'center',
		// 	height: 44,
		// 	backgroundColor: '#fff',
		// },
		//  title: {
		// 	fontSize: 17,
		// 	fontFamily: 'RobotMedium',
		//  },
		//  logOut: {
		// 	position: 'absolute',
		// 	top: 10,
		// 	right: 10,
		//  },
		 pictureName: {
			color: '#212121',
			fontFamily: 'RobotMedium',
			fontSize: 16,
			textAlign: 'left',
			marginBottom: 8,
		
		 },
		 posInfoBox: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
			marginBottom: 32,
		 },
		 iconMessage: {
			marginRight: 5,
			transform: [
				{rotate: "260deg"}
			]
		 },
		 locationTitle: {
			color: '#212121',
			fontFamily: 'RobotMedium',
			fontSize: 16,
			textDecorationLine: 'underline',
			marginLeft: 5,

		 }
})