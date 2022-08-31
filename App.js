import * as React from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileStackScreen from "./screentab/setting";
import friendsStackScreen from "./screentab/friend";
import HomeStackScreen from "./screentab/home";
import loveStackScreen from "./screentab/love";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Trang chủ" component={HomeStackScreen} />
        <Tab.Screen name="yêu thích" component={loveStackScreen} />
        <Tab.Screen name="Bạn bè" component={friendsStackScreen} />
        <Tab.Screen name="trang cá nhân" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
