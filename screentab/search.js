import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from "react-native";

export default function Search() {
  return (
    <SafeAreaView style={style.viewsearch}>
      <TextInput
        style={style.styleInput}
        placeholder="Tìm kiếm tác giả"
        maxLength={36}
      />
      <TouchableOpacity
        onPress={() => Alert.alert("test")}
        activeOpacity={0.9}
        style={style.handlesearh}
      >
        <Text>Tìm kiếm</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  viewsearch: {
    width: 390,
    height: 9999999,
    display: "flex",
  },
  styleInput: {
    backgroundColor: "#ccc",
    width: 370,
    height: 32,
    borderRadius: 8,
    paddingLeft: 16,
    top: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  handlesearh: {
    width: 60,
    top: 40,
    left: 160,
    marginLeft: 10,
  },
});
