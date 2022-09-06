import * as React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import Addpost from "../component/addpost";
import { stylehome } from "../style/stylehome";
import { useState } from "react";

function HomeStackScreen() {
  const [headerShown, setHeaderShown] = useState(true);
  const [addpost, Setaddpost] = useState(false);
  return (
    <View>
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
          <Text style={stylehome.textname}>Quang Hiệp</Text>
          <Text style={stylehome.textstatus}>Đã đăng 5 giờ trước</Text>
          <Text style={stylehome.textstatus_Block}>Hôm nay thật là vui</Text>
          <Image />
          <View style={stylehome.handleblock}>
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
        </View>
        {/* {typeof data !== undefined ? (
          data.map(profileuser => (
            <View style={stylehome.view}>
              <Image
                style={{ width: 40, height: 40, borderRadius: 40, margin: 10 }}
                source={require("../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg")}
              />
              <Text style={stylehome.textname}>Quang Hiệp</Text>
              <Text style={stylehome.textstatus}>Đã đăng 5 giờ trước</Text>
              <Text style={stylehome.textstatus_Block}>
                Hôm nay thật là vui
              </Text>
              <Image />
              <View style={stylehome.handleblock}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={stylehome.handlelike}
                >
                  <Text>Thích</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={stylehome.handlecomment}
                >
                  <Text>Bình luận</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={stylehome.handleshare}
                >
                  <Text>Chia sẻ</Text>
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
    </View>
  );
}

export default HomeStackScreen;
