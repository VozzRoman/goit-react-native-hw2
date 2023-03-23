import React, { useEffect, useState } from 'react'
import { View, Text,TouchableOpacity, Image } from 'react-native'
import { postScreenStyle } from './DefaultScreenStyled';
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

import ProfileAvatar from '../../../components/ProfileAvatar/ProfileAvatar';
import { FlatList } from 'react-native-gesture-handler';


const DefaultScreen = ({route, navigation}) => {
	const [posts, setPosts] = useState([]);

	
	// console.log(route.params);

	useEffect(() => {
		if(route.params){
			setPosts((prevState) => [route.params, ...prevState])
		}

		// console.log('posts', posts);
	}, [route.params]);

	const locationData = (name) => {
		return posts.find((item) => {
			if(item.value.name === name){
				console.log(item.value.name);
				return item.isLocation;
			}
		});
	}



  return (
	 <View style={postScreenStyle.container}>
		<ProfileAvatar name='Natali Romanova' mail='email@example.com'/>
		{posts && <View>
		<FlatList data={posts} keyExtractor={(item, index) => index.toString()} renderItem={({item, index}) => (
			<View style={{alignItems: 'center'}}>
				<Image source={{uri: item.photo}} style={{width: '100%', height: 240, marginBottom: 5, borderRadius: 8}}/>
				<View style={{width: "100%"}}>
							
									<View key={index}>
									<Text style={postScreenStyle.pictureName}>{item.value.name}</Text>
									<View style={postScreenStyle.posInfoBox}>
									<TouchableOpacity style={{flexDirection: 'row'}} activeOpacity={0.7} onPress={() => navigation.navigate('CommentScreen')}>
									<Feather style={postScreenStyle.iconMessage} name="message-circle" size={24} color="#BDBDBD" />
									<Text style={{color: "#BDBDBD"}}>0</Text>
									</TouchableOpacity>
									<TouchableOpacity style={{flexDirection: 'row', alignItems:'center'}} onPress={() => navigation.navigate('MapScreen', locationData(item.value.name))}>
									<SimpleLineIcons name="location-pin" size={24} color="#BDBDBD" />
									<Text style={postScreenStyle.locationTitle}>{item.value.place}</Text>
									</TouchableOpacity>
									
									</View>
									</View>
						
				
						</View>
			</View>
		


		)}/>

	

		</View>}
	
	 </View>
  )
}

export default DefaultScreen;