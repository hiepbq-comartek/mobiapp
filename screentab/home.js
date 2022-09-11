import React, { useReducer } from "react";
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
import { stylehome } from "../style/stylehome";
import { useState} from "react";
import Startblock from "./action/commentstart"
import Startmin from "./action/commentstartmin"
import Addpost from "../component/addpost"
import { Foundation } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import  Reduce  from "../reducer/reduce";
import { init } from "../reducer/init";
import {Setjob,Addjob,Checklike,Addcommnet} from "../reducer/output"


function HomeStackScreen({navigation}) {
  const img = "../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg"
  const alert=(text)=>{
    return(Alert.alert(text))
  }
  const log=(text)=>{
    return (console.log(text))
  }
  const [headerShown, setHeaderShown] = useState(true);
  const [addpost, Setaddpost] = useState(false);
  const [state, dispatch] = useReducer(Reduce, init);
  const {checkfollow,checklike,Checkcomment,job,Jobs,numberlike,numbercomment,author,addImg} = state
  const data = {
    id:1,
    name:'Quang Lam',
    titile:'hello',
    img:require("../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg"),
  }
  return (
    <SafeAreaView style={{paddingBottom:20,marginBottom:100,flex:1}} >
      {<Startblock headerShown={headerShown} Setaddpost={Setaddpost} />}
      {<Startmin headerShown={headerShown} Setaddpost={Setaddpost} />}
      {addpost && <Addpost Setaddpost={Setaddpost} addpost={addpost} />}
      <ScrollView
        onScroll={(event) => {
          const scrolling = event.nativeEvent.contentOffset.y;
          scrolling > 4 ? setHeaderShown(false):setHeaderShown(true)
        }}
      >
        <TouchableOpacity activeOpacity={0.9}  onPress={() => navigation.navigate("postuser",{data})}>
        <View style={{width:360,backgroundColor:"#ccc",marginLeft:8,borderRadius:16,marginBottom:12}}>
          <View style={{flexDirection:'row'}}>
          <Image
            style={{ maxWidth: 40, maxHeight: 40, borderRadius: 40, margin: 10 }}
            source={require(img)}
          />
          <TouchableOpacity activeOpacity={0.2} onPress={() => navigation.navigate("Proauthor")}>
          <Text style={{top:10,fontSize:16,left:6,zIndex:2}}>Quang Hiệp</Text>
          </TouchableOpacity>
          <Text style={{top:32,left:-80,fontSize:12}}>Đã đăng 5 giờ trước</Text>
          </View>
          <View>
          <Text style={{left:12}}>Luật giang hồ a chơi mã tấu</Text>
          </View>
          <TouchableOpacity activeOpacity={0.95} onPress={() => navigation.navigate("img")}>
          <Image
            style={{
              width: 340,
              height: 220,
              marginTop: 10,
              marginLeft: 10,
              marginRight: 10,
            }}
            source={{uri:'http://imgs.vietnamnet.vn/Images/vnn/2015/07/03/15/20150703150753-ak47.jpg'}}
          />
          </TouchableOpacity>
          <View style={{flexDirection:'row',width:320,marginLeft:20,marginRight:20,top:12}}>
            <Text style={{marginLeft:10,marginRight:10}}>2 <Foundation name="heart" size={20} color="red" /></Text>
            <Text style={{}}>10 <FontAwesome name="comment" size={20} color="red" /></Text>
          </View>
          <View style={stylehome.boderpostbottom}></View>
          <View style={{flexDirection:'row',width:320,marginLeft:20,marginRight:20,top:12}}>
            <TouchableOpacity onPress={()=>dispatch(Checklike(!checklike))} activeOpacity={0.8} style={{marginLeft:20,marginRight:10}}>
            {checklike ? <AntDesign name="hearto" size={20} color="black" />:<AntDesign name = "heart" size = {20} color = "red" />}
            </TouchableOpacity>
          </View>
          <View style={{marginBottom:16,marginTop:20,flexDirection:'row',marginLeft:24}}>
            <TextInput
              style={{
                backgroundColor: "#fff",
                width: 260,
                fontSize: 16,
                height: 24,
                borderRadius: 40,
                paddingLeft: 16,
                marginLeft: 4,
              }}
              placeholder="Bình luận của bạn"
              onChangeText={e=>dispatch(Setjob(e))}
            />
            <TouchableOpacity activeOpacity={0.8} onPress={()=>dispatch(Addcommnet(job))}>
              <Text style={{ marginLeft: 8, marginTop: 0 }}><Ionicons name="add-circle-outline" size={24} color="black" /></Text>
            </TouchableOpacity>
          </View>
        </View>
        </TouchableOpacity>

        
        {/* {typeof data !== undefined ? (
          data.map(profileuser => (
            <TouchableOpacity activeOpacity={0.9}  onPress={() => navigation.navigate("postuser")}>
        <View style={{width:360,backgroundColor:"#ccc",marginLeft:8,borderRadius:16,marginBottom:12}}>
          <View style={{flexDirection:'row'}}>
          <Image
            style={{ maxWidth: 40, maxHeight: 40, borderRadius: 40, margin: 10 }}
            source={require("../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg")}
          />
          <TouchableOpacity activeOpacity={0.2} onPress={() => navigation.navigate("Proauthor")}>
          <Text style={{top:10,fontSize:16,left:6,zIndex:2}}>Quang Hiệp</Text>
          </TouchableOpacity>
          <Text style={{top:32,left:-80,fontSize:12}}>Đã đăng 5 giờ trước</Text>
          </View>
          <View>
          <Text style={{left:12}}>7 killer</Text>
          </View>
          <TouchableOpacity activeOpacity={0.95} onPress={() => navigation.navigate("img")}>
          <Image
            style={{
              width: 340,
              height: 220,
              marginTop: 10,
              marginLeft: 10,
              marginRight: 10,
            }}
            source={{uri:'https://44s2n02i19u61od84f3rzjqx-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/AK-800x500_c.jpg'}}
          />
          </TouchableOpacity>
          <View style={{flexDirection:'row',width:320,marginLeft:20,marginRight:20,top:12}}>
            <Text style={{marginLeft:10,marginRight:10}}>2 <Foundation name="heart" size={20} color="red" /></Text>
            <Text style={{}}>10 <FontAwesome name="comment" size={20} color="red" /></Text>
          </View>
          <View style={stylehome.boderpostbottom}></View>
          <View style={{flexDirection:'row',width:320,marginLeft:20,marginRight:20,top:12}}>
            <TouchableOpacity activeOpacity={0.8} style={{marginLeft:20,marginRight:10}}>
            <AntDesign name="hearto" size={20} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{marginBottom:16,marginTop:20,flexDirection:'row',marginLeft:24}}>
            <TextInput
              style={{
                backgroundColor: "#fff",
                width: 260,
                fontSize: 16,
                height: 24,
                borderRadius: 40,
                paddingLeft: 16,
                marginLeft: 4,
              }}
              placeholder="Bình luận của bạn"
            />
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={{ marginLeft: 8, marginTop: 0 }}><Ionicons name="add-circle-outline" size={24} color="black" /></Text>
            </TouchableOpacity>
          </View>
        </View>
        </TouchableOpacity>
          ))
        ) : (
          <View>
            <Text style={{justifyContent: "center",alignItems: "center",marginTop:20}}>Hiện tại chưa có bài viết nào</Text>
          </View>
        )} */}
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeStackScreen;
