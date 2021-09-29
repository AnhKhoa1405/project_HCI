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

export default function InputPassword() {
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
        <Text style={styles.stepNumber}>2/3</Text>
      </View>
      <View style={styles.mainCotent}>
        <Text style={styles.title}>Đặt mật khẩu</Text>
        <Text style={styles.titleDesc}>Độ dài mật khẩu ít nhất là 6 ký tự</Text>
        <View style={styles.wrapInput}>
          <TextInput
            secureTextEntry={true}
            style={styles.textInput}
            autoCorrect={false}
          ></TextInput>
          <Image
            style={styles.eyePass}
            source={require("../assets/tuimg/eye.png")}
          ></Image>
        </View>
      </View>
      <TouchableOpacity>
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
  titleDesc: {
    fontFamily: "RobotoMedium",
    fontSize: 20,
    marginTop: 5,
    color: "#8a8a8a",
  },
  textInput: {
    fontFamily: "RobotoMedium",
    fontSize: 20,
    color: "#8a8a8a",
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#3ac5c9",
    borderRadius: 10,
  },
  button: {
    marginTop: "80%",
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

  eyePass: {
    width: 20,
    height: 20,
    position: "absolute",
    right: 10,
    top: "50%",
  },
  wrapInput: {
    position: "relative",
  },
});
