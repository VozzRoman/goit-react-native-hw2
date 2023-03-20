
// import React, { useEffect, useState } from 'react'
// import { View, Text,TouchableOpacity, Image } from 'react-native'
// import { postScreenStyle,  } from './PostScreenStyled';
// import { Feather } from '@expo/vector-icons'; 
// import ProfileScreen from '../ProfileScreen/ProfileScreen';
// import ProfileAvatar from '../../../components/ProfileAvatar/ProfileAvatar';
// import { FlatList } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignOutBth from "../../../components/Buttons/SignOutBth/SignOutBth";
import CommentsScreen from "../../NestedScreen/CommentsScreen/CommentsScreen";
import DefaultScreen from "../../NestedScreen/DefaultScreen/DefaultScreen";
import MapScreen from "../../NestedScreen/MapScreen/MapsScreen";
import { MainTab } from "../HomeMain/HomeMain";
import { postScreenStyle } from "./PostScreenStyled";

const NestedScreen = createNativeStackNavigator();

const PostScreen = ({navigation}) => {



return (
	
	<NestedScreen.Navigator>
		<NestedScreen.Screen options={{
			...postScreenStyle.headersStyle,
			headerTitle: "Публикации",
			headerRight: () => (
            <SignOutBth onPress={() => navigation.navigate("Login")} />
          ),
		}} 
			name="DeafultScreen" 
			component={DefaultScreen}/>
		<NestedScreen.Screen options={{
			...postScreenStyle.headersStyle,
			headerTitle: "Комментарии",
		}} name="CommentScreen" component={CommentsScreen}/>
		<NestedScreen.Screen options={{
			...postScreenStyle.headersStyle,
			headerTitle: "Карта",
		}} name="MapScreen" component={MapScreen}/>
	</NestedScreen.Navigator>
	
)

	// const [posts, setPosts] = useState([]);

	// useEffect(() => {
	// 	if(route.params){
	// 		setPosts((prevState) => [...prevState, route.params])
	// 	}
		
	// }, [route.params]);

	// console.log('posts', posts);



//   return (
	//  <View style={postScreenStyle.container}>
	// 	<ProfileAvatar name='Natali Romanova' mail='email@example.com'/>
	// 	<View>
	// 	<FlatList data={posts} keyExtractor={(item, index) => index.toString()} renderItem={({item}) => (
	// 		<View style={{alignItems: 'center'}}>
	// 			<Image source={{uri: item.photo}} style={{width: '100%', height: 240, marginBottom: 20, borderRadius: 8}}/>
	// 		</View>
		
	// 	)}/>

	// 	</View>
	// 	<TouchableOpacity>
	// 		<Text>Кометнтарии</Text>
	// 	</TouchableOpacity>
	// 	<TouchableOpacity>
	// 		<Text>Карта</Text>
	// 	</TouchableOpacity>
	//  </View>
//   )
}

export default PostScreen;
