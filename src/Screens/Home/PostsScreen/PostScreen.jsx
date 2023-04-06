
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignOutBth from "../../../components/Buttons/SignOutBth/SignOutBth";
import DefaultScreen from "../../NestedScreen/DefaultScreen/DefaultScreen";
import MapScreen from "../../NestedScreen/MapScreen/MapsScreen";
import { postScreenStyle } from "./PostScreenStyled";
const NestedScreen = createNativeStackNavigator();
import { useDispatch} from "react-redux";

import { singOutUser } from "../../../redux/auth/authOperations";
const PostScreen = () => {
	
const dispatch = useDispatch()
	
	//  console.log('initialStatePostScreen', userSel);
	const handleSingOut = () => {
		dispatch(singOutUser());
	}
	
	 

return (
	
	<NestedScreen.Navigator>
		<NestedScreen.Screen options={{
			...postScreenStyle.headersStyle,
			headerTitle: "Публикации",
			headerShown: true,
			headerRight: () => (
            <SignOutBth onPress={handleSingOut} />
          ),
		}} 
			name="DeafultScreen" 
			component={DefaultScreen}/>
		
		{/* <NestedScreen.Screen options={{
			...postScreenStyle.headersStyle,
			headerTitle: "Комментарии",
		}} name="CommentScreen" component={CommentsScreen}/> */}
		
		<NestedScreen.Screen options={{
			...postScreenStyle.headersStyle,
			headerTitle: "Карта",
		}} name="MapScreen" component={MapScreen}/>
	</NestedScreen.Navigator>
	
)

}

export default PostScreen;
