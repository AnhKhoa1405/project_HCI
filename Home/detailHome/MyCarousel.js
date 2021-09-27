import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import "react-native-gesture-handler";


var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

const imgData = [
  "https://1.bp.blogspot.com/-PDGap3JgHK0/YLcDLUXL2HI/AAAAAAAAaAI/G2XNgfnccX41evPImwVMlACVdPs7AbmAQCLcBGAsYHQ/w640-h278/du-doan-euro.PNG",
  "http://squashtalk.com/wp-content/uploads/2019/07/khuyen-mai-ca-cuoc.jpg",
  "http://dafabetvietnam.net/wp-content/uploads/2017/05/endofseasonfinale_promo-page-header-vn.jpg",
  "https://iweb.tatthanh.com.vn/pic/12/thumb/medium/news/mua-ao-bong-da-tai-long-bien-4(1).jpg",
];

export default function MyCarousel() {
  return (
    <View style={styles.container}>
      <SliderBox
        circleLoop={true}
        autoplay={true}
        parentWidth={width / 1.12}
        images={imgData}
        sliderBoxHeight={150}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    paddingLeft: 20,
    marginBottom: 20,
  },
});
