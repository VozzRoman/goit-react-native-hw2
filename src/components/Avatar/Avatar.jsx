import { View, Text, Image, TouchableOpacity } from "react-native";
import { avatarStyle } from "./AvatarStyle";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export const Avatar = () => {
  return (
    <View style={avatarStyle.avatarBox}>
      <Image source={require("../../img/svg/ava.png")}></Image>
      <TouchableOpacity 
		style={avatarStyle.addBth}
		activeOpacity={0.8}
		>
        <MaterialCommunityIcons name="close" size={18} color="#E8E8E8" />
      </TouchableOpacity>
    </View>
  );
};
