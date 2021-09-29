import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Dimensions } from "react-native";
import { useFonts } from "expo-font";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

export default function MyService() {
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
        style={styles.logoSign}
        source={require("../assets/tuimg/logoSign.png")}
      />
      <View style={styles.whiteBg}>
        <Text style={styles.title}>XIN CHÀO BẠN</Text>
        <Text style={styles.titleDesc}>
          Hãy nhập số điện thoại để tiếp tục nhé!
        </Text>
        <View style={styles.blockInput}>
          <View style={styles.wrapTempt}>
            <Image
              style={styles.vnflag}
              source={require("../assets/tuimg/VNicon.png")}
            />
            <Text style={styles.firstNum}>+84</Text>
            <View style={styles.afterFirstNum}></View>
          </View>
          <TouchableOpacity>
            <View style={styles.textInput}>
              <Text style={styles.buttonText}>Số điện thoại</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.anotherOption}>
            <View style={styles.line} />
            <Text style={styles.anotherTitle}>Hoặc đăng nhập bằng</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.socialOption}>
            <Image
              style={styles.appleIcon}
              source={require("../assets/tuimg/apple.png")}
            />
            <Image
              style={styles.faceIcon}
              source={require("../assets/tuimg/facebook.png")}
            />
          </View>
          <Text style={styles.textAnother}>
            Để sau nha mình muốn xem thêm chút nữa.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: "#3ac5c9",
  },
  whiteBg: {
    marginTop: 200,
    padding: 10,
    width: width,
    height: height,
    borderTopEndRadius: 100,
    borderTopStartRadius: 100,
    backgroundColor: "#fff",
  },
  logoSign: {
    position: "absolute",
    width: 300,
    height: 200,
    resizeMode: "contain",
    left: "25%",
    top: 110,
    zIndex: 20,
    transform: [{ translateX: -50 }],
  },
  title: {
    fontFamily: "RobotoBlack",
    marginTop: 120,
    textAlign: "center",
    fontSize: 30,
  },
  titleDesc: {
    marginTop: 10,
    fontFamily: "RobotoMedium",
    textAlign: "center",
    fontSize: 20,
    color: "#808184",
  },

  blockInput: {
    borderWidth: 1,
    borderColor: "#808184",
    borderRadius: 5,
    marginTop: 20,
    height: 40,
  },
  vnflag: {
    width: 25,
    height: 25,
  },

  firstNum: {
    fontFamily: "RobotoMedium",
    fontSize: 20,
    marginLeft: 5,
    color: "#8a8a8a",
  },
  afterFirstNum: {
    backgroundColor: "#8a8a8a",
    width: 1,
    marginLeft: 6,
    height: "100%",
  },
  wrapTempt: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    top: 5,
    left: 15,
  },

  textInput: {
    fontFamily: "RobotoMedium",
    fontSize: 20,
    color: "#8a8a8a",
    paddingLeft: 95,
    paddingTop: 5,
  },
  buttonText: {
    fontFamily: "RobotoMedium",
    fontSize: 20,
    color: "#8a8a8a",
  },
  anotherOption: {
    marginTop: 50,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    height: 1,
    flex: 1,
    backgroundColor: "#8a8a8a",
  },
  anotherTitle: {
    textAlign: "center",
    fontFamily: "RobotoMedium",
    color: "#8a8a8a",
    fontSize: 15,
    flex: 2,
  },

  socialOption: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  appleIcon: {
    marginRight: 20,
    width: 40,
    height: 40,
  },
  faceIcon: {
    width: 40,
    height: 40,
  },
  textAnother: {
    marginTop: 20,
    fontFamily: "RobotoMedium",
    color: "#8a8a8a",
    textDecorationLine: "underline",
    textAlign: "center",
    fontSize: 15,
  },
});
