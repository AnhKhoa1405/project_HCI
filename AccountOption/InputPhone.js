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
      <View style={styles.containerTop}>
        <Image
          source={require("../assets/tuimg/arrow.png")}
          style={styles.imageArrow}
        ></Image>
        <Text style={styles.stepNumber}>1/3</Text>
      </View>
      <View>
        <Text style={styles.title}>
          Nhập số điện thoại của bạn để tiếp tục nhé
        </Text>
        <View style={styles.wrapInput}>
          <View style={styles.wrapTempt}>
            <Image
              style={styles.vnflag}
              source={require("../assets/tuimg/VNicon.png")}
            />
            <Text style={styles.firstNum}>+84</Text>
            <View style={styles.afterFirstNum}></View>
          </View>
          <TextInput
            keyboardType="number-pad"
            style={styles.textInput}
            placeholder="Số điện thoại"
          ></TextInput>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("InputPassword");
        }}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Tiếp theo</Text>
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
    paddingTop: 40,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  containerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  imageArrow: {
    width: 20,
    height: 20,
  },
  stepNumber: {
    fontFamily: "RobotoMedium",
    fontSize: 15,
  },
  title: {
    fontFamily: "RobotoMedium",
    fontSize: 30,
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
    top: "46%",
    left: 15,
  },

  textInput: {
    fontFamily: "RobotoMedium",
    fontSize: 20,
    color: "#8a8a8a",
    paddingLeft: 95,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#3ac5c9",
    borderRadius: 10,
  },
  button: {
    marginTop: width / 1.3,
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
  wrapInput: {
    position: "relative",
  },
});
