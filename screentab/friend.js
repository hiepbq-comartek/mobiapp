import * as React from "react";
import {
  Button,
  Text,
  TextInput,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const HomeStack = createNativeStackNavigator();

function HomeStackScreens() {
  return (
    <SafeAreaView>
      <Text
        style={{
          alignItems: "center",
          alignContent: "center",
          width: 390,
          left: 112,
          fontSize: 20,
          marginBottom: 20,
        }}
      >
        Tác giả đã theo dõi
      </Text>
      <ScrollView>
        <View style={style.blockfrend}>
          <Image
            style={{ width: 24, height: 24, borderRadius: 40, margin: 4 }}
            source={require("../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg")}
          />
          <Text style={style.namefriend}>Quang Hiệp</Text>
          <Text style={style.status}>Đang hoạt động</Text>
        </View>
        <View style={style.blockfrend}>
          <Image
            style={{ width: 24, height: 24, borderRadius: 40, margin: 4 }}
            source={require("../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg")}
          />
          <Text style={style.namefriend}>Quang Hiệp</Text>
          <Text style={style.status}>Đang hoạt động</Text>
        </View>
        {/* {typeof data !== undefined ? (
          data.map(() => (
            <>
              <View style={style.blockfrend}>
          <Image
            style={{ width: 24, height: 24, borderRadius: 40, margin: 4 }}
            source={require("../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg")}
          />
          <Text style={style.namefriend}>Quang Hiệp</Text>
          <Text style={style.status}>Đang hoạt động</Text>
        </View>
        <View style={style.blockfrend}>
          <Image
            style={{ width: 24, height: 24, borderRadius: 40, margin: 4 }}
            source={require("../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg")}
          />
          <Text style={style.namefriend}>Quang Hiệp</Text>
          <Text style={style.status}>Đang hoạt động</Text>
        </View>
            </>
          ))
        ) : (
          <View>
            <Text style={{justifyContent: "center",alignItems: "center",marginTop:20}}>Bạn đang cô đơn :))</Text>
          </View>
        )} */}
      </ScrollView>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  friends: {
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10,
    fontSize: 16,
  },
  blockfrend: {
    backgroundColor: "#ccc",
    marginBottom: 4,
    marginLeft: 20,
    marginRight: 20,
    height: 30,
    borderRadius: 8,
  },
  namefriend: {
    position: "absolute",
    left: 40,
    fontSize: 16,
  },
  status: {
    position: "absolute",
    left: 40,
    top: 16,
    fontSize: 12,
  },
});
export default HomeStackScreens;
