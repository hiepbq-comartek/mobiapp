import React, { useState } from "react";
import { useReducer } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";

function Addpost({ Setaddpost, addpost }) {
  const init = {
    post: "",
    formdata: "",
  };
  const [post, getpost] = useState("");
  const [formdata, setfromdata] = useState("");
  return (
    <View style={style.addpostblock}>
      <Text style={style.textaddpost}>Thêm bài viết</Text>
      <TouchableOpacity
        style={style.buttonaddpost}
        activeOpacity={0.8}
        onPress={() => Setaddpost(!addpost)}
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
        onChangeText={(newText) => getpost(newText)}
        value={post}
      />
      <Image
        style={{ width: 360, height: 360, margin: 16 }}
        source={require("../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg")}
      />
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
    marginTop: 20,
    marginBottom: 10,
    fontSize: 24,
  },
  buttonaddpost: {
    position: "absolute",
    right: 16,
    top: 20,
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
    top: 20,
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
