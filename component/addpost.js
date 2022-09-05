import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

function Addpost({ Setaddpost, addpost }) {
  return (
    <View style={style.addpostblock}>
      <Text>Thêm bài viết</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => Setaddpost(!addpost)}
      >
        <Text>ĐĂNG</Text>
      </TouchableOpacity>
      <TextInput placeholder="bạn đang nghĩ gì" maxLength={50} />
      <View>
        <TextInput />
        <TouchableOpacity activeOpacity={0.8}>
          <Text>Gắn thẻ người khác</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <Text>Cảm xúc hoạt động</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <Text>Gửi vị trí</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
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
});
export default Addpost;
