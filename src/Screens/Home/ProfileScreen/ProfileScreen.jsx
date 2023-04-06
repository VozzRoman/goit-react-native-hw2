import React, { useEffect, useState } from 'react'
import { profileScreenStyle } from './ProfileScreenStyled';
import { formStyles } from "../../RegistrationScreen/FormsStyle";
import {postScreenStyle} from "../../NestedScreen/DefaultScreen/DefaultScreenStyled";
import { Avatar } from "../../../components/Avatar/Avatar";
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";


import {
	Text,
	View,
	ImageBackground,
	Image,
	TouchableOpacity,
 } from "react-native";
import SignOutBth from '../../../components/Buttons/SignOutBth/SignOutBth';
import { useDispatch, useSelector } from 'react-redux';
import { authSignUpUser, singOutUser } from '../../../redux/auth/authOperations';
import * as ImagePicker from 'expo-image-picker';


//faireBase
import { uuidv4 } from '@firebase/util';
import { ref, uploadBytes, getDownloadURL} from "firebase/storage";
import { getStorage } from 'firebase/storage';
import db from '../../../firebase/config';
import { getAuth, updateProfile } from 'firebase/auth';
import { collection, getDocs, getFirestore, onSnapshot, query, updateDoc, where } from 'firebase/firestore';
const auth = getAuth(db);

console.log('AUTH----->',auth.currentUser);


import { FlatList } from 'react-native-gesture-handler';
import { updateUserProfile } from '../../../redux/auth/authSlice';

const storage = getStorage(db);
const fireStore = getFirestore(db);

const ProfileScreen = ({route, navigation}) => {
	const [result, setResult] = useState('');
	const [usePOsts, setUserPosts] = useState([]);

	const [image, setImage] = useState(null);
	
	// console.log('AVAVAVA===>',avator);





	console.log('Likes-Route',route)
	console.log('userPosts',usePOsts);
const dispatch = useDispatch();
	const userData = useSelector(state => state);
	// const avaText = userData.auth.login
	// const avaLetter = avaText.slice(0,1).toUpperCase()
	const avaFunc = (value) => {
		if(!value){
			return
		} else {
			const avaText = value
			return avaLetter = avaText.slice(0,1).toUpperCase()

		}	
	}

	const userAvatar = userData.auth.avatarImage;
	//---------------------------------------------AVATOR

	const framePhoto = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
		  mediaTypes: ImagePicker.MediaTypeOptions.All,
		  allowsEditing: true,
		  aspect: [4, 3],
		  quality: 1,
		});
	
		console.log(result);
	
		if (!result.canceled) {
		  setImage(result.assets[0].uri);
		}
		const response = await fetch(image); //бере фото из стейта
		console.log(response);
		const file = await response.blob(); // формат для сервера
	  const avaImageId = uuidv4();
	  console.log('FILE====>', file);
	  console.log('AVAIMAGE=====>', avaImageId);
	  const avator = await ref(storage, `avator/${avaImageId}`);
	  console.log(avator);
	  const sendPic = await uploadBytes(avator, file); // загрузка
	  console.log(sendPic);
	
	  const pathAvaReference = await getDownloadURL(
		  ref(storage, `avator/${avaImageId}`)
		);
		console.log('AVA-REFF====>', pathAvaReference);
		// setAvator(pathAvaReference);
		 const user =  await auth.currentUser;
		 await updateProfile(user, {
			photoURL: pathAvaReference,
			// displayName: userData.auth.login,
	
		 }) 

		
		 const {photoURL} = await auth.currentUser;
		 console.log(photoURL);
		 dispatch(updateUserProfile({
			login: user.displayName,
			avatarImage: image,
			userEail: user.email,
			userId: user.uid,
	
		 }));
		
	
	
	}
	//----------------------------------------------







	const getUserPost = async () => {
		const data = await collection(fireStore, 'posts');
		

		const q = query(data, where('idUser', '==', userData.auth.userId));
		console.log('ProfileData===>',data);
		const querySnapshot = await onSnapshot((q), (snapshot) => {
			setUserPosts(
				snapshot.docs.map((doc) => {
					console.log(doc.id, '=>', doc.data())
					return {
						id: doc.id,
						...doc.data(),
					}
				})
			)
		});
		console.log(querySnapshot);
		// setUserPosts(
		// 	querySnapshot.docs.map((doc) => {
		// 		console.log(doc.id, '=>', doc.data())
		// 		return {
		// 			...doc.data(),
		// 		}
		// 	})
		// )
	

	}




	

	useEffect(()=> {
		getUserPost();
		(async () =>{
			if (Platform.OS !== "web") {
				const {
				  status,
				} = await ImagePicker.requestMediaLibraryPermissionsAsync();
				if (status !== "granted") {
				  alert("Sorry, we need camera roll permissions to make this work!");
				}
			 }})();
	

	}, [])

	const handleSingOut = async() => {
		await dispatch(singOutUser());
	}





  return (
	
	<ImageBackground
	  style={formStyles.imageBg}
	  source={require("../../../img/bg/PhotoBG.jpg")}
	  resizeMode="cover"
	>

		 <View
			style={profileScreenStyle.container}
		 >
			<Text style={formStyles.formTitle}>{userData.auth.login}</Text>
			<Avatar title={!userAvatar ? avaFunc(userData.auth.login) : null} onPress={framePhoto} source={userAvatar}/>
			{/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
			<View style={profileScreenStyle.signOutButton}>
			<SignOutBth onPress={handleSingOut}/>
			</View>
			<FlatList
			data={usePOsts}
			keyExtractor={(item, index) => index.toString()}
			renderItem={({item, index}) => (
				<View style={{ alignItems: "center" }}>
				<Image
				source={{ uri: item.photo }}
				style={{
				  width: "100%",
				  height: 240,
				  marginBottom: 5,
				  borderRadius: 8,
				}}
			 />
			 <View style={{ width: "100%" }}>
			 <View key={index}>
			 <Text style={postScreenStyle.pictureName}>{item.name}</Text>
			 <View style={postScreenStyle.posInfoBox}>
			 <View style={{flexDirection:'row', alignItems: 'center'}}>
                      <TouchableOpacity
                        style={{ flexDirection: "row", marginRight: 24  }}
                        activeOpacity={0.7}
                        onPress={() =>
                          navigation.navigate("CommentScreen", {
                            postId: item.id,
									 image: item.photo,
									
                          })
                        }
                      >
                        <Feather
                          style={{...postScreenStyle.iconMessage, color: !item.counts ? "#BDBDBD" : '#FF6C00'}}
                          name="message-circle"
                          size={24}
								  
                          
                        />
                        {<Text style={{ color: !item.counts ? "#BDBDBD" : '#212121', fontSize: 16}}>{!item.counts ? '0' : item.counts}</Text>}
                      </TouchableOpacity>
							 <TouchableOpacity
                        style={{ flexDirection: "row" }}
                        activeOpacity={0.7}
								
                       
                      >
                   <AntDesign name="like2" size={22} color="#BDBDBD" style={{marginRight: 5, marginBottom: 2, color: !item.likes ? "#BDBDBD" :  '#FF6C00'}} />
                        <Text style={{ color: !item.likes ? "#BDBDBD" :  '#212121' , fontSize: 16}}>{item.likes}</Text>
                      </TouchableOpacity>
			</View>
                      <TouchableOpacity
                        style={{ flexDirection: "row", alignItems: "center" }}
                        onPress={() =>
                          navigation.navigate("MapScreen", {
                            location: item.location,
                          })
                        }
                      >
                        <SimpleLineIcons
                          name="location-pin"
                          size={24}
                          color="#BDBDBD"
                        />
                        <Text style={postScreenStyle.locationTitle}>
                          {item.place}
                        </Text>
                      </TouchableOpacity>
                    </View>

			 </View>


			 </View>
			
			</View>
			)}
			
			/>
	
			
		

		 </View>

	  
	</ImageBackground>
 
  )
}

export default ProfileScreen;
