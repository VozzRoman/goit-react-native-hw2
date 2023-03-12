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

	addBth: {
		position: 'absolute',
		right: -12.5,
		top: 80,
		alignItems:'center',
		justifyContent: 'center',
		width:25,
		height:25,
		borderRadius: 50,
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: '#E8E8E8',
	},

})