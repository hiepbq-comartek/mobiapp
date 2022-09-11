import React from "react";
import { Text,Image,View,SafeAreaView,TouchableOpacity,ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

export default function Img({navigation}){
     return(
        <SafeAreaView style={{backgroundColor:'black',height:9999}}>
            <TouchableOpacity  activeOpacity={0.9} onPress={()=>navigation.goBack()} style={{top:0,left:8,width:360}}><Ionicons name="arrow-back" size={24} color="white" /></TouchableOpacity>
            <View>
              <Image style={{ maxWidth: 360,maxHeight:400,top:100,margin:8 }} source={require("../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg")}/>
            </View>

        </SafeAreaView>
     )
}