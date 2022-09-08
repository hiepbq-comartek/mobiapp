import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileStackScreen from "./screentab/setting";
import friendsStackScreen from "./screentab/friend";
import HomeStackScreen from "./screentab/home";
import LikeStackScreen from "./screentab/statuslive";
import Siginin from "./login/siginin";
import Signout from "./login/siginout";
import Comfigpassword from "./login/resetpass";
import SearchStackScreen from "./screentab/search";
import Checkemail from "./login/checkmail";
import PageStart from "./login/pagestart";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Login() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="mở đầu" component={PageStart} />
      <Stack.Screen name="Đăng nhập" component={Siginin} />
      <Stack.Screen name="Đăng ký" component={Signout} />
      <Stack.Screen name="Tìm tài khoản" component={Checkemail} />
      <Stack.Screen name="Quên mật khẩu" component={Comfigpassword} />
    </Stack.Navigator>
  );
}
function Homes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Trang chủ" component={HomeStackScreen} />
      <Tab.Screen name="Tìm kiếm" component={SearchStackScreen} />
      <Tab.Screen name="yêu thích" component={LikeStackScreen} />
      <Tab.Screen name="theo dõi" component={friendsStackScreen} />
      <Tab.Screen name="Cài đặt" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Homes"
          component={Homes}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
