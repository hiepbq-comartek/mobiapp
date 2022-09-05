import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileStackScreen from "./screentab/setting";
import friendsStackScreen from "./screentab/friend";
import HomeStackScreen from "./screentab/home";
import LikeStackScreen from "./screentab/statuslive";
import Test from "./screentab/Test";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Trang chủ" component={HomeStackScreen} />
        <Tab.Screen name="yêu thích" component={LikeStackScreen} />
        <Tab.Screen name="Bạn bè" component={friendsStackScreen} />
        <Tab.Screen name="Cài đặt" component={ProfileStackScreen} />
        <Tab.Screen name="test" component={Test} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
