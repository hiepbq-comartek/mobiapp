import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileStackScreen from "./screentab/setting";
import friendsStackScreen from "./screentab/friend";
import HomeStackScreen from "./screentab/home";
import LikeStackScreen from "./screentab/discover";
import Siginin from "./login/siginin";
import Signout from "./login/siginout";
import Comfigpassword from "./login/resetpass";
import SearchStackScreen from "./screentab/video";
import Checkemail from "./login/checkmail";
import PageStart from "./login/pagestart";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Addprofile from "./tabprofile/addprofile";
import Img from "./tabprofile/img";
import Postuser from "./tabprofile/postuser";
import { MaterialIcons } from "@expo/vector-icons";
import Profileauthor from "./tabprofile/profileauthor";
import { Octicons } from '@expo/vector-icons';

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
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor:"#161a1f",
          width: 360,
          borderRadius: 16,
          right: 10,
          left: 8,
          bottom: 20,
          paddingTop: 10,
          // height: 90,
        },
      }}
    >
      <Tab.Screen
        name="Trang chủ"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({focused, color, size }) => ( focused ?
            <Ionicons name="ios-home" size={size} color={color} />:<Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Khám Phá"
        component={LikeStackScreen}
        options={{
          tabBarIcon: ({focused, color, size }) => (focused ?
            <Ionicons name="ios-people" size={size} color={color} />:<Ionicons name="people-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Video"
        component={SearchStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="video" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="theo dõi"
        component={friendsStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="user-following" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cài đặt"
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({focused, color, size }) => (focused?
            <Ionicons name="ios-settings" size={size} color={color} />:<Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function Tabprofile() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="img" component={Img} />
      <Stack.Screen name="addprofile" component={Addprofile} />
      
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
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
        <Stack.Screen
          name="Tabprofile"
          component={Tabprofile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Đăng nhập"
          component={Siginin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="postuser"
          component={Postuser}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="img"
          component={Img}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="proauthor"
          component={Profileauthor}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Đăng ký" component={Signout} />
        <Stack.Screen name="Tìm tài khoản" component={Checkemail} />
        <Stack.Screen name="Quên mật khẩu" component={Comfigpassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
