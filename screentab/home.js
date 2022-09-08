import * as React from "react";
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
import Addpost from "../component/addpost";
import { stylehome } from "../style/stylehome";
import { useState } from "react";

function HomeStackScreen() {
  const [headerShown, setHeaderShown] = useState(true);
  const [addpost, Setaddpost] = useState(false);
  return (
    <SafeAreaView>
      {addpost && <Addpost Setaddpost={Setaddpost} addpost={addpost} />}
      <View style={stylehome.projectuse}>
        <Image
          style={{ width: 60, height: 60, borderRadius: 40 }}
          source={require("../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg")}
        />
        <Text style={stylehome.textname}>Xin Chào Quang Hiệp</Text>
        <Text style={stylehome.textstatus}>Hôm nay có 2 bài viết mới</Text>
      </View>
      {headerShown && (
        <>
          <TouchableOpacity
            activeOpacity={0.8}
            style={stylehome.addporst}
            onPress={() => Setaddpost(!addpost)}
          >
            <Text>Bạn đang nghĩ gì ?</Text>
          </TouchableOpacity>
          <View style={stylehome.textstatus_Block}>
            <Text style={stylehome.textadd}>Bài viết mới:</Text>
          </View>
        </>
      )}
      <ScrollView
        onScroll={(event) => {
          const scrolling = event.nativeEvent.contentOffset.y;

          if (scrolling > 4) {
            setHeaderShown(false);
          } else {
            setHeaderShown(true);
          }
        }}
      >
        <View style={stylehome.view}>
          <Image
            style={{ width: 40, height: 40, borderRadius: 40, margin: 10 }}
            source={require("../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg")}
          />
          <TouchableOpacity style={stylehome.handlefollow} activeOpacity={0.8}>
            <Text style={stylehome.handletextfollow}>+</Text>
          </TouchableOpacity>
          <Text style={stylehome.textname}>Quang Hiệp</Text>
          <Text style={stylehome.textstatus}>Đã đăng 5 giờ trước</Text>
          <Text style={stylehome.textstatus_Block}>Hôm nay thật là vui</Text>

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
          <View style={stylehome.numberhandle}>
            <Text style={stylehome.numberlike}>2 Thích</Text>
            <Text style={stylehome.numbercomment}>10 Bình luận</Text>
            <Text style={stylehome.numbershare}>2 Chia sẻ</Text>
          </View>
          <View style={stylehome.boderpostbottom}></View>
          <View style={stylehome.numberhandle}>
            <TouchableOpacity activeOpacity={0.8} style={stylehome.handlelike}>
              <Text>Thích</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={stylehome.handlecomment}
            >
              <Text>Bình luận</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} style={stylehome.handleshare}>
              <Text>Chia sẻ</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: 346,
              height: 80,
              marginTop: 12,
              marginLeft: 8,
              backgroundColor: "#fff",
              borderRadius: 4,
            }}
          >
            <Image
              style={{ width: 48, height: 48, borderRadius: 40, margin: 16 }}
              source={require("../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg")}
            />
            <Text style={{ position: "absolute", top: 20, left: 76 }}>
              Quang Hiep
            </Text>
            <Text style={{ position: "absolute", top: 40, left: 76 }}>
              hahsasdawdwdwa
            </Text>
            <TouchableOpacity
              style={{ position: "absolute", top: 60, left: 80 }}
            >
              <Text>Like</Text>
            </TouchableOpacity>
          </View>
          <View style={stylehome.commentadd}>
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
              <Text style={{ marginLeft: 8, marginTop: 4 }}>Bình luận</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* {typeof data !== undefined ? (
          data.map(profileuser => (
            <View style={stylehome.view}>
          <Image
            style={{ width: 40, height: 40, borderRadius: 40, margin: 10 }}
            source={require("../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg")}
          />
          <TouchableOpacity style={stylehome.handlefollow} activeOpacity={0.8}>
            <Text style={stylehome.handletextfollow}>+</Text>
          </TouchableOpacity>
          <Text style={stylehome.textname}>Quang Hiệp</Text>
          <Text style={stylehome.textstatus}>Đã đăng 5 giờ trước</Text>
          <Text style={stylehome.textstatus_Block}>Hôm nay thật là vui</Text>

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
          <View style={stylehome.numberhandle}>
            <Text style={stylehome.numberlike}>2 Thích</Text>
            <Text style={stylehome.numbercomment}>10 Bình luận</Text>
            <Text style={stylehome.numbershare}>2 Chia sẻ</Text>
          </View>
          <View style={stylehome.boderpostbottom}></View>
          <View style={stylehome.numberhandle}>
            <TouchableOpacity activeOpacity={0.8} style={stylehome.handlelike}>
              <Text>Thích</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={stylehome.handlecomment}
            >
              <Text>Bình luận</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} style={stylehome.handleshare}>
              <Text>Chia sẻ</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: 346,
              height: 80,
              marginTop: 12,
              marginLeft: 8,
              backgroundColor: "#fff",
              borderRadius: 4,
            }}
          >
            <Image
              style={{ width: 48, height: 48, borderRadius: 40, margin: 16 }}
              source={require("../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg")}
            />
            <Text style={{ position: "absolute", top: 20, left: 76 }}>
              Quang Hiep
            </Text>
            <Text style={{ position: "absolute", top: 40, left: 76 }}>
              hahsasdawdwdwa
            </Text>
            <TouchableOpacity
              style={{ position: "absolute", top: 60, left: 80 }}
            >
              <Text>Like</Text>
            </TouchableOpacity>
          </View>
          <View style={stylehome.commentadd}>
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
              <Text style={{ marginLeft: 8, marginTop: 4 }}>Bình luận</Text>
            </TouchableOpacity>
          </View>
        </View>
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
