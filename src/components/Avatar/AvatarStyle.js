import { StyleSheet } from "react-native";

export const avatarStyle = StyleSheet.create({
	avatarBox: {
		position: 'absolute',
		top: -60,
		left: "50%",
		width: 120,
		height: 120,
		borderColor: 'black',
		borderRadius: 16,
		transform: [
			{translateX: -50}
		]
	},
	bthPlus: {
		
		color: '#FF6C00',
	},
	addBth: {
		position: 'absolute',
		right: -10,
		top: 80,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: 25,
		height: 25,
		padding: 10,
		backgroundColor: 'red',
		borderRadius: 50,
		borderWidth: 1,
		borderColor: '#FF6C00',
		backgroundColor: '#fff',
		

	}
})