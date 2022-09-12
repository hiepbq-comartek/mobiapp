import React, { useState, useReducer } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from "react-native";
import Searchauthor from "../component/searchauthor";
import Reduce from "../reducer/reduce";
import { init } from "../reducer/init";
import { SetAuthor } from "../reducer/output";
export default function Search() {
  const alert = (newtext) => {
    return Alert.alert(newtext);
  };
  const [authorsearch, setauthorsearch] = useState(false);
  const [state, dispatch] = useReducer(Reduce, init);
  const { setauthor } = state;
  const [nameauthor, setnameauthor] = useState("");
  return (
    <SafeAreaView style={style.viewsearch}>
      <Text
        style={{
          alignItems: "center",
          alignContent: "center",
          width: 340,
          left: 120,
          fontSize: 20,
        }}
      >
        Tìm kiếm
      </Text>
      <TextInput
        style={{
          width: 346,
          height: 40,
          backgroundColor: "#ccc",
          paddingLeft: 20,
          borderRadius: 16,
          marginLeft: 16,
          marginRight: 16,
          marginTop: 20,
        }}
        placeholder="Tìm kiếm tác giả"
        maxLength={36}
        onChangeText={(newtext) => {
          if (newtext == "") {
            setauthorsearch(false);
          } else if (newtext !== "") {
            setauthorsearch(true);
          }
          dispatch(SetAuthor(newtext));
        }}
      />
      {authorsearch && <Searchauthor setauthor={setauthor} />}
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
    top: 28,
    left: 152,
    marginLeft: 10,
  },
});
