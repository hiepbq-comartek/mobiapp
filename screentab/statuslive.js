import * as React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { stylelike } from "../style/stylelike";
function LikeStackScreen() {
  return (
    <View>
      <ScrollView>
        <View style={stylelike.view}>
          <Image
            style={{ width: 40, height: 40, borderRadius: 40, margin: 10 }}
            source={require("../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg")}
          />
          <Text style={stylelike.textname}>Quang Hiệp</Text>
          <Text style={stylelike.textstatus}>Đã đăng 5 giờ trước</Text>
          <Text style={stylelike.textstatus_Block}>Hôm nay thật là vui</Text>
          <Image />
          <View style={stylelike.handleblock}>
            <TouchableOpacity
              onPress={() => Alert.alert("test")}
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

            <TouchableOpacity activeOpacity={0.8} style={stylelike.handleshare}>
              <Text>Chia sẻ</Text>
            </TouchableOpacity>
          </View>
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
    </View>
  );
}
export default LikeStackScreen;
