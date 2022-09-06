import * as React from "react";
import { useState } from "react";
import {
  Button,
  Text,
  TextInput,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settinguser from "../component/settingusert";
const SettingsStack = createNativeStackNavigator();

function ProfileStackScreen() {
  const [setting, Setsetting] = useState(false);
  return (
    <View>
      {setting && <Settinguser Setsetting={Setsetting} setting={setting} />}
      <View style={style.projectuse}>
        <Image
          style={{ width: 60, height: 60, borderRadius: 40 }}
          source={require("../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg")}
        />
        <Text style={style.textname}>Xin Chào Quang Hiệp</Text>
        <Text style={style.textstatus}>23/5/2001</Text>
      </View>
      <View style={style.handledispkay}>
        <TouchableOpacity activeOpacity={0.8} style={style.buttoncolor}>
          <Text>Đảo màu giao diện </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Setsetting(!setting)}
          activeOpacity={0.8}
          style={style.buttoncolor}
        >
          <Text>Thay đổi thông tin </Text>
        </TouchableOpacity>
      </View>

      <View style={style.account}>
        <Button title="Đăng xuất" />
        <Button title="Xóa tài khoản" />
      </View>
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
  handledispkay: {
    width: 350,
    height: 460,
    margin: 20,
  },
  buttoncolor: {
    backgroundColor: "#fff",
    height: 30,
    justifyContent: "center",
    width: 350,
    alignItems: "center",
    marginBottom: 4,
  },
});
export default ProfileStackScreen;
