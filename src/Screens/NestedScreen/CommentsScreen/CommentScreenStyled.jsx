import { StyleSheet } from "react-native";

export const commentsStyle = StyleSheet.create({
	container: {
		flex: 1,
		// alignItems: 'center',
		justifyContent: 'flex-end',
		paddingHorizontal: 20,
		backgroundColor: '#ffff',
	
	},
	input: {
		paddingHorizontal: 10,
		// backgroundColor: 'transparent',

		
		
	},
	label: {
		position: 'relative',
		width: "100%",
		 borderColor: "#E8E8E8",
		 backgroundColor: '#F6F6F6',
		  borderWidth: 1,
		  borderRadius: 40,
		 
		  paddingLeft: 20,
		  paddingRight: 50,
		  justifyContent: 'center',
		  textAlign: 'left',
		//   marginVertical: 16,
		marginTop: 16,
		
		  paddingVertical: 10,
		
		  
	},
	meaasageFrame: {
		width: 343,
		marginTop: 20,
		
	},
	textFrame: {
		backgroundColor: '#F6F6F6',
		width: 280,
		paddingHorizontal: 16,
		paddingVertical: 16,
		borderRadius: 6,
	},
	avator: {
		
		marginHorizontal: 16,
		width: 28,
		height: 28,
		borderRadius: 50,
		backgroundColor: 'gray',
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
	},
	textComment: {
		color: "#212121",
		fontSize: 13,
		lineHeight: 18,
		
		
	},
	timeMessage: {
		textAlign: 'right',
		color: '#BDBDBD',
		fontSize: 10,
	},
	sendBth: {
		position: 'absolute',
		top: 4,
		right: 5,
		width: 34,
		height: 34,
		borderRadius: 50,
		backgroundColor: "#FF6C00",
		alignItems: 'center',
		justifyContent: 'center',

	}
	
})	