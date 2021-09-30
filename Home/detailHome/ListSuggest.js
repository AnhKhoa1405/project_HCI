import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import BlankPitch from "./BlankPitch";
import HighRating from "./HighRating";
import NearHome from "./NearHourse";

export default function ListSuggest({ navigation, route }) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingLeft: 16,
            paddingTop: 16,
            paddingBottom: 16,
            flexDirection: "row",
            alignItems: "baseline",
          }}
        >
          <Text
            style={{
              fontFamily: "RobotoBlack",
              fontSize: 36,
              color: "#3ac5c9",
            }}
          >
            {route.params.name}
          </Text>
        </View>
        <NearHome title={navigation} titleName={route.params.name} />
        <HighRating title={navigation} titleName={route.params.name} />
        <BlankPitch title={navigation} titleName={route.params.name} />
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
