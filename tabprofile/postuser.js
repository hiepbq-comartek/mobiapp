import React from "react";
import { Text,Image,View,SafeAreaView,TouchableOpacity,ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 


export default function Postuser({route,navigation}){
    console.log(route.params)
     return(
        <SafeAreaView>
            <ScrollView>
            <TouchableOpacity  activeOpacity={0.9} onPress={()=>navigation.goBack()} style={{top:0,left:8,width:360}}><Ionicons name="arrow-back" size={24} color="black" /></TouchableOpacity>
            <View>
                <View style={{flexDirection:'row',left:12,width:360}}>
                    <Image style={{ width: 40, height: 40, borderRadius: 40, margin: 10 }} source={require("../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg")}/>
                    <Text style={{top:10}}>{route.params.name}</Text>
                    <Text style={{top:32,left:-76,fontSize:12}}>Đã đăng 5 giờ trước</Text>
                </View>
                <View style={{left:20,top:12}}>
                    <Text>{route.params.title}</Text>
                </View>
                <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate("img")}>
                <View style={{ maxWidth: 360,maxHeight:400}} >
                    <Image style={{ maxWidth: 360,maxHeight:400,top:20,margin:8 }}  />
                </View>
                </TouchableOpacity>
                <View style={{top:40, width:390,maxHeight:600,marginBottom:200}}>
                    <View style={{flexDirection:'row',backgroundColor:'#ccc',marginLeft:20,marginRight:20,width:330,borderRadius:12 }}>
                        <View><Image style={{ width: 40, height: 40, borderRadius: 40, margin: 10 }} source={require("../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg")}/></View>
                        <View>
                        <Text style={{top:10,fontSize:16}}>Quang Lam</Text>
                        <View style={{top:16}}><Text style={{fontSize:12}}>Very Good</Text></View>
                        <TouchableOpacity activeOpacity={0.9} style={{right:-220,top:-16}}><AntDesign name="hearto" size={24} color="black" /></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            </ScrollView>
            
        </SafeAreaView>
     )
}