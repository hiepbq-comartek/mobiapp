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
import { useState } from "react";
import Authors from './authorflow'
import { Ionicons } from '@expo/vector-icons'; 
function  Startmin({headerShown,Setaddpost}){
    const alert=(text)=>{
        return Alert.alert(text)
    }
    return(
        <View style={{marginBottom:8,marginLeft:20,marginRight:20,backgroundColor:'#161a1f',borderRadius:16}}>
        {!headerShown &&
           <View style={{width:'100%'}}>
              <View style={{backgroundColor:'#161a1f',borderRadius:16,width:'100%',height:48}}>
              <View style={{flexDirection:'row',left:8,padding:4}}>           
              <Image
                style={{ width: 40, height: 40, borderRadius: 40 }}
                source={require("../../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg")}
               />
               {/* <View><Text>Xin chào Quang Hiệp</Text></View> */}
              <View style={{flexDirection:'row',marginLeft:160}}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{margin:6}}
                onPress={() => Setaddpost(true)}
               >
                <Ionicons name="search-outline" size={24} color="#0ef08c" />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{margin:6}}
                onPress={() => Setaddpost(true)}
               >
                <Ionicons name="notifications" size={24} color="#0ef08c" />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{backgroundColor:'#0ef08c',width:28,height:28,padding:2,margin:6}}
                onPress={() => Setaddpost(true)}
               >
                <Ionicons name="add-outline" size={24} color="black" />
              </TouchableOpacity>
              </View>
            </View>
            </View> 
             </View>
        }
        </View>
        
        
    )
}
export default Startmin