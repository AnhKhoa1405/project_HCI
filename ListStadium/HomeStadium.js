import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
// import BadmintonList from "./detailListStadium/BadmintonList";
// import BasketBallList from "./detailListStadium/BasketballList";
// import BoxingList from "./detailListStadium/BoxingList";
import FootballList from "./detailListStadium/FootballList";
// import SkatingList from "./detailListStadium/SkatingList";
// import TableTennisList from "./detailListStadium/TableTennisList";
// import TennisList from "./detailListStadium/TennisList";
// import VolleyballList from "./detailListStadium/VolleyballList";
import { Picker } from "@react-native-picker/picker";
import { Dimensions } from "react-native";
import HighRating from "../Home/detailHome/HighRating";
import BlankPitch from "../Home/detailHome/BlankPitch";
import NearHouse from "../Home/detailHome/NearHourse";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

function checkRoute(filter, name, navigation) {
  switch (name) {
    case "Bóng đá":
      return <FootballList myData={data} myFilter={filter} />;
    case "Quần vợt":
      // return <TennisList />;
      return <FootballList myData={data} myFilter={filter} />;
    case "Bóng rổ":
      // return <BasketBallList />;
      return <FootballList myData={data} myFilter={filter} />;
    case "Cầu lông":
      // return <BadmintonList />;
      return <FootballList myData={data} myFilter={filter} />;
    case "Bóng bàn":
      // return <TableTennisList />;
      return <FootballList myData={data} myFilter={filter} />;
    case "Bóng chuyền":
      // return <VolleyballList />;
      return <FootballList myData={data} myFilter={filter} />;
    case "Trượt ván":
      // return <SkatingList />;
      return <FootballList myData={data} myFilter={filter} />;
    case "Đấm bốc":
      // return <BoxingList />;
      return <FootballList myData={data} myFilter={filter} />;
  }
}

function checkFilter(filter, name) {
  switch (filter) {
    case "near":
      return (
        <View
          style={{
            paddingLeft: 16,
            paddingTop: 16,
            paddingBottom: 16,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "RobotoBlack",
              fontSize: 36,
              color: "#3ac5c9",
            }}
          >
            {name} -
          </Text>
          <Text
            style={{
              fontFamily: "RobotoBlack",
              fontSize: 24,
              color: "#3ac5c9",
              paddingLeft: 5,
              width: width / 2,
            }}
          >
            (Gần nhà)
          </Text>
        </View>
      );
    case "blank":
      return (
        <View
          style={{
            paddingLeft: 16,
            paddingTop: 16,
            paddingBottom: 16,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "RobotoBlack",
              fontSize: 32,
              color: "#3ac5c9",
            }}
          >
            {name} -
          </Text>
          <Text
            style={{
              fontFamily: "RobotoBlack",
              fontSize: 20,
              color: "#3ac5c9",
              paddingLeft: 5,
              width: width / 2,
            }}
          >
            (Sân còn trống)
          </Text>
        </View>
      );
    case "high":
      return (
        <View
          style={{
            paddingLeft: 16,
            paddingTop: 16,
            paddingBottom: 16,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "RobotoBlack",
              fontSize: 36,
              color: "#3ac5c9",
            }}
          >
            {name} -
          </Text>
          <Text
            style={{
              fontFamily: "RobotoBlack",
              fontSize: 24,
              color: "#3ac5c9",
              paddingLeft: 5,
              width: width / 3,
            }}
          >
            (Sân được đánh giá cao)
          </Text>
        </View>
      );
    case "none":
      return (
        <View
          style={{
            paddingLeft: 16,
            paddingTop: 16,
            paddingBottom: 16,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "RobotoBlack",
              fontSize: 36,
              color: "#3ac5c9",
            }}
          >
            {name}
          </Text>
        </View>
      );
  }
}

const data = [
  {
    id: 1,
    img: "https://bangsport.net/wp-content/uploads/2020/12/1200px-Panoramic_santiago_bernabeu.jpg",
    name: "Sân bóng Hoa Lư",
    address: "19 Hòa Hưng Quận Tân Bình Thành Phố HCM",
    price: "450.000",
    type: "Sân 5",
    rating: "4.6",
    distance: 0.5,
  },
  {
    id: 2,
    img: "https://top10tphcm.com/wp-content/uploads/2020/12/San-bong-da-o-go-vap-650x365.png",
    name: "Sân bóng Hoa Bắc",
    address: "33 Hòa Lạc Quận Tân Bình Thành Phố HCM",
    price: "300.000",
    type: "Sân 7",
    rating: "5",
    distance: 1.5,
  },
  {
    id: 3,
    img: "http://baoduongcanhquan.com/upload/images/hinh/trong%20co/co-nhan-tao-san-bong-da-mini.jpg",
    name: "Sân bóng Hoa Cúc",
    address: "33 Cúc Lạc Quận Tân Bình Thành Phố HN",
    price: "225.000",
    type: "Sân 11",
    rating: "3.4",
    distance: 7,
  },
  {
    id: 4,
    img: "https://iweb.tatthanh.com.vn/pic/12/news/campnou.jpg",
    name: "Sân bóng Hoa Lan",
    address: "33 Lan Lạc Quận Tân Bình Thành Phố HN",
    price: "113.000",
    type: "Sân 7",
    rating: "2.3",
    distance: 1.3,
  },
  {
    id: 5,
    img: "https://photo-cms-giaoduc.zadn.vn/w700/Uploaded/2021/qxjwpzdjw/2012_02_07/gdvn-choang-ngop-ve-dep-san-van-dong-qatar-world-cup-2022-4.jpg",
    name: "Sân bóng Hoa Đồng Tiền",
    address: "33 Đồng Xu Quận Tân Cổ Thành Phố Trang Trí",
    price: "450.000",
    type: "Sân 5",
    rating: "4.3",
    distance: 4,
  },
  {
    id: 6,
    img: "https://thethaovn365.com/wp-content/uploads/2018/11/san-old-trafford-nha-hat-cua-nhung-giac-mo.jpg",
    name: "Sân bóng Đồng Xu",
    address: "33 Xeo Xủ Quận Tân Trang Thành Phố Giải Trí",
    price: "400.000",
    type: "Sân 11",
    rating: "2.1",
    distance: 3.1,
  },
  {
    id: 7,
    img: "https://media.travelmag.vn/files/thucquyen/2020/06/18/dejkitjxuair_f8-125922.jpg",
    name: "Sân bóng Cổ Đại",
    address: "33 Hy Lạp Quận EU Thành Phố UE",
    price: "140.000",
    type: "Sân 7",
    rating: "4.1",
    distance: 2.2,
  },
  {
    id: 8,
    img: "https://htsport.vn/wp-content/uploads/2019/12/25-kich-thuoc-san-bong-7-nguoi-2.jpg",
    name: "Sân bóng Chảo Dầu",
    address: "33 Hồ Sen Quận Lai Châu Thành Phố HN",
    price: "350.000",
    type: "Sân 7",
    rating: "5",
    distance: 1.2,
  },
  {
    id: 9,
    img: "https://toplist.vn/images/800px/nou-camp-tay-ban-nha-623181.jpg",
    name: "Sân bóng Dầu Khí",
    address: "33 Vĩnh Viễn Quận Vĩnh Thành Phố Viễn",
    price: "1.200.000",
    type: "Sân 11",
    rating: "4.3",
    distance: 0.7,
  },
  {
    id: 10,
    img: "https://hanoifootball.vn/data/source/nhung-san-bong-da-lon-nhat-the-gioi-2.jpg",
    name: "Sân bóng Hải Quan",
    address: "33 Bơi Lội Quận Cầu Lông Thành Phố Cờ Tướng",
    price: "750.000",
    type: "Sân 5",
    rating: "2.3",
    distance: 2.7,
  },
  {
    id: 11,
    img: "https://bangsport.net/wp-content/uploads/2020/12/1200px-Panoramic_santiago_bernabeu.jpg",
    name: "Sân bóng Hoa Lư",
    address: "19 Hòa Hưng Quận Tân Bình Thành Phố HCM",
    price: "440.000",
    type: "Sân 5",
    rating: "4.6",
    distance: 0.5,
  },
  {
    id: 12,
    img: "https://top10tphcm.com/wp-content/uploads/2020/12/San-bong-da-o-go-vap-650x365.png",
    name: "Sân bóng Hoa Bắc",
    address: "33 Hòa Lạc Quận Tân Bình Thành Phố HCM",
    price: "500.000",
    type: "Sân 7",
    rating: "5",
    distance: 1.5,
  },
  {
    id: 13,
    img: "http://baoduongcanhquan.com/upload/images/hinh/trong%20co/co-nhan-tao-san-bong-da-mini.jpg",
    name: "Sân bóng Hoa Cúc",
    address: "33 Cúc Lạc Quận Tân Bình Thành Phố HN",
    price: "360.00",
    type: "Sân 7",
    rating: "3.4",
    distance: 7,
  },
  {
    id: 14,
    img: "https://iweb.tatthanh.com.vn/pic/12/news/campnou.jpg",
    name: "Sân bóng Hoa Lan",
    address: "33 Lan Lạc Quận Tân Bình Thành Phố HN",
    price: "180.000",
    type: "Sân 7",
    rating: "2.3",
    distance: 1.3,
  },
  {
    id: 15,
    img: "https://photo-cms-giaoduc.zadn.vn/w700/Uploaded/2021/qxjwpzdjw/2012_02_07/gdvn-choang-ngop-ve-dep-san-van-dong-qatar-world-cup-2022-4.jpg",
    name: "Sân bóng Hoa Đồng Tiền",
    address: "33 Đồng Xu Quận Tân Cổ Thành Phố Trang Trí",
    price: "110.000",
    type: "Sân 5",
    rating: "4.3",
    distance: 4,
  },
  {
    id: 16,
    img: "https://thethaovn365.com/wp-content/uploads/2018/11/san-old-trafford-nha-hat-cua-nhung-giac-mo.jpg",
    name: "Sân bóng Đồng Xu",
    address: "33 Xeo Xủ Quận Tân Trang Thành Phố Giải Trí",
    price: "220.000",
    type: "Sân 11",
    rating: "2.1",
    distance: 3.1,
  },
  {
    id: 17,
    img: "https://media.travelmag.vn/files/thucquyen/2020/06/18/dejkitjxuair_f8-125922.jpg",
    name: "Sân bóng Cổ Đại",
    address: "33 Hy Lạp Quận EU Thành Phố UE",
    price: "120.000",
    type: "Sân 5",
    rating: "4.1",
    distance: 2.2,
  },
  {
    id: 18,
    img: "https://htsport.vn/wp-content/uploads/2019/12/25-kich-thuoc-san-bong-7-nguoi-2.jpg",
    name: "Sân bóng Chảo Dầu",
    address: "33 Hồ Sen Quận Lai Châu Thành Phố HN",
    price: "320.000",
    type: "Sân 5",
    rating: "5",
    distance: 1.2,
  },
  {
    id: 19,
    img: "https://toplist.vn/images/800px/nou-camp-tay-ban-nha-623181.jpg",
    name: "Sân bóng Dầu Khí",
    address: "33 Vĩnh Viễn Quận Vĩnh Thành Phố Viễn",
    price: "450.000",
    type: "Sân 7",
    rating: "4.3",
    distance: 0.7,
  },
  {
    id: 20,
    img: "https://hanoifootball.vn/data/source/nhung-san-bong-da-lon-nhat-the-gioi-2.jpg",
    name: "Sân bóng Hải Quan",
    address: "33 Bơi Lội Quận Cầu Lông Thành Phố Cờ Tướng",
    price: "230.000",
    type: "Sân 7",
    rating: "2.3",
    distance: 2.7,
  },
];

export default function HomeStadium({ navigation, route }) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>{checkFilter(route.params.filter, route.params.name)}</View>
        {checkRoute(route.params.filter, route.params.name, navigation)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 5,
  },
});
