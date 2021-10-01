import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import {
  MaterialCommunityIcons,
  AntDesign,
  Entypo,
  FontAwesome5,
} from "@expo/vector-icons";
import { useFonts } from "expo-font";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

const data = [
  {
    id: 1,
    img: "https://bangsport.net/wp-content/uploads/2020/12/1200px-Panoramic_santiago_bernabeu.jpg",
    name: "Sân bóng Hoa Lư",
    address: "19 Hòa Hưng Quận Tân Bình Thành Phố HCM",
    price: "450.000",
    type: "5 vs 5",
    rating: "4.6",
    distance: 0.5,
  },
  {
    id: 2,
    img: "https://top10tphcm.com/wp-content/uploads/2020/12/San-bong-da-o-go-vap-650x365.png",
    name: "Sân bóng Hoa Bắc",
    address: "33 Hòa Lạc Quận Tân Bình Thành Phố HCM",
    price: "300.000",
    type: "7 vs 7",
    rating: "5.0",
    distance: 1.5,
  },
  {
    id: 3,
    img: "http://baoduongcanhquan.com/upload/images/hinh/trong%20co/co-nhan-tao-san-bong-da-mini.jpg",
    name: "Sân bóng Hoa Cúc",
    address: "71 Cúc Lạc Quận Tân Bình Thành Phố HN",
    price: "225.000",
    type: "11 vs 11",
    rating: "3.4",
    distance: 7,
  },
  {
    id: 4,
    img: "https://iweb.tatthanh.com.vn/pic/12/news/campnou.jpg",
    name: "Sân bóng Hoa Lan",
    address: "56 Lan Lạc Quận Tân Bình Thành Phố HN",
    price: "113.000",
    type: "7 vs 7",
    rating: "2.3",
    distance: 1.3,
  },
  {
    id: 5,
    img: "https://photo-cms-giaoduc.zadn.vn/w700/Uploaded/2021/qxjwpzdjw/2012_02_07/gdvn-choang-ngop-ve-dep-san-van-dong-qatar-world-cup-2022-4.jpg",
    name: "Sân bóng Hoa Đồng Tiền",
    address: "88 Đồng Xu Quận Tân Cổ Thành Phố Trang Trí",
    price: "450.000",
    type: "5 vs 5",
    rating: "4.3",
    distance: 4,
  },
  {
    id: 6,
    img: "https://thethaovn365.com/wp-content/uploads/2018/11/san-old-trafford-nha-hat-cua-nhung-giac-mo.jpg",
    name: "Sân bóng Đồng Xu",
    address: "232 Xeo Xủ Quận Tân Trang Thành Phố Giải Trí",
    price: "400.000",
    type: "11 vs 11",
    rating: "2.1",
    distance: 3.1,
  },
  {
    id: 7,
    img: "https://media.travelmag.vn/files/thucquyen/2020/06/18/dejkitjxuair_f8-125922.jpg",
    name: "Sân bóng Cổ Đại",
    address: "777 Hy Lạp Quận EU Thành Phố UE",
    price: "140.000",
    type: "7 vs 7",
    rating: "4.1",
    distance: 2.2,
  },
  {
    id: 8,
    img: "https://htsport.vn/wp-content/uploads/2019/12/25-kich-thuoc-san-bong-7-nguoi-2.jpg",
    name: "Sân bóng Chảo Dầu",
    address: "222 Hồ Sen Quận Lai Châu Thành Phố HN",
    price: "350.000",
    type: "7 vs 7",
    rating: "5.0",
    distance: 1.2,
  },
];

function renderDisplay(navigation) {
  return data.map((element) => {
    return (
      <View
        key={element.id}
        style={{
          flexDirection: "column",
          paddingBottom: 10,
          paddingTop: 10,
          borderWidth: 1,
          borderStyle: "dotted",
          borderColor: "transparent",
          borderBottomColor: "#BCC0C3",
        }}
      >
        <View
          style={{
            paddingRight: width / 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View>
            <Image
              style={{
                width: width / 4,
                height: width / 4,
                resizeMode: "stretch",
                borderRadius: 10,
              }}
              source={{
                uri: element.img,
              }}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("DetailStadium");
              }}
            >
              <Text
                style={{
                  fontStyle: "italic",
                  textDecorationLine: "underline",
                  fontSize: 18,
                  color: "black",
                  fontFamily: "RobotoBlack",
                  fontWeight: "700",
                  textAlign: "center",
                  marginTop: 10,
                }}
              >
                Xem thêm
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ paddingLeft: 10 }}>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <MaterialCommunityIcons
                  style={{ marginRight: 5 }}
                  name="check-decagram"
                  size={20}
                  color="green"
                />
                <Text
                  style={{
                    fontSize: 16,
                    width: width / 2,
                    fontFamily: "RobotoBlack",
                  }}
                >
                  {element.name}
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AntDesign name="star" size={20} color="#F7B603" />
                <Text style={{ fontSize: 16, marginLeft: 5 }}>
                  {element.rating}
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Entypo name="map" color="#3ac5c9" size={22} />
              <Text
                style={{
                  flex: 1,
                  width: width / 2,
                  fontFamily: "RototoMedium",
                  paddingLeft: 8,
                  marginTop: 4,
                }}
              >
                {element.address}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 2,
                marginBottom: 2,
              }}
            >
              <MaterialCommunityIcons
                name="soccer-field"
                color="#3ac5c9"
                style={{ marginRight: 7, fontSize: 25 }}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "RototoMedium",
                }}
              >
                {element.type}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "baseline",
                }}
              >
                <FontAwesome5
                  name="money-bill"
                  color="#3ac5c9"
                  size={20}
                  style={{ marginRight: 7 }}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "RototoMedium",
                  }}
                >
                  {element.price} vnđ / 1h
                </Text>
              </View>

              <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                <Entypo name="location-pin" size={20} color="#3ac5c9" />
                <Text
                  style={{
                    fontSize: 16,
                    marginLeft: 2,
                    color: "#969EA6",
                    fontFamily: "RobotoBlack",
                  }}
                >
                  {element.distance} km
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                width: width / 1.5,
                paddingTop: 8,
                paddingBottom: 8,
                marginTop: 8,
                borderWidth: 1,
                borderRadius: 5,
                // borderColor: "red",
                borderWidth: 2,
                borderColor: "#3ac5c9",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 16,
                  fontFamily: "RobotoMedium",
                  color: "#3ac5c9",
                  fontWeight: "700",
                }}
              >
                Đặt sân ngay
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  });
}

export default function AnotherSales(props) {
  const [loaded] = useFonts({
    RobotoBlack: require("../../assets/fonts/Roboto-Black.ttf"),
    RobotoThin: require("../../assets/fonts/Roboto-Thin.ttf"),
    RobotoMedium: require("../../assets/fonts/Roboto-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text
          style={{
            ...styles.solganText,
            fontFamily: "RobotoBlack",
            fontSize: 20,
          }}
        >
          Có thể bạn sẽ thích?
        </Text>
        {renderDisplay(props.title)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  view: {
    width: width / 1.1,
    marginLeft: 10,
  },
  solganText: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 15,
  },
});
