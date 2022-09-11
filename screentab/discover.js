import React, { useReducer } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  SafeAreaView,
} from "react-native";
import { stylelike } from "../style/stylelike";
import { SimpleLineIcons } from '@expo/vector-icons'; 
import  Reduce  from "../reducer/reduce";
import { init } from "../reducer/init";
import {Checkfollow} from "../reducer/output"

function LikeStackScreen() {
  const [state, dispatch] = useReducer(Reduce, init);
  const {checkFollow,checklike,Checkcomment,job,Jobs,numberlike,numbercomment,author,addImg} = state
  return (
    <SafeAreaView style={{paddingBottom:20,marginBottom:100,flex:1}}>
      <View style={stylelike.textcenter}>
        <Text style={stylelike.textcenter}>Khám Phá</Text>
      </View>
      <ScrollView>
        <View style={stylelike.view}>
          <Image
            style={{ width: 40, height: 40, borderRadius: 40, margin: 10 }}
            source={require("../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg")}
          />
          <Text style={stylelike.textname}>Quang Hiệp</Text>
          <View style={{top:-10,left:280}}>
            <TouchableOpacity
              onPress={() => dispatch(Checkfollow(!checkFollow))}
              activeOpacity={0.8}
              style={stylelike.handlelike}
            >{checkFollow ? <SimpleLineIcons name="user-following" size={20} color="green" /> :<SimpleLineIcons name = "user-follow" size = {20} color = "black" />}   
            </TouchableOpacity>
          </View>
          <Text style={stylelike.textstatus}>Đã đăng 5 giờ trước</Text>
          <Text style={stylelike.textstatus_Block}>Hôm nay thật là vui</Text>
          <Image
            style={{
              width: 340,
              height: 220,
              marginTop: 10,
              marginLeft: 10,
              marginRight: 10,
            }}
            source={require("../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg")}
          />
        </View>
        
        {/* {typeof data !== undefined ? (
          data.map(() => (
            <View style={stylelike.view}>
              <Image
                style={{ width: 40, height: 40, borderRadius: 40, margin: 10 }}
                source={require("../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg")}
              />
              <Text style={stylelike.textname}>Quang Hiệp</Text>
              <Text style={stylelike.textstatus}>Đã đăng 5 giờ trước</Text>
              <Text style={stylelike.textstatus_Block}>
                Hôm nay thật là vui
              </Text>
              <Image />
              <View style={stylelike.handleblock}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={stylelike.handlelike}
                >
                  <Text>Bỏ thích</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={stylelike.handlecomment}
                >
                  <Text>Bình luận</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={stylelike.handleshare}
                >
                  <Text>Chia sẻ</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <View>
            <Text style={{justifyContent: "center",alignItems: "center",marginTop:20}}>Bạn chưa thích bài viết nào</Text>
          </View>
        )} */}
      </ScrollView>
    </SafeAreaView>
  );
}
export default LikeStackScreen;
