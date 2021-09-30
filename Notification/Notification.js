import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import { Dimensions } from "react-native";
import { useFonts } from "expo-font";
import { TouchableOpacity } from "react-native-gesture-handler";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height
const dataNoti = [
  {
    code: "CHATLUONG",
    name: "Sân Hoa Lư vừa khai trương có lẽ bạn sẽ quan tâm",
    src: require("../assets/tuimg/news.png"),
    time: "bây giờ",
  },
  {
    code: "TIENNHIEU",
    name: "Còn 30 phút nữa là tới giờ mà bạn đã đặt sân",
    src: require("../assets/tuimg/news.png"),
    time: "1 phút",
  },
  {
    code: "CHOFREE",
    name: "Sân Chảo Lửa đang giảm giá có lẽ bạn sẽ thích",
    src: require("../assets/khoaimg/discount.png"),
    time: "1 phút",
  },
  {
    code: "CUOITUAN",
    name: "Đặt sân bóng rổ Hoa Lư thành công",
    src: require("../assets/tuimg/success.png"),
    time: "30 phút",
  },
  {
    code: "GIUATUAN",
    name: "Sân Bình Quới đang giảm giá có lẽ bạn sẽ thích",
    src: require("../assets/khoaimg/discount.png"),
    time: "45 phút",
  },
  {
    code: "TRUNGTHU",
    name: "Đã có bảng cập nhất mới cho ứng dung đặt sân",
    src: require("../assets/tuimg/news.png"),
    time: "2 giờ",
  },
  {
    code: "NHAGIAOVIETNAM",
    name: "Hủy đặt sân Thống Nhất thành công",
    src: require("../assets/tuimg/unsuccess.png"),
    time: "3 giờ",
  },
  {
    code: "NOEL",
    name: "Còn 30 phút nữa là tới giờ mà bạn đã đặt sân",
    src: require("../assets/tuimg/news.png"),
    time: "3 giờ",
  },
  {
    code: "CUOITUANTHUGIAN",
    name: "Sân Hoa Lư vừa khai trương có lẽ bạn sẽ quan tâm",
    src: require("../assets/tuimg/news.png"),
    time: "1 ngày",
  },
  {
    code: "GIAMGIASOC",
    name: "Sân Thăng Long vừa khai trương có lẽ bạn sẽ thích",
    src: require("../assets/tuimg/news.png"),
    time: "2 ngày",
  },
];
function renderData() {
  return dataNoti.map((element) => {
    return (
      <View key={element.code} style={{ backgroundColor: "#eff3f6" }}>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              width: width,
              paddingTop: 10,
              paddingBottom: 10,
              alignItems: "center",
              paddingLeft: 16,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flex: 2,
                backgroundColor: "white",
                borderWidth: 5,
                borderRightColor: "white",
                borderBottomColor: "white",
                borderTopColor: "white",
                borderLeftColor: "#3AC5C9",
                borderRadius: 5,
                paddingLeft: 16,
                width: width / 4,
                flexDirection: "row",
                position: "relative",
              }}
            >
              <Image
                style={{
                  marginTop: 2,
                  width: width / 5,
                  height: width / 5,
                }}
                source={element.src}
              />
              <View
                style={{
                  paddingLeft: 15,
                }}
              >
                <Text
                  style={{
                    width: width / 2,
                    fontSize: 12,
                    fontFamily: "RobotoMedium",
                    lineHeight: 16,
                  }}
                >
                  Bạn có 1 thông báo mới
                </Text>
                <Text
                  style={{
                    width: width / 2,
                    marginTop: 2,
                    fontSize: 15,
                    fontFamily: "RobotoBlack",
                  }}
                >
                  {element.name}
                </Text>
                <Text
                  style={{
                    width: width / 2,
                    marginTop: 5,
                    fontSize: 12,
                    fontFamily: "RobotoMedium",
                  }}
                >
                  {element.time}
                </Text>
              </View>
              <Image
                source={require("../assets/tuimg/menu.png")}
                style={{
                  position: "absolute",
                  top: 40,
                  right: 20,
                  width: 20,
                  height: 20,
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  });
}
export default function Notification() {
  const [loaded] = useFonts({
    RobotoBlack: require("../assets/fonts/Roboto-Black.ttf"),
    RobotoThin: require("../assets/fonts/Roboto-Light.ttf"),
    RobotoMedium: require("../assets/fonts/Roboto-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingTop: 30,
          paddingBottom: 10,
          backgroundColor: "white",
          borderBottomWidth: 1,
          borderBottomColor: "#3AC5C9",
        }}
      >
        <Text
          style={{
            fontSize: 24,
            textAlign: "center",
            width: width,
            marginTop: 10,
            fontFamily: "RobotoMedium",
            color: "#3AC5C9",
          }}
        >
          Thông báo
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 70 }}
      >
        {renderData()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
