import React, { useState, useReducer } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  ScrollView,
  Image
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
    <SafeAreaView style={{ flex: 1,width:'100%',paddingBottom:20,backgroundColor:'#000' }}>
      <View style={{
          alignItems: "center",
        }}>
      <Text
        style={{
          color:'#0ef08c',
          fontSize:20
        }}
      >
        Video
      </Text>
      </View>
      <ScrollView>
        <View style={{height:60,backgroundColor:'#161a1f',borderRadius:16,marginTop:8,marginLeft:12,marginRight:12,flexDirection:'row'}}>
          <Image style={{width:40,height:40,borderRadius:40,margin:12}} source={require("../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg")} />
          <View style={{marginRight:12,marginBottom:12,marginTop:12}}>
          <Text style={{color:'#0ef08c',fontSize:16}}>Quang Hải</Text>
          <Text style={{color:'#0ef08c',fontSize:12}}>Đã thích bạn lắm rồi</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
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
