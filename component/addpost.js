import React, { useState } from "react";
import { useReducer } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as DocumentPicker from "expo-document-picker";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  SafeAreaView,
} from "react-native";
import Reduce from "../reducer/reduce";
import { init } from "../reducer/init";
import { SetPost, AddPostuse, AddImg } from "../reducer/output";
function Addpost({ Setaddpost, addpost }) {
  const [state, dispatch] = useReducer(Reduce, init);
  const { setpost } = state;
  // const AddImg = async () => {
  //   try {
  //     DocumentPicker.getDocumentAsync(DocumentPicker.)
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  console.log(DocumentPicker);
  return (
    <View style={style.addpostblock}>
      <Text style={style.textaddpost}>Thêm bài viết</Text>
      <TouchableOpacity
        style={style.buttonaddpost}
        activeOpacity={0.8}
        onPress={() => AddPostuse(setpost)}
      >
        <Text>Đăng</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.buttonaddposts}
        activeOpacity={0.8}
        onPress={() => Setaddpost(!addpost)}
      >
        <Text>Hủy</Text>
      </TouchableOpacity>
      <TextInput
        style={style.inputuser}
        placeholder="bạn đang nghĩ gì"
        maxLength={40}
        onChangeText={(newText) => dispatch(SetPost(newText))}
      />
      <TouchableOpacity activeOpacity={0.9}>
        <Image
          style={{
            maxWidth: 360,
            maxHeight: 360,
            marginLeft: 12,
            marginTop: 10,
          }}
          source={require("../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg")}
        />
      </TouchableOpacity>
      <View style={style.handleuser}>
        <TouchableOpacity
          onPress={() => Alert.alert("backend chưa làm")}
          activeOpacity={0.8}
        >
          <Text>Gắn thẻ người khác</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Alert.alert("backend chưa làm :)")}
          activeOpacity={0.8}
        >
          <Text>Cảm xúc hoạt động</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Alert.alert("backend chưa làm")}
          activeOpacity={0.8}
        >
          <Text>Thêm vị trí</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => Alert.alert("backend chưa làm")}
        >
          <Text>Đổi nền</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  addpostblock: {
    position: "absolute",
    backgroundColor: "#ccc",
    height: 1000,
    width: 390,
    zIndex: 9999,
  },
  textaddpost: {
    textAlign: "center",
    marginTop: 60,
    marginBottom: 10,
    fontSize: 24,
  },
  buttonaddpost: {
    position: "absolute",
    right: 20,
    top: 60,
    backgroundColor: "#fff",
    width: 52,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1da1f2",
    borderRadius: 4,
  },
  buttonaddposts: {
    position: "absolute",
    left: 4,
    top: 60,
    width: 52,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  inputuser: {
    marginRight: 10,
    marginLeft: 10,
    width: 370,
    height: 32,
    paddingLeft: 10,
  },
  handleuser: {
    alignItems: "center",
    width: 390,
  },
});
export default Addpost;
