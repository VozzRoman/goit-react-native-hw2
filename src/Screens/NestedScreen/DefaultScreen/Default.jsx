import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

import ProfileAvatar from '../../../components/ProfileAvatar/ProfileAvatar';
import { FlatList } from 'react-native-gesture-handler';


const DefaultScreen = ({route, navigation}) => {
	const [posts, setPosts] = useState([]);

	

	useEffect(() => {
		if(route.params){
			setPosts((prevState) => [prevState, ...route.params])
		}
		
		console.log('posts', route.params);
	}, [route.params]);

	

	// const handleSignOut = () => {
	// 	navigation.navigate("Login");
	// }

  return (
	 <View style={postScreenStyle.container}>
		<ProfileAvatar name='Natali Romanova' mail='email@example.com'/>
			<View>
				<FlatList data={posts} keyExtractor={(item, index) => index.toString()} renderItem={({item}) => (
					<View style={{alignItems: 'center'}}>
						<Image source={{uri: item.photo}} style={{width: '100%', height: 240, marginBottom: 5, borderRadius: 8}}/>
						<View style={{width: "100%"}}>
							{posts.map((el, index) => {
								console.log(el)
								return(
									<View key={index}>
									<Text style={postScreenStyle.pictureName}>{el.value.name}</Text>
									<View style={postScreenStyle.posInfoBox}>
									<TouchableOpacity style={{flexDirection: 'row'}} activeOpacity={0.7} onPress={() => navigation.navigate('CommentScreen')}>
									<Feather style={postScreenStyle.iconMessage} name="message-circle" size={24} color="black" />
									<Text>0</Text>
									</TouchableOpacity>
									<TouchableOpacity style={{flexDirection: 'row', alignItems:'center'}} onPress={() => navigation.navigate('MapScreen')}>
									<SimpleLineIcons name="location-pin" size={24} color="#BDBDBD" />
									<Text style={postScreenStyle.locationTitle}>{el.value.place}</Text>
									</TouchableOpacity>
									
									</View>
									</View>
								)
							})}
				
						</View>
					</View>
		
		)}/>
	

		</View>
	
	 </View>
  )
}

export default DefaultScreen;