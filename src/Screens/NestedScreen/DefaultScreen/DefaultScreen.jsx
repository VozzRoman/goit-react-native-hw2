import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { postScreenStyle } from "./DefaultScreenStyled";
import { Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import ProfileAvatar from "../../../components/ProfileAvatar/ProfileAvatar";
import { FlatList } from "react-native-gesture-handler";
//fireBase------//
import db from "../../../firebase/config";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
const fierStore = getFirestore(db);

const DefaultScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  //Загрузка данных с сервера fireStore
  const getDataFromSerever = async () => {
    const querySnapshot = await getDocs(collection(fierStore, "posts"));
    setPosts(
      querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      })
    );
    console.log(
      querySnapshot.docs.map((doc) =>
        console.log("fireBaseDATA====>>>", doc.data())
      )
    );
  };

  useEffect(() => {
    getDataFromSerever();
    console.log("POSTS====>", posts);
  }, []);

  const locationData = (name) => {
    return posts.find((item) => {
      if (item.name === name) {
        console.log("name=====>>", item.location);
        return item.location;
      }
    });
  };

  return (
    <View style={postScreenStyle.container}>
      <ProfileAvatar name="Natali Romanova" mail="email@example.com" />
      {posts && (
        <View>
          <FlatList
            data={posts}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
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
                      <TouchableOpacity
                        style={{ flexDirection: "row" }}
                        activeOpacity={0.7}
                        onPress={() => navigation.navigate("CommentScreen")}
                      >
                        <Feather
                          style={postScreenStyle.iconMessage}
                          name="message-circle"
                          size={24}
                          color="#BDBDBD"
                        />
                        <Text style={{ color: "#BDBDBD" }}>0</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{ flexDirection: "row", alignItems: "center" }}
                        onPress={() =>
                          navigation.navigate(
                            "MapScreen",
                            locationData(item.name)
                          )
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
      )}
    </View>
  );
};

export default DefaultScreen;
