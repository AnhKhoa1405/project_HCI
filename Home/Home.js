import React from "react";
import { StyleSheet, View, ScrollView, Button } from "react-native";
import BlankPitch from "./detailHome/BlankPitch";
import AnotherSales from "./detailHome/AnotherSales";
import HeadingHome from "./detailHome/HeadingHome";
import HighRating from "./detailHome/HighRating";
import MyCarousel from "./detailHome/MyCarousel";
import MyCategory from "./detailHome/MyCategory";
import NearHome from "./detailHome/NearHourse";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <HeadingHome />
      <ScrollView showsVerticalScrollIndicator={false}>
        <MyCarousel />
        <MyCategory title={navigation} />
        <NearHome title={navigation} />
        <HighRating title={navigation} />
        <BlankPitch title={navigation} />
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
