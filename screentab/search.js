import React, { useState } from "react";
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

export default function Search() {
  const [authorsearch, setauthorsearch] = useState(false);
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
        Tìm kiếm tác giả
      </Text>
      <TextInput
        style={{width:346,height:40,backgroundColor:'#ccc',paddingLeft:20,borderRadius:16,marginLeft:16,marginRight:16,marginTop:20}}
        placeholder="Tìm kiếm tác giả"
        maxLength={36}
        onChangeText={(newtext)=>{
          if(newtext==''){
              setauthorsearch(false)
          }
          else {
            setauthorsearch(true)
          }
        }}
      />
      {authorsearch && <Searchauthor />}
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
