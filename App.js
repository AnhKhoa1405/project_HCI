import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import AnotherSales from "./AnotherSales";
import FooterHome from "./FooterHome";
import HeadingHome from "./HeadingHome";
import MyCarousel from "./MyCarousel";
import MyCategory from "./MyCategory";
import MyService from "./MyService";

export default function App() {
  return (
    <View style={styles.container}>
      <HeadingHome />
      <ScrollView showsVerticalScrollIndicator={false}>
        <MyCarousel />
        <MyCategory />
        <MyService />
        <AnotherSales />
      </ScrollView>
      <FooterHome />
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
