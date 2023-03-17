import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { createPostScreenStyle } from './CreatePostScreenStyled';
import { SimpleLineIcons } from '@expo/vector-icons'; 
const CreatePostScreen = () => {
	const [showKeyboard, setShowKeyboard] = useState(false);
	const handleKeyboard = () => {
		setShowKeyboard(true);
	}
  return (
	 <View style={createPostScreenStyle.container}>
		 <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
			 keyboardVerticalOffset={Platform.OS === "android" ? 100 : 0}
         
        >
		<View style={{...createPostScreenStyle.form, paddingBottom: showKeyboard ? 10 : 10}}>
			<View style={createPostScreenStyle.imageBox}>
			<MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
			</View>
			<TouchableOpacity activeOpacity={0.6}>
				<Text style={createPostScreenStyle.loadBth}>Загрузите фото</Text>
			</TouchableOpacity>
			<View style={createPostScreenStyle.labelInput}>
				<TextInput onFocus={handleKeyboard} style={createPostScreenStyle.input} placeholderTextColor='#BDBDBD' placeholder='Название...'/>
			</View>
			<View style={createPostScreenStyle.labelInput}>
				<TextInput onFocus={handleKeyboard} style={{...createPostScreenStyle.input, paddingLeft: 15}} placeholderTextColor='#BDBDBD' placeholder='Местность...'/>
				<SimpleLineIcons style={createPostScreenStyle.iconLocation}  name="location-pin" size={24} color="#BDBDBD" />
			</View>
			<TouchableOpacity style={createPostScreenStyle.formButton}>
				<Text style={createPostScreenStyle.buttonTitle}>Опубликовать</Text>
			</TouchableOpacity>
				<View style={{alignItems:'center'}}>
				<TouchableOpacity activeOpacity={0.7} style={createPostScreenStyle.tabBth}>
            <MaterialCommunityIcons name="trash-can-outline" size={24} color="#BDBDBD" />
            </TouchableOpacity>
				</View>

		</View>
		</KeyboardAvoidingView>
	 </View>
  )
}

export default CreatePostScreen;