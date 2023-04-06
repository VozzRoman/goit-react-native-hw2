import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { avatarStyle } from "./AvatarStyle";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export const Avatar = ({onPress, title, source}) => {

	
	
  return (
    <View style={avatarStyle.avatarBox}>
      <Image style={{position: 'absolute', width: '100%', height: 120}} source={{uri: source}}></Image>
		<Text style={avatarStyle.textAva}>{title}</Text>
      <TouchableOpacity 
		style={avatarStyle.addBth}
		activeOpacity={0.8}
		onPress={onPress}
		>
		
        <MaterialCommunityIcons name="close" size={18} color="#E8E8E8" />
      </TouchableOpacity>
    </View>
  );
};
