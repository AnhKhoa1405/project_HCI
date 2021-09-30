import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { Dimensions } from "react-native";
import { useFonts } from "expo-font";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

export default function MyService({ navigation }) {
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
      <Image
        source={require("../assets/tuimg/logoSign.png")}
        style={styles.imageArrow}
      ></Image>
      <View style={styles.mainCotent}>
        <Text style={styles.title}>
          SPORT BOOKING CẦN TRUY CẬP VỊ TRÍ CỦA BẠN
        </Text>
        <Text style={styles.titleDesc}>
          Giúp dễ dàng tìm được sân gần địa chỉ nhà bạn và khuyến mãi các sân
          gần đây
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Footer");
        }}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Cho phép và tiếp tục</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    // backgroundColor: "#3ac5c9",
    position: "relative",
    backgroundColor: "white",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    alignItems: "center",
  },
  imageArrow: {
    marginTop: 30,
    width: 200,
    height: 200,
    alignItems: "center",
    resizeMode: "contain",
  },
  title: {
    marginTop: 10,
    fontFamily: "RobotoMedium",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
  },
  titleDesc: {
    marginTop: 10,
    fontFamily: "RobotoMedium",
    textAlign: "center",
    fontSize: 20,
    color: "#808184",
  },
  button: {
    marginTop: width / 3,
    backgroundColor: "#3ac5c9",
    padding: 10,
    borderRadius: 5,
    width: 400,
  },
  buttonText: {
    fontFamily: "RobotoMedium",
    color: "white",
    fontSize: 20,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
