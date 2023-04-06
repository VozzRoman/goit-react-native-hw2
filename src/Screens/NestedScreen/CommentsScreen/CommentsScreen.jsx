import React, { useEffect, useRef, useState } from 'react'
import { View, TextInput, Text,  TouchableOpacity, Image, Keyboard, KeyboardAvoidingView, SafeAreaView, Platform } from 'react-native';
import { commentsStyle } from './CommentScreenStyled';
import { FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
//fireBase----
import { addDoc, collection, getDocs, onSnapshot, serverTimestamp, updateDoc } from "firebase/firestore";
import { doc, getFirestore} from "firebase/firestore";
import db from '../../../firebase/config';
import { getAuth } from "firebase/auth";
const auth = getAuth(db)

import { useDispatch, useSelector } from 'react-redux';
import { KeyboardAwareFlatList, KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { userSelector } from '../../../redux/auth/authSlice';
import BackBth from '../../../components/Buttons/Back/BackBth';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { async } from '@firebase/util';






const fierStore = getFirestore(db);

const CommentsScreen = ({route, navigation}) => {
	const [comment, setComments] = useState([]);
	const [getAllpost, setGetAllpost] = useState([]);
	const [isShowKeyboard, setIsShowKeyboard] = useState(false);
	// const [position, setPosition] = useState(false);
	const {login} = useSelector(userSelector);
	console.log('Comments',getAllpost);
	const addCount = getAllpost.length + 1
	const counts = addCount.toString();



	
	// const countRef = useRef();
	// console.log('countRef',countRef.current.counts = getAllpost.length);
	// console.log('counts',counts);

	// console.log('reduxStateData=====>', login );
	// console.log('ROUTE====>',route.params)
	// console.log('Route', route.params.image);
	const {postId, image} = route.params
	// console.log('getAllpost=====>',getAllpost);


	


	 const createComment = async () => {
		messageBoxArrnage(login);
		setIsShowKeyboard(false);
		Keyboard.dismiss();
	const parenDocref = doc(fierStore, 'posts', `${postId}`);
	// await updateDoc(parenDocref, {
	// 	comment,
		
	// })
	const subCollection = collection(parenDocref, 'comments');
	await addDoc(subCollection, {
		comment,
		login,
	
		
		
		// createComment: serverTimestamp(),

	})

	//нужно обновить обьект для получения комментов в документе
	const upDate = await updateDoc(parenDocref, {
		comment,
		counts,
		login,
	
		
	})
	console.log('upDate',upDate);
	// getAllposts();
	this.textInput.clear()
		
	}
	const getAllposts = async () => {
		 const querySnapshot = await onSnapshot((collection(fierStore, 'posts', `${postId}`, 'comments')), (onsnapshot) => {
			setGetAllpost(
				onsnapshot.docs.map((doc) => {
					// console.log('DOC.ID', doc.id);
					return {
						...doc.data(),
						id: doc.id,
					  
					  
					};
				 })
			)
		 });
		console.log('DOC-GET', querySnapshot);
		// setGetAllpost(
		// 	querySnapshot.docs.map((doc) => {
		// 		// console.log('DOC.ID', doc.id);
		// 		return {
		// 			...doc.data(),
		// 			id: doc.id,
				  
				  
		// 		};
		// 	 })
		// )

	}

	useEffect(()=> {
		getAllposts();
		

	},[]);

	const spliceDel = (value) => {
		return value.slice(0, 1).toUpperCase()
	}

	//---------ДАТА сообщения
	let date = new Date();
date.getDate()  + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
const fullYear = date.toString().slice(4,22);
console.log(fullYear);


// const messageBoxArrnage = (login) => {
// 	console.log("LOGIN--->", login)
// 		getAllpost.find(item => {
// 			if(item.login === login){
// 				console.log(item.login === login)
// 				return setPosition(true);
// 			} else {
// 				return setPosition(false);
// 			}
// 		})
	
	
// }




  return (

	<View  style={commentsStyle.container}>
	
		<KeyboardAvoidingView
		  style={{ width: "100%" }}
		  behavior={Platform.OS == "ios" ? "padding" : "height"}
		  keyboardVerticalOffset={Platform.OS === 'android' ? 0 : 0}

		>
	<TouchableOpacity onPress={()=> navigation.navigate("DeafultScreen", {
		data: counts,
		
	})}>
	</TouchableOpacity>
	{/* <BackBth /> */}
	
	<Image source={{uri: image}} style={{
                    width: "100%",
                    height: 240,
                    marginBottom: 5,
                    borderRadius: 8,
						  marginTop: 20,
						  
                  }}/>
	<FlatList
	style={{height: 320 }}
	inverted={true}
	  data={getAllpost}
	  renderItem={({item, index}) => (
		
		<View style={{...commentsStyle.meaasageFrame, flexDirection: item.login === login ? 'row-reverse' : 'row',}} key={index}>
			<View style={commentsStyle.avator}>
				<Text style={{color: 'white'}}>{spliceDel(item.login)}</Text>
				 <Image style={{position: 'absolute', width: 28, height: 28}} source={{uri: item.avattorPic}}/> 
			 </View>
			<View style={commentsStyle.textFrame}>
				
				<Text style={commentsStyle.textComment}>{item.comment}</Text>
				<Text style={commentsStyle.timeMessage}>{fullYear}</Text>
			
			</View>
		</View>
	  )}
	  keyExtractor={item => item.id}
	/>  
	

	
	 <View style={{...commentsStyle.label,
	 ...Platform.select({
		ios: {
			marginBottom: isShowKeyboard ? 80 : 20
		},
		android: {
			marginBottom: isShowKeyboard ? 20 : 20
		}
	 }) 
		}}>
		<TextInput
		onFocus={() => setIsShowKeyboard(true)}
		onBlur={() => setIsShowKeyboard(false)}
		multiline={true} ref={input => { this.textInput = input }} style={{alignItems: 'flex-start'}} placeholderTextColor={'#BDBDBD'} placeholder={'Комментировать...'} onChangeText={setComments}/>
		<TouchableOpacity style={{...commentsStyle.sendBth,
		...Platform.select({
			ios: {
				top: 4,
				right: 5,
			},
			android: {
				top: 7,
				right: 7,
			}
		})
		}} onPress={createComment}>
		<AntDesign name="arrowup" size={19} color="#fff" />
	 	</TouchableOpacity>
		
	 </View>
	 </KeyboardAvoidingView>
	
	 </View>
	
  )
}

export default CommentsScreen;
