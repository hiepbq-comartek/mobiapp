import React from "react";
import { useState } from "react";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

const Sigin = ({ navigation }) => {
  const [phoneormail, setphoneormail] = useState("");
  const [password, setpassword] = useState("");
  let data = { phoneormail, password };
  return (
    <SafeAreaView>
      <View>
        <View style={styles.logo}>
          <Image
            style={{ width: 160, height: 160 }}
            source={require("../accset/img/z3681068714710_a4ea01c851d38352e46f609315e51bc8.jpg")}
          />
          <View>
            <Text style={{ fontSize: 20 }}>hypetech.com</Text>
          </View>
        </View>

        <View style={styles.form}>
          <TextInput
            placeholder="Số điện thoại hoặc email"
            style={styles.input}
            onChangeText={(newText) => setphoneormail(newText)}
            value={phoneormail}
          />
          <TextInput
            placeholder="Mật Khẩu"
            style={styles.input}
            onChangeText={(newText) => setpassword(newText)}
            value={password}
          />
        </View>
        <View style={styles.logo}>
          <TouchableOpacity style={styles.button}>
            <Text>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.logo}>
          <Text>Bạn chưa có tài khoản </Text>
          <Button
            title="đăng ký"
            onPress={() => navigation.navigate("Đăng ký")}
          />
        </View>
        <View style={styles.logo}>
          <TouchableHighlight style={styles.siginout}>
            <Text style={styles.textsigin}>Quên Mật Khẩu</Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  logo: {
    marginTop: 20,
    width: "100%",
    alignContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#ccc",
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12,
  },
  form: {
    marginTop: 60,
  },
  button: {
    width: 160,
    backgroundColor: "red",
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.8,
  },
  siginout: {
    marginTop: -3,
  },
  textsigin: {
    color: "blue",
  },
});

export default Sigin;
