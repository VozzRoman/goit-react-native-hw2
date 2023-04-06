import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { postScreenStyle } from "./DefaultScreenStyled";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from "@expo/vector-icons";
import ProfileAvatar from "../../../components/ProfileAvatar/ProfileAvatar";
import { FlatList } from "react-native-gesture-handler";


//fireBase------//
import db from "../../../firebase/config";

import { getAuth } from "firebase/auth";
const auth = getAuth(db)
import { doc, getFirestore, onSnapshot, updateDoc } from "firebase/firestore";
import { collection, getDocs, getDoc, addDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { async } from "@firebase/util";
import { Avatar } from "../../../components/Avatar/Avatar";
import { singOutUser } from "../../../redux/auth/authOperations";


const fierStore = getFirestore(db);



const DefaultScreen = ({ route, navigation }) => {

  const [posts, setPosts] = useState([]);
  

//   console.log(likes);
console.log('AuthComm=====>',auth.currentUser)



 
// console.log('Posts', posts)
const dispatch = useDispatch();
	const userData = useSelector(state => state);
	const userAvator = userData.auth.avatarImage;

	const avaFunc = (value) => {
		if(!value){
			return
		} else {
			const avaText = value
			return avaLetter = avaText.slice(0,1).toUpperCase()

		}	
	}


	
		
	
	
	// console.log('userProfileState',userData.auth.login);
	// console.log('userProfileState',userData.auth.login);



const handleAddLikes = async (idx, value = 0) => {
	
		const parenDocref = await doc(fierStore, 'posts', `${idx}`);
		console.log(parenDocref);
		await updateDoc(parenDocref,{
			likes: value + 1,
		})
	
}




//   const {data} = route.params;
//   console.log('POSTS',posts)
  //Получение данных с сервера fireStore

  const getDataFromSerever = async () => {
    try {

      const querySnapshot = await onSnapshot(collection(fierStore, "posts"), (snapshot) => {
			setPosts(
				snapshot.docs.map((doc) => {
					// console.log('fffff====>', doc.data());
					 return {
						id: doc.id,
						...doc.data(),
					 };
				  })
			)
		});
		// console.log('querySnapshot', querySnapshot);
	
 
      // setPosts(
      //   querySnapshot.docs.map((doc) => {
		// 	// console.log('fffff====>', doc.data());
      //     return {
      //       id: doc.id,
      //       ...doc.data(),
      //     };
      //   })
      // );

  
    } catch (e) {
      console.log(e.message);
    }
  };







  useEffect(() => {
    getDataFromSerever();
	
	
	
  }, []);



  return (
    <View style={postScreenStyle.container}>

	
      <ProfileAvatar name={userData.auth.login} mail={userData.auth.userEail} title={!userAvator ? avaFunc(userData.auth.login) : null} photo={userAvator}/>
      {posts && (
        <View>
          <FlatList style={{marginBottom: 140}}
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
							<View style={{flexDirection:'row', alignItems: 'center'}}>
                      <TouchableOpacity
                        style={{ flexDirection: "row", marginRight: 24 }}
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
								onPress={() => handleAddLikes(item.id, item.likes)}
                       
                      >
                   <AntDesign name="like2" size={22} color="#BDBDBD" style={{marginRight: 5, marginBottom: 2, color: !item.likes ? "#BDBDBD" :  '#FF6C00'}} />
                        <Text style={{ color: !item.likes ? "#BDBDBD" :  '#212121', fontSize: 16}}>{item.likes}</Text>
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
      )}
	
    </View>
  );
};

export default DefaultScreen;
