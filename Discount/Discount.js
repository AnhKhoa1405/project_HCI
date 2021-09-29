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

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

const dataDiscount = [
  {
    code: "ALLFREE",
    name: "Nhập ALLFREE: Giảm 15k trên phí đặt sân",
    time: "Áp dụng đến: 30/09/2021",
  },
  {
    code: "FREECODE",
    name: "Nhập FREECODE: Giảm 20k khi mua sản phẩm tại cửa hàng",
    time: "Áp dụng đến: 17/02/2021",
  },
  {
    code: "HOMEFREE",
    name: "Nhập HOMEFREE: Giảm 35k khi đặt sân trên 2h",
    time: "Áp dụng đến: 14/05/2021",
  },
  {
    code: "SANYEUTHICH",
    name: "Nhập SANYEUTHICH: Giảm 50k trên phí đặt sân",
    time: "Áp dụng đến: 12/11/2021",
  },
  {
    code: "CHATLUONG",
    name: "Nhập CHATLUONG: Giảm 75k khi mua áo tại cửa hàng",
    time: "Áp dụng đến: 29/09/2021",
  },
  {
    code: "TIENNHIEU",
    name: "Nhập TIENNHIEU: Giảm 100k trên phí đặt sân",
    time: "Áp dụng đến: 16/12/2021",
  },
  {
    code: "CHOFREE",
    name: "Nhập : Giảm 120k khi đặt sân trên 3h",
    time: "Áp dụng đến: 28/11/2021",
  },
  {
    code: "CUOITUAN",
    name: "Nhập CUOITUAN: Giảm 25k khi đặt sân vào cuối tuần",
    time: "Áp dụng đến: 01/01/2021",
  },
  {
    code: "GIUATUAN",
    name: "Nhập GIUATUAN: Giảm 35k khi đặt sân vào các ngày trong tuần",
    time: "Áp dụng đến: 05/10/2021",
  },
  {
    code: "TRUNGTHU",
    name: "Nhập TRUNGTHU: Giảm 45k khi đặt sân vào ngày trung thu",
    time: "Áp dụng đến: 23/10/2021",
  },
  {
    code: "NHAGIAOVIETNAM",
    name: "Nhập NHAGIAOVIETNAM: Giảm 45k khi đặt sân vào ngày nhà giáo VN",
    time: "Áp dụng đến: 22/07/2021",
  },
  {
    code: "NOEL",
    name: "Nhập NOEL: Giảm 75k khi đặt sân vào ngày Noel",
    time: "Áp dụng đến: 27/08/2021",
  },
  {
    code: "CUOITUANTHUGIAN",
    name: "Nhập CUOITUANTHUGIAN: Giảm 65k khi đặt sân vào 21:00 các ngày cuối tuần",
    time: "Áp dụng đến: 03/01/2021",
  },
  {
    code: "GIAMGIASOC",
    name: "Nhập GIAMGIASOC: Giảm 50% trên phí đặt sân",
    time: "Áp dụng đến: 01/03/2021",
  },
  {
    code: "TINDUOCKHONG",
    name: "Nhập TINDUOCKHONG: Free luôn khỏi trả. OK",
    time: "Áp dụng đến: 22/07/2021",
  },
];

function renderData() {
  return dataDiscount.map((element) => {
    return (
      <View key={element.code} style={{ backgroundColor: "#eff3f6" }}>
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
              height: width / 4,
              flexDirection: "row",
            }}
          >
            <Image
              style={{
                marginTop: 2,
                width: width / 5,
                height: width / 5,
              }}
              source={require("../assets/khoaimg/discountBaemin.jpg")}
            />
            <View
              style={{
                paddingLeft: 15,
              }}
            >
              <Text
                style={{
                  width: width / 3,
                  fontSize: 12,
                  fontFamily: "RobotoBlack",
                  lineHeight: 16,
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
          </View>
          <View
            style={{
              flex: 0,
              borderWidth: 1,
              borderColor: "black",
              borderStyle: "dotted",
              height: width / 12,
              borderRadius: 1,
            }}
          ></View>
          <View
            style={{
              flex: 1,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
            }}
          >
            <Text
              style={{
                width: width / 4.5,
                backgroundColor: "white",
                height: width / 4,
                textAlign: "center",
                lineHeight: width / 4,
                color: "#3AC5C9",
                fontFamily: "RobotoBlack",
                fontSize: 18,
                borderWidth: 1,
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
                borderColor: "white",
              }}
            >
              Chọn
            </Text>
          </View>
        </View>
      </View>
    );
  });
}

export default function Discount() {
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
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        hidden={false}
        translucent={true}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: "white",
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
            Deal hot khuyến mãi
          </Text>
        </View>
        {renderData()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "white",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: width / 15,
  },
});
