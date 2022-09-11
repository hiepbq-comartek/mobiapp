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
function  Startmin({headerShown,Setaddpost}){
    const alert=(text)=>{
        return Alert.alert(text)
    }
    return(
        <View style={{zIndex:9999}}>
            {!headerShown &&
        <View style={{marginLeft:32}}>
           <View style={{backgroundColor:'#ccc',borderRadius:16,width:320,height:48}}>
           <View style={{flexDirection:'row',width:320,left:32,padding:4,top:0}}>           
           <View>
           <Image
            style={{ width: 40, height: 40, borderRadius: 40,marginLeft:8 }}
            source={require("../../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg")}
           />
            </View>
           <View style={{top:-36}}>
           <TouchableOpacity
            activeOpacity={0.8}
            style={{backgroundColor:'#fff',width:142,borderRadius:40,height:20,top:48,left:20,paddingLeft:4}}
            onPress={() => Setaddpost(true)}
            >
            <Text>Bạn đang nghĩ gì ?</Text>
           </TouchableOpacity>
           </View>
          </View>
          </View> 
         {<Authors />}
         </View>
        }
        </View>
        
        
    )
}
export default Startmin