import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import AnotherSales from "./detailHome/AnotherSales";
import HeadingHome from "./detailHome/HeadingHome";
import MyCarousel from "./detailHome/MyCarousel";
import MyCategory from "./detailHome/MyCategory";
import MyService from "./detailHome/MyService";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <HeadingHome />
      <ScrollView showsVerticalScrollIndicator={false}>
        <MyCarousel />
        <MyCategory title={navigation} />
        <MyService />
        <AnotherSales />
      </ScrollView>
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
