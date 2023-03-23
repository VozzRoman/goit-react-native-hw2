import React from "react";
import { View} from "react-native";
import { Feather } from "@expo/vector-icons";
import { StyleSheet} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostScreen from "../PostsScreen/PostScreen";
import CreatePostScreen from "../CreatePostsScreen/CreatePostScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import SignOutBth from "../../../components/Buttons/SignOutBth/SignOutBth";
import BackBth from "../../../components/Buttons/Back/BackBth";
import { homeStyle } from "./HomeMainStyle";

export const MainTab = createBottomTabNavigator();

const HomeMain = ({ navigation }) => {
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarStyle: homeStyle.tabBar,
        headerStyle: { borderBottomWidth: 1, borderBottomColor: "#dddddd" },
      }}
    >
      <MainTab.Screen
        options={{
          tabBarActiveTintColor: "#FF6C00",
          tabBarInactiveTintColor: "#fff",
          headerShown: false,
          ...homeStyle.headerStyles,
          tabBarLabel: "",
          tabBarIcon: ({ focused, color }) => (
            <View style={{ ...styles.tabBth, backgroundColor: color }}>
              <Feather
                name="grid"
                size={24}
                color={focused ? "#fff" : "gray"}
              />
            </View>
          ),
        }}
        name="Posts"
        component={PostScreen}
      />
      <MainTab.Screen
        options={{
          tabBarActiveTintColor: "#FF6C00",
          tabBarInactiveTintColor: "#fff",
			 headerTitle: "Создать Публикацию",
			 ...homeStyle.headerStyles,
          headerLeft: () => (
            <BackBth onPress={() => navigation.navigate("DeafultScreen")} />
          ),
          tabBarLabel: "",
          tabBarIcon: ({ focused, color }) => (
            <View style={{ ...styles.tabBth, backgroundColor: color }}>
              <Feather
                name="plus"
                size={24}
                color={focused ? "#fff" : "gray"}
              />
            </View>
          ),
			 tabBarStyle: {display: 'none'},
        }}
        name="CreatePosts"
        component={CreatePostScreen}
      />
      <MainTab.Screen
        options={{
          tabBarActiveTintColor: "#FF6C00",
          tabBarInactiveTintColor: "#fff",
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ focused, color }) => (
            <View style={{ ...styles.tabBth, backgroundColor: color }}>
              <Feather
                name="user"
                size={24}
                color={focused ? "#fff" : "gray"}
              />
            </View>
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};

export default HomeMain;
const styles = StyleSheet.create({
  tabBth: {
    width: 70,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
