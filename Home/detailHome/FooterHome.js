import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  Ionicons,
  Entypo,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { Dimensions } from "react-native";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

export default function FooterHome() {
  return (
    <View style={styles.container}>
      <View style={styles.test1}>
        <Ionicons name="compass" size={24} color="green" />
        <Text
          style={{
            fontSize: 12,
          }}
        >
          Trang chủ
        </Text>
      </View>
      <View style={styles.test1}>
        <Entypo name="clipboard" size={24} color="brown" />
        <Text
          style={{
            fontSize: 12,
          }}
        >
          Hoạt động
        </Text>
      </View>
      <View style={styles.test1}>
        <Entypo name="wallet" size={24} color="brown" />
        <Text
          style={{
            fontSize: 12,
          }}
        >
          Thanh toán
        </Text>
      </View>
      <View style={styles.test1}>
        <FontAwesome5 name="facebook-messenger" size={24} color="brown" />
        <Text
          style={{
            fontSize: 12,
          }}
        >
          Messages
        </Text>
      </View>
      <View style={styles.test1}>
        <MaterialIcons name="account-circle" size={24} color="brown" />
        <Text
          style={{
            fontSize: 12,
          }}
        >
          Tài khoản
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width / 1.1,
    height: width / 9,
    backgroundColor: "white",
    flexDirection: "row",
    paddingTop: 25,
    paddingBottom: 25,
  },

  test1: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
