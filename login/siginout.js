import React from "react";
import Sigin from "./siginin";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

const Siginout = ({ navigation }) => {
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
          <TextInput placeholder="Tên đăng nhập" style={styles.input} />
          <TextInput placeholder="Email" style={styles.input} />
          <TextInput placeholder="Mật khẩu" style={styles.input} />
          <TextInput placeholder="Nhập lại Mật Khẩu" style={styles.input} />
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
