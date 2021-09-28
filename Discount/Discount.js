import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

export default function Discount() {
  return (
    <View style={styles.container}>
      <Text>Khoa dep trai</Text>
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
