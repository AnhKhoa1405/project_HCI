import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Home from "./Home/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
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
