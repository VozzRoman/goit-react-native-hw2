import React, { useEffect, useRef } from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { createPostScreenStyle } from './CreatePostScreenStyled';
import { SimpleLineIcons } from '@expo/vector-icons';
import {Camera} from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';


const initialValue = {
	name: '',
	place: '',
}

const CreatePostScreen = ({navigation}) => {
	// const [hasCameraPermission, sethasCameraPermission] = useState(null);
	const [showKeyboard, setShowKeyboard] = useState(false);
	const [hasPermission, setHasPermission] = useState(null);
	const [isCameraReady, setIsCameraReady] = useState(false);
	const [type, setType] = useState(Camera.Constants.Type.back)
	// const [cameraReady, setCameraReady] = useState(false);
	const [camera, setCamera] = useState(null);
	const [photo, setPhoto] = useState(null);
	const [value, setValue] = useState(initialValue);
	const [activeBth, setActiveBth] = useState(false);
	const [isLocation, setIsLocation] = useState(null);

	useEffect(() => {
		(async () => {
		  const { status } = await Camera.requestCameraPermissionsAsync();
		await MediaLibrary.requestPermissionsAsync();
		  setHasPermission(status === "granted");
		})();
		(async () => {
      
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== 'granted') {
				console.log("Permission to access location was denied");
			} 
			
	 })();

	 }, []);

	 
	 

	 if (hasPermission === null) {
		return <View />;
	 }
	 if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	 }

	 const onCameraReady = () => {
		setIsCameraReady(true);
	 };
  

	// const camerRef = useRef(null);



	const handleTakePhoto = async () => {
			try{
				const snapPhoto = await camera.takePictureAsync();
				console.log( "myPhoto", snapPhoto.uri);
				const loaction = await Location.getCurrentPositionAsync();
				console.log('location', loaction);
				setPhoto(snapPhoto.uri);
				setIsLocation(loaction);
				setActiveBth(true);
				
			} catch(e){
				console.log(e);
	}
}

	
  const handleDeletePhost = () => {
	setPhoto(null);
	setActiveBth(false);
  }

  const handleTypeCamera = () => {
	setType(
		type === Camera.Constants.Type.back
		  ? Camera.Constants.Type.front
		  : Camera.Constants.Type.back
	 );
  }
	

	const sendPhoto = () => {
		console.log(navigation)
		navigation.navigate('DeafultScreen', {photo, value, isLocation});
		console.log(value);
	
		setValue(initialValue);
	}
	const handleKeyboard = () => {
		setShowKeyboard(true);
	}
  return (
	 <View style={createPostScreenStyle.container}>
		 <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
			 keyboardVerticalOffset={Platform.OS === "android" ? 100 : -60}
         
        >
		<View style={{...createPostScreenStyle.form, paddingBottom: showKeyboard ? 10 : 10}}>


{/* //Фото окно с выбором камеры */}
		<TouchableOpacity onPress={handleTypeCamera}>
			<View style={createPostScreenStyle.camerBox}>
			<Camera type={type} onCameraReady={onCameraReady} ref={setCamera} style={createPostScreenStyle.imageBox}>
			{photo &&	<View style={createPostScreenStyle.pictureDoneContainer}>
					<Image source={{uri: photo}} style={{height: 240,}}/>
				</View>}
				<TouchableOpacity activeOpacity={0.7} onPress={handleTakePhoto}>
			<MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
			</TouchableOpacity>
			</Camera>
			</View>
		</TouchableOpacity>
{/* //Фото окно с выбором камеры */}


			<TouchableOpacity activeOpacity={0.6}>
				<Text style={createPostScreenStyle.loadBth}>Загрузите фото</Text>
			</TouchableOpacity>
			<View style={createPostScreenStyle.labelInput}>
				<TextInput value={value.name} onChangeText={(value) => setValue((prevState)=> ({...prevState, name: value}))} onFocus={handleKeyboard} style={createPostScreenStyle.input} placeholderTextColor='#BDBDBD' placeholder='Название...'/>
			</View>
			<View style={createPostScreenStyle.labelInput}>
				<TextInput value={value.place} onChangeText={(value) => setValue((prevState)=> ({...prevState, place: value}))} name='name' onFocus={handleKeyboard} style={{...createPostScreenStyle.input, paddingLeft: 15}} placeholderTextColor='#BDBDBD' placeholder='Местность...'/>
				<SimpleLineIcons style={createPostScreenStyle.iconLocation}  name="location-pin" size={24} color="#BDBDBD" />
			</View>
			<TouchableOpacity onPress={sendPhoto} style={{
				...createPostScreenStyle.formButton, 
				backgroundColor: !activeBth ? "#F6F6F6" : "#FF6C00",
				
				}}>
				<Text style={{...createPostScreenStyle.buttonTitle, 
				color: !activeBth ? "#BDBDBD" : '#fff'
				
				}}>Опубликовать</Text>
			</TouchableOpacity>
				<View style={{alignItems:'center'}}>
				<TouchableOpacity onPress={handleDeletePhost} activeOpacity={0.7} style={{
					...createPostScreenStyle.tabBth, 
					backgroundColor: !activeBth ? "#F6F6F6" : '#BDBDBD'
					}}>
            <MaterialCommunityIcons name="trash-can-outline" size={24} color={!activeBth ? "#BDBDBD" : '#fff'} />
            </TouchableOpacity>
				</View>

		</View>
		</KeyboardAvoidingView>
	 </View>
  )
}

export default CreatePostScreen;