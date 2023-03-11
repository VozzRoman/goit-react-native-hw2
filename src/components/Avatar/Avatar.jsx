import { View, Text, Image, TouchableOpacity } from "react-native";
import { avatarStyle } from "./AvatarStyle";

export const Avatar = () => {
  return (
    <View style={avatarStyle.avatarBox}>
      <Image source={require("../../img/svg/ava.png")}>

		</Image>
		<TouchableOpacity style={avatarStyle.addBth}
		activeOpacity={0.6}
		
		>
			<Text style={avatarStyle.bthPlus}>N</Text>
		</TouchableOpacity>	
    </View>
  );
};
