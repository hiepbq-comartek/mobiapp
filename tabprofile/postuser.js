import React from "react";
import {
  Text,
  Image,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { datas } from "../server/data";

export default function Postuser({ navigation, route }) {
  console.log(route);
  return (
    <SafeAreaView style={{ flex: 1,width:'100%',paddingBottom:20,backgroundColor:'#000' }}>
      <ScrollView>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.goBack()}
          style={{ top: 0, left: 8, width: 360 }}
        >
          <Ionicons name="arrow-back" size={24} color='#0ef08c' />
        </TouchableOpacity>
        <View style={{}}>
          <View style={{ flexDirection: "row",marginLeft:10,marginRight:10,flexWrap:'wrap' }}>
            <Image
              style={{width:40,height:40,borderRadius:40,margin:12}}
              source={require("../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg")}
            />
            <View style={{marginRight:12,marginBottom:12,marginTop:12}}>
            <Text style={{ top: 10,color:'#0ef08c' }}>{route.params.name}</Text>
            <Text style={{ top: 32, left: -76, fontSize: 12,color:'#0ef08c' }}>
              Đã đăng 5 giờ trước
            </Text>
            </View>
          </View>
          <View style={{ left: 20, top: 12,color:'#0ef08c' }}>
            <Text>{route.params.titile}</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.9}
            // onPress={() => navigation.navigate("img")}
          >
            <View
              style={{
                maxWidth: 360,
                maxHeight: 400,
                flex: 1,
                marginLeft: 16,
              }}
            >
              <Image
                style={{
                  alignItems: "center",
                  maxWidth: 360,
                  height: 200,
                  top: 20,
                  margin: 8,
                }}
                source={{ uri: route.params.img }}
              />
            </View>
          </TouchableOpacity>
          <View
            style={{ top: 40, width: 390, maxHeight: 600, marginBottom: 200 }}
          >
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#ccc",
                marginLeft: 20,
                marginRight: 20,
                width: 330,
                borderRadius: 12,
              }}
            >
              <View>
                <Image
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 40,
                    margin: 10,
                  }}
                  source={require("../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg")}
                />
              </View>
              <View>
                <Text style={{ top: 10, fontSize: 16 }}>Quang Lam</Text>
                <View style={{ top: 16 }}>
                  <Text style={{ fontSize: 12 }}>Very Good</Text>
                </View>
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={{ right: -220, top: -16 }}
                >
                  <AntDesign name="hearto" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
