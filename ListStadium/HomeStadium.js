import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import BadmintonList from "./detailListStadium/BadmintonList";
import BasketBallList from "./detailListStadium/BasketballList";
import BoxingList from "./detailListStadium/BoxingList";
import FootballList from "./detailListStadium/FootballList";
import SkatingList from "./detailListStadium/SkatingList";
import TableTennisList from "./detailListStadium/TableTennisList";
import TennisList from "./detailListStadium/TennisList";
import VolleyballList from "./detailListStadium/VolleyballList";
import { Picker } from "@react-native-picker/picker";
import { Dimensions } from "react-native";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

function checkRoute(name) {
  switch (name) {
    case "Football":
      return <FootballList myData={data} />;
    case "Tennis":
      // return <TennisList />;
      return <FootballList myData={data} />;
    case "Basketball":
      // return <BasketBallList />;
      return <FootballList myData={data} />;
    case "Badminton":
      // return <BadmintonList />;
      return <FootballList myData={data} />;
    case "Table Te...":
      // return <TableTennisList />;
      return <FootballList myData={data} />;
    case "Volleyball":
      // return <VolleyballList />;
      return <FootballList myData={data} />;
    case "Skating":
      // return <SkatingList />;
      return <FootballList myData={data} />;
    case "Boxing":
      // return <BoxingList />;
      return <FootballList myData={data} />;
  }
}

const data = [
  {
    id: 1,
    img: "https://bangsport.net/wp-content/uploads/2020/12/1200px-Panoramic_santiago_bernabeu.jpg",
    name: "Sân bóng Hoa Lư",
    address: "19 Hòa Hưng Quận Tân Bình Thành Phố HCM",
    description: "Cung cấp đầy đủ các chức năng về đặt sân bóng đá cao cấp ",
    rating: "4.6",
    peopleParticipation: 555,
    distance: 0.5,
  },
  {
    id: 2,
    img: "https://top10tphcm.com/wp-content/uploads/2020/12/San-bong-da-o-go-vap-650x365.png",
    name: "Sân bóng Hoa Bắc",
    address: "33 Hòa Lạc Quận Tân Bình Thành Phố HCM",
    description: "Cung cấp các sân khác nhau như sân 3, sân 5, sân 7",
    rating: "5",
    peopleParticipation: 333,
    distance: 1.5,
  },
  {
    id: 3,
    img: "http://baoduongcanhquan.com/upload/images/hinh/trong%20co/co-nhan-tao-san-bong-da-mini.jpg",
    name: "Sân bóng Hoa Cúc",
    address: "33 Cúc Lạc Quận Tân Bình Thành Phố HN",
    description: "Có sẵn đảm bảo chất lượng bật nhất HN",
    rating: "3.4",
    peopleParticipation: 123,
    distance: 7,
  },
  {
    id: 4,
    img: "https://iweb.tatthanh.com.vn/pic/12/news/campnou.jpg",
    name: "Sân bóng Hoa Lan",
    address: "33 Lan Lạc Quận Tân Bình Thành Phố HN",
    description: "Có rất nhiều lựa chọn cho khách hàng và cả khuyến mãi",
    rating: "2.3",
    peopleParticipation: 467,
    distance: 1.3,
  },
  {
    id: 5,
    img: "https://photo-cms-giaoduc.zadn.vn/w700/Uploaded/2021/qxjwpzdjw/2012_02_07/gdvn-choang-ngop-ve-dep-san-van-dong-qatar-world-cup-2022-4.jpg",
    name: "Sân bóng Hoa Đồng Tiền",
    address: "33 Đồng Xu Quận Tân Cổ Thành Phố Trang Trí",
    description:
      "Bao mê , bao phê với nhiều sân chất lượng cộng thêm ưu đã ngút ngàn",
    rating: "4.3",
    peopleParticipation: 222,
    distance: 4,
  },
  {
    id: 6,
    img: "https://thethaovn365.com/wp-content/uploads/2018/11/san-old-trafford-nha-hat-cua-nhung-giac-mo.jpg",
    name: "Sân bóng Đồng Xu",
    address: "33 Xeo Xủ Quận Tân Trang Thành Phố Giải Trí",
    description: "Đã vào sân là không bao giờ dừng lại, chiến hết mình",
    rating: "2.1",
    peopleParticipation: 666,
    distance: 3.1,
  },
  {
    id: 7,
    img: "https://media.travelmag.vn/files/thucquyen/2020/06/18/dejkitjxuair_f8-125922.jpg",
    name: "Sân bóng Cổ Đại",
    address: "33 Hy Lạp Quận EU Thành Phố UE",
    description: "Sống hết mình vì trái bóng tròn vo",
    rating: "4.1",
    peopleParticipation: 543,
    distance: 2.2,
  },
  {
    id: 8,
    img: "https://htsport.vn/wp-content/uploads/2019/12/25-kich-thuoc-san-bong-7-nguoi-2.jpg",
    name: "Sân bóng Chảo Dầu",
    address: "33 Hồ Sen Quận Lai Châu Thành Phố HN",
    description: "Đã vào sân là không nói tới tình nghĩa anh em",
    rating: "5",
    peopleParticipation: 988,
    distance: 1.2,
  },
  {
    id: 9,
    img: "https://toplist.vn/images/800px/nou-camp-tay-ban-nha-623181.jpg",
    name: "Sân bóng Dầu Khí",
    address: "33 Vĩnh Viễn Quận Vĩnh Thành Phố Viễn",
    description: "Đá banh thì gạt banh chứ đừng có gạt cái giò tao",
    rating: "4.3",
    peopleParticipation: 231,
    distance: 0.7,
  },
  {
    id: 10,
    img: "https://hanoifootball.vn/data/source/nhung-san-bong-da-lon-nhat-the-gioi-2.jpg",
    name: "Sân bóng Hải Quan",
    address: "33 Bơi Lội Quận Cầu Lông Thành Phố Cờ Tướng",
    description: "Trái bóng tròn là niềm đam mê",
    rating: "2.3",
    peopleParticipation: 121,
    distance: 2.7,
  },
  {
    id: 11,
    img: "https://bangsport.net/wp-content/uploads/2020/12/1200px-Panoramic_santiago_bernabeu.jpg",
    name: "Sân bóng Hoa Lư",
    address: "19 Hòa Hưng Quận Tân Bình Thành Phố HCM",
    description: "Cung cấp đầy đủ các chức năng về đặt sân bóng đá cao cấp ",
    rating: "4.6",
    peopleParticipation: 555,
    distance: 0.5,
  },
  {
    id: 12,
    img: "https://top10tphcm.com/wp-content/uploads/2020/12/San-bong-da-o-go-vap-650x365.png",
    name: "Sân bóng Hoa Bắc",
    address: "33 Hòa Lạc Quận Tân Bình Thành Phố HCM",
    description: "Cung cấp các sân khác nhau như sân 3, sân 5, sân 7",
    rating: "5",
    peopleParticipation: 333,
    distance: 1.5,
  },
  {
    id: 13,
    img: "http://baoduongcanhquan.com/upload/images/hinh/trong%20co/co-nhan-tao-san-bong-da-mini.jpg",
    name: "Sân bóng Hoa Cúc",
    address: "33 Cúc Lạc Quận Tân Bình Thành Phố HN",
    description: "Có sẵn đảm bảo chất lượng bật nhất HN",
    rating: "3.4",
    peopleParticipation: 123,
    distance: 7,
  },
  {
    id: 14,
    img: "https://iweb.tatthanh.com.vn/pic/12/news/campnou.jpg",
    name: "Sân bóng Hoa Lan",
    address: "33 Lan Lạc Quận Tân Bình Thành Phố HN",
    description: "Có rất nhiều lựa chọn cho khách hàng và cả khuyến mãi",
    rating: "2.3",
    peopleParticipation: 467,
    distance: 1.3,
  },
  {
    id: 15,
    img: "https://photo-cms-giaoduc.zadn.vn/w700/Uploaded/2021/qxjwpzdjw/2012_02_07/gdvn-choang-ngop-ve-dep-san-van-dong-qatar-world-cup-2022-4.jpg",
    name: "Sân bóng Hoa Đồng Tiền",
    address: "33 Đồng Xu Quận Tân Cổ Thành Phố Trang Trí",
    description:
      "Bao mê , bao phê với nhiều sân chất lượng cộng thêm ưu đã ngút ngàn",
    rating: "4.3",
    peopleParticipation: 222,
    distance: 4,
  },
  {
    id: 16,
    img: "https://thethaovn365.com/wp-content/uploads/2018/11/san-old-trafford-nha-hat-cua-nhung-giac-mo.jpg",
    name: "Sân bóng Đồng Xu",
    address: "33 Xeo Xủ Quận Tân Trang Thành Phố Giải Trí",
    description: "Đã vào sân là không bao giờ dừng lại, chiến hết mình",
    rating: "2.1",
    peopleParticipation: 666,
    distance: 3.1,
  },
  {
    id: 17,
    img: "https://media.travelmag.vn/files/thucquyen/2020/06/18/dejkitjxuair_f8-125922.jpg",
    name: "Sân bóng Cổ Đại",
    address: "33 Hy Lạp Quận EU Thành Phố UE",
    description: "Sống hết mình vì trái bóng tròn vo",
    rating: "4.1",
    peopleParticipation: 543,
    distance: 2.2,
  },
  {
    id: 18,
    img: "https://htsport.vn/wp-content/uploads/2019/12/25-kich-thuoc-san-bong-7-nguoi-2.jpg",
    name: "Sân bóng Chảo Dầu",
    address: "33 Hồ Sen Quận Lai Châu Thành Phố HN",
    description: "Đã vào sân là không nói tới tình nghĩa anh em",
    rating: "5",
    peopleParticipation: 988,
    distance: 1.2,
  },
  {
    id: 19,
    img: "https://toplist.vn/images/800px/nou-camp-tay-ban-nha-623181.jpg",
    name: "Sân bóng Dầu Khí",
    address: "33 Vĩnh Viễn Quận Vĩnh Thành Phố Viễn",
    description: "Đá banh thì gạt banh chứ đừng có gạt cái giò tao",
    rating: "4.3",
    peopleParticipation: 231,
    distance: 0.7,
  },
  {
    id: 20,
    img: "https://hanoifootball.vn/data/source/nhung-san-bong-da-lon-nhat-the-gioi-2.jpg",
    name: "Sân bóng Hải Quan",
    address: "33 Bơi Lội Quận Cầu Lông Thành Phố Cờ Tướng",
    description: "Trái bóng tròn là niềm đam mê",
    rating: "2.3",
    peopleParticipation: 121,
    distance: 2.7,
  },
];

export default function HomeStadium({ navigation, route }) {
  const [language, setLanguage] = useState(0);
  const [filterByStore, setStore] = useState(0);
  const [sale, setSale] = useState(0);
  const [active, setActive] = useState(0);
  return (
    <View style={{ marginTop: 5 }}>
      <ScrollView
        style={{ height: width / 6 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: width / 3.1,
              paddingTop: 10,
              paddingBottom: 10,
              marginLeft: 20,
              borderWidth: 1,
              borderRadius: 20,
              borderColor: "brown",
            }}
          >
            <Picker
              selectedValue={language}
              onValueChange={(itemValue) => setLanguage(itemValue)}
            >
              <Picker.Item
                style={{
                  fontSize: 12,
                }}
                label="Sắp xếp"
                value="java"
              />
              <Picker.Item
                style={{
                  fontSize: 12,
                }}
                label="Đánh giá tốt"
                value="js"
              />
              <Picker.Item
                style={{
                  fontSize: 12,
                }}
                label="Phổ biến"
                value="rn"
              />
            </Picker>
          </View>
          <Text
            style={{
              fontSize: 18,
              marginLeft: 10,
            }}
          >
            Lọc:{" "}
          </Text>
          <View
            style={{
              width: width / 2.2,
              paddingTop: 10,
              paddingBottom: 10,
              marginLeft: 10,
              borderWidth: 1,
              borderRadius: 20,
              borderColor: "brown",
            }}
          >
            <Picker
              selectedValue={filterByStore}
              onValueChange={(itemValue) => setStore(itemValue)}
            >
              <Picker.Item
                style={{
                  fontSize: 12,
                }}
                label="Danh mục & cửa hàng"
                value="java"
              />
              <Picker.Item
                style={{
                  fontSize: 12,
                }}
                label="Mart"
                value="js"
              />
              <Picker.Item
                style={{
                  fontSize: 12,
                }}
                label="Baemin Kitchen"
                value="rn"
              />
            </Picker>
          </View>
          <View
            style={{
              width: width / 3.2,
              paddingTop: 10,
              paddingBottom: 10,
              marginLeft: 10,
              borderWidth: 1,
              borderRadius: 20,
              borderColor: "brown",
            }}
          >
            <Picker
              selectedValue={sale}
              onValueChange={(itemValue) => setSale(itemValue)}
            >
              <Picker.Item
                style={{
                  fontSize: 12,
                }}
                label="Khuyến mãi"
                value="java"
              />
              <Picker.Item
                style={{
                  fontSize: 12,
                }}
                label="Trên 40%"
                value="js"
              />
              <Picker.Item
                style={{
                  fontSize: 12,
                }}
                label="Dưới 40%"
                value="rn"
              />
            </Picker>
          </View>
          <View
            style={{
              width: width / 2.9,
              paddingTop: 10,
              paddingBottom: 10,
              marginLeft: 10,
              borderWidth: 1,
              borderRadius: 20,
              borderColor: "brown",
            }}
          >
            <Picker
              selectedValue={active}
              onValueChange={(itemValue) => setActive(itemValue)}
            >
              <Picker.Item
                style={{
                  fontSize: 12,
                }}
                label="Đang mở cửa"
                value="java"
              />
              <Picker.Item
                style={{
                  fontSize: 12,
                }}
                label="KFC"
                value="js"
              />
              <Picker.Item
                style={{
                  fontSize: 12,
                }}
                label="Kichi Kichi"
                value="rn"
              />
              <Picker.Item
                style={{
                  fontSize: 12,
                }}
                label="Lotteria"
                value="nn"
              />
            </Picker>
          </View>
        </View>
      </ScrollView>
      <ScrollView showsVerticalScrollIndicator={false}>
        {checkRoute(route.params.name)}
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
  },
});
