import * as React from "react";
import { Button, Text, TextInput, View, Image, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const HomeStack = createNativeStackNavigator();

function HomeScreen({ navigation }) {}

function HomeStackScreen() {
  return (
    <View>
      <View style={style.projectuse}>
        <Image
          style={{ width: 60, height: 60, borderRadius: 40 }}
          source={require("../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg")}
        />
        <Text style={style.textname}>Xin Chào Quang Hiệp</Text>
        <Text style={style.textstatus}>Hôm nay có 2 bài viết mới</Text>
      </View>
      <TextInput style={style.input} placeholder="Bạn đang nghĩ gì" />
    </View>
  );
}
const style = StyleSheet.create({
  projectuse: {
    marginTop: 20,
    marginLeft: 10,
  },
  textname: {
    top: 8,
    position: "absolute",
    fontSize: 16,
    left: 70,
  },
  textstatus: {
    top: 32,
    position: "absolute",
    fontSize: 10,
    left: 70,
  },
  input: {
    backgroundColor: "ccc",
    fontSize: 16,
  },
});
export default HomeStackScreen;
