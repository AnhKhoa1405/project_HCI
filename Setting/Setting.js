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
import { color } from "react-native-reanimated";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

export default function Setting({ navigation }) {
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
      <View style={styles.titleTop}>
        <Text style={styles.title}>Nguyễn Văn A</Text>
        <MaterialIcons
          style={styles.buttonArrow}
          name="arrow-forward-ios"
        ></MaterialIcons>
      </View>
      <View style={styles.content}>
        <View style={styles.contentItem}>
          <Text style={styles.contentText}>Lịch đặt của tôi</Text>
          <MaterialIcons
            style={styles.buttonArrow2}
            name="arrow-forward-ios"
          ></MaterialIcons>
        </View>
        <View style={styles.contentItem}>
          <Text style={styles.contentText}>Sân yêu thích</Text>
          <MaterialIcons
            style={styles.buttonArrow2}
            name="arrow-forward-ios"
          ></MaterialIcons>
        </View>
        <View style={styles.contentItem}>
          <Text style={styles.contentText}>Câu hỏi thường gặp</Text>
          <MaterialIcons
            style={styles.buttonArrow2}
            name="arrow-forward-ios"
          ></MaterialIcons>
        </View>
        <View style={styles.contentItem}>
          <Text style={styles.contentText}>Về chúng tôi</Text>
          <MaterialIcons
            style={styles.buttonArrow2}
            name="arrow-forward-ios"
          ></MaterialIcons>
        </View>
        <View style={styles.contentItem}>
          <Text style={styles.contentText}>Hỗ trợ khách hàng</Text>
          <MaterialIcons
            style={styles.buttonArrow2}
            name="arrow-forward-ios"
          ></MaterialIcons>
        </View>
        <View style={styles.contentItem}>
          <Text style={styles.contentText}>Chia sẽ ứng dụng</Text>
          <MaterialIcons
            style={styles.buttonArrow2}
            name="arrow-forward-ios"
          ></MaterialIcons>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignIn");
        }}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Đăng xuất</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.version}>Version 1.4.1.7</Text>
      <Text style={styles.brand}>BOOKING SPORT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    // backgroundColor: "#3ac5c9",
    backgroundColor: "#eff3f6",
  },
  titleTop: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#3ac5c9",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: "RobotoMedium",
    color: "white",
    fontSize: 20,
  },
  buttonArrow: {
    fontFamily: "RobotoMedium",
    color: "white",
    fontSize: 20,
  },
  content: {
    marginTop: 40,
    backgroundColor: "white",
  },
  contentItem: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eff3f6",
  },
  buttonArrow2: {
    fontFamily: "RobotoMedium",
    color: "black",
    fontSize: 20,
  },
  contentText: {
    fontFamily: "RobotoMedium",
    color: "black",
    fontSize: 15,
  },
  button: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#3ac5c9",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: "RobotoMedium",
    color: "white",
    fontSize: 20,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  version: {
    marginTop: 30,
    fontFamily: "RobotoThin",
    textAlign: "center",
  },
  brand: {
    marginTop: 5,
    fontFamily: "RobotoBlack",
    textAlign: "center",
    color: "#3ac5c9",
    fontSize: 20,
  },
});
