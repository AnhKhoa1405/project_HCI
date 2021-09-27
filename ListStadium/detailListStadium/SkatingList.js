import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function SkatingList({ navigation, route }) {
  return (
    <View>
      <Text>SkatingList</Text>
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
