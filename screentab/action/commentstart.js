import * as React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  SafeAreaView,
  TextInput,
} from "react-native";
import Addpost from "../../component/addpost";
import { stylehome } from "../../style/stylehome";
import { useState } from "react";
function  Startblock({headerShown,Setaddpost}){
    const alert=(text)=>{
        return Alert.alert(text)
    }
    return(
      <>
      {headerShown && (
        <View style={{flexDirection:'row',width:320,left:28,paddingBottom:10,zIndex:9999} }>
           <View style={{backgroundColor:'#ccc',borderRadius:16,width:320,height:160}}>
           <View style={stylehome.projectuse}>
           <Image
            style={{ width: 60, height: 60, borderRadius: 40 }}
            source={require("../../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg")}
           />
           <View style={{top:-49,left:80}}>
           <Text>Xin Chào Quang Hiệp</Text>
           <Text style={{top:12}}>Hôm nay có 2 bài viết mới</Text>
        </View>
      </View>
           <View style={{top:-36}}>
           <TouchableOpacity
            activeOpacity={0.8}
            style={stylehome.addporst}
            onPress={() => Setaddpost(true)}
            >
            <Text>Bạn đang nghĩ gì ?</Text>
           </TouchableOpacity>
           </View>
        </View>
        </View>
        )}</>
    )
}
export default Startblock