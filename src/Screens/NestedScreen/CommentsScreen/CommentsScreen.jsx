import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { commentsStyle } from "./CommentScreenStyled";
import { FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
//fireBase----
import { addDoc, collection, onSnapshot, updateDoc } from "firebase/firestore";
import { doc, getFirestore } from "firebase/firestore";
import db from "../../../firebase/config";
import { getAuth } from "firebase/auth";
const auth = getAuth(db);


	
	
	




import { useSelector } from "react-redux";
import { userSelector } from "../../../redux/auth/authSlice";

const fierStore = getFirestore(db);

const CommentsScreen = ({ route, navigation }) => {

  const [comment, setComments] = useState([]);
  const [getAllpost, setGetAllpost] = useState([]);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  // const [position, setPosition] = useState(false);
//   console.log("AUTH2======>", auth.email)
  const { login } = useSelector(userSelector);

//   console.log('Comments',getAllpost);
  const addCount = getAllpost.length + 1;
  const counts = addCount.toString();
  // console.log('counts',counts);

  // console.log('reduxStateData=====>', login );
//   console.log('ROUTE====>',route.params)
  // console.log('Route', route.params.image);
  const { postId, image} = route.params;
  // console.log('getAllpost=====>',getAllpost);
    //---------ДАТА сообщения
	 let date = new Date();
	 date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

	 const fullYear = date.toString().slice(4, 21);
	//  console.log(fullYear);
	

  const createComment = async () => {
	
    setIsShowKeyboard(false);
    Keyboard.dismiss();
	 const ava = await auth.currentUser;
	
    const parenDocref = doc(fierStore, "posts", `${postId}`);

    const subCollection = collection(parenDocref, "comments");
    await addDoc(subCollection, {
      comment,
      login,
		avator: ava.photoURL,
		time: fullYear
		
		
		
    });

    //нужно обновить обьект для получения комментов в документе
    await updateDoc(parenDocref, {
      comment,
      counts,
      login,
		// avator: ava.photoURL
		
		
    });
   //  console.log("upDate", upDate);
    this.textInput.clear();
  };
  const getAllposts = async () => {
await onSnapshot(
      collection(fierStore, "posts", `${postId}`, "comments"),
      (onsnapshot) => {
        setGetAllpost(
          onsnapshot.docs.map((doc) => {
            // console.log('DOC.ID', doc.id);
            return {
              ...doc.data(),
              id: doc.id,
            };
          })
        );
      }
    );
   //  console.log("DOC-GET", querySnapshot);
  };

  useEffect(() => {
    getAllposts();
  }, []);

  const spliceDel = (value) => {
    return value.slice(0, 1).toUpperCase();
  };



  return (
    <View style={commentsStyle.container}>
      <KeyboardAvoidingView
        style={{ width: "100%" }}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "android" ? 0 : 0}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("DeafultScreen", {
              data: counts,
            })
          }
        ></TouchableOpacity>

        <Image
          source={{ uri: image }}
          style={{
            width: "100%",
            height: 240,
            marginBottom: 5,
            borderRadius: 8,
            marginTop: 20,
          }}
        />
        <FlatList
		  onEndReachedThreshold={0.5}
          style={{ height: 320}}
			 contentContainerStyle={{justifyContent: 'flex-end'}}
          inverted={true}
          data={getAllpost}
          renderItem={({ item, index }) => (
            <View
              style={{
                ...commentsStyle.meaasageFrame,
                flexDirection: item.login === login ? "row-reverse" : "row",
              }}
              key={index}
            >
              <View style={commentsStyle.avator}>
                <Text style={{ color: "white" }}>{spliceDel(item.login)}</Text>
                <Image
                  style={{ position: "absolute", width: 28, height: 28 }}
                  source={{ uri: item.avator }}
                />
              </View>
              <View style={commentsStyle.textFrame}>
                <Text style={commentsStyle.textComment}>{item.comment}</Text>
                <Text style={commentsStyle.timeMessage}>{item.time}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />

        <View
          style={{
            ...commentsStyle.label,
            ...Platform.select({
              ios: {
                marginBottom: isShowKeyboard ? 95 : 20,
              },
              android: {
                marginBottom: isShowKeyboard ? 20 : 20,
              },
            }),
          }}
        >
          <TextInput
            onFocus={() => setIsShowKeyboard(true)}
            onBlur={() => setIsShowKeyboard(false)}
            multiline={true}
            ref={(input) => {
              this.textInput = input;
            }}
            style={{ alignItems: "flex-start" }}
            placeholderTextColor={"#BDBDBD"}
            placeholder={"Комментировать..."}
            onChangeText={setComments}
          />
          <TouchableOpacity
            style={{
              ...commentsStyle.sendBth,
              ...Platform.select({
                ios: {
                  top: 4,
                  right: 5,
                },
                android: {
                  top: 7,
                  right: 7,
                },
              }),
            }}
            onPress={createComment}
          >
            <AntDesign name="arrowup" size={19} color="#fff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default CommentsScreen;
