import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function LoveMyPitch() {
  return (
    <View style={styles.container}>
      <Text>Khoa Truong Anh</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
