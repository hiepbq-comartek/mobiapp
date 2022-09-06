import React, { useReducer } from "react";
import Sigin from "./siginin";
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
} from "react-native";

const Siginout = ({ navigation }) => {
  const profile = {
    name: "",
    email: "",
    password: "",
    checkpassword: "",
  };
  const Get_name = "get_name";
  const Get_email = "get_email";
  const Get_password = "get_password";
  const Get_checkpassword = "get_password";

  const setName = (payload) => {
    return {
      type: Get_name,
      payload,
    };
  };
  const setEmail = (payload) => {
    return {
      type: Get_email,
      payload,
    };
  };
  const setPassword = (payload) => {
    return {
      type: Get_password,
      payload,
    };
  };
  const setCheckPassword = (payload) => {
    return {
      type: Get_checkpassword,
      payload,
    };
  };
  const reduce = (state, action) => {
    let newprofile;
    switch (action.type) {
      case Get_name:
        return (newprofile = {
          name: state.payload,
        });
      case Get_email:
        return (newprofile = {
          email: state.payload,
        });
      case Get_password:
        return (newprofile = {
          password: state.payload,
        });
      case Get_checkpassword:
        return (newprofile = {
          password: state.payload,
        });
    }
    return newprofile;
  };
  const [state, dispath] = useReducer(reduce, profile);
  const { name, email, password, checkpassword } = state;

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
            placeholder="Tên đăng nhập"
            style={styles.input}
            onChangeText={(newText) => dispath(setName(newText))}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            onChangeText={(newText) => dispath(setEmail(newText))}
          />
          <TextInput
            placeholder="Mật khẩu"
            style={styles.input}
            onChangeText={(newText) => dispath(setPassword(newText))}
          />
          <TextInput
            placeholder="Nhập lại Mật Khẩu"
            style={styles.input}
            onChangeText={(newText) => dispath(setCheckPassword(newText))}
          />
        </View>
        <View style={styles.logo}>
          <TouchableOpacity style={styles.button}>
            <Text>Đăng ký</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.logo}>
          <Text>
            Bạn đã có tài khoản {""}
            <TouchableOpacity style={styles.siginout}>
              <Button
                style={styles.siginout}
                title="đăng nhập"
                onPress={() =>
                  navigation.navigate("Đăng nhập", {
                    title: "test",
                  })
                }
              />
            </TouchableOpacity>
          </Text>
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
    marginBottom: 10,
    borderRadius: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12,
  },
  form: {
    marginTop: 40,
  },
  button: {
    width: 160,
    backgroundColor: "red",
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  siginout: {
    marginTop: -3,
  },
  textsigin: {
    color: "blue",
  },
});

export default Siginout;
