import React from "react";
import { useFonts } from "expo-font";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import AnotherSales from "./detailHome/AnotherSales";
import FooterHome from "./detailHome/FooterHome";
import HeadingHome from "./detailHome/HeadingHome";
import MyCarousel from "./detailHome/MyCarousel";
import MyCategory from "./detailHome/MyCategory";
import MyService from "./detailHome/MyService";

export default function Home({ navigation }) {
  const [loaded] = useFonts({
    RobotoBlack: require("../assets/fonts/Roboto-Black.ttf"),
    RobotoThin: require("../assets/fonts/Roboto-Light.ttf"),
    RobotoMedium: require("../assets/fonts/Roboto-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View>
      <HeadingHome />
      <ScrollView showsVerticalScrollIndicator={false}>
        <MyCarousel />
        <MyCategory title={navigation} />
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
    fontFamily: "RobotoBlack",
  },
});
