import React from 'react'
import { View, Text } from 'react-native';
import { commentsStyle } from './CommentScreenStyled';

const CommentsScreen = () => {
  return (
	 <View style={commentsStyle.container}>
		<Text>Comments Screen</Text> 
	 </View>
  )
}

export default CommentsScreen;
