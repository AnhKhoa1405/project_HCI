import * as React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { Dimensions } from "react-native";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

export default function HeadingHome({ navigation }) {
  return (
    <View>
      <View style={styles.heading}>
        <View style={styles.rowFlexAlignJust}>
          <View style={[styles.rowFlexAlignNoJust, styles.paddingL16]}>
            <Entypo
              style={styles.paddingR4}
              name="location-pin"
              size={24}
              color="#3AC5C9"
            />
            <Text style={styles.titleText}>19/5 Đường Hồng Lạc</Text>
            <AntDesign
              name="right"
              size={16}
              color="black"
              style={[styles.paddingL4, styles.marginT4]}
            />
          </View>
          <View style={styles.paddingR16}>
            <Entypo name="menu" size={24} color="black" />
          </View>
        </View>
        <View style={[styles.inputStyle, styles.marginL16]}>
          <TextInput style={styles.paddingTR} placeholder="Tìm các loại sân" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: height,
    backgroundColor: "red",
  },
  heading: {
    backgroundColor: "white",
    height: height / 6,
    paddingTop: 10,
    marginTop: 15,
  },
  rowFlexAlignJust: {
    display: "flex",
    width: width,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  rowFlexAlignNoJust: {
    flexDirection: "row",
    alignItems: "center",
  },

  paddingL4: {
    paddingLeft: 4,
  },

  paddingL8: {
    paddingLeft: 8,
  },

  paddingL16: {
    paddingLeft: 16,
  },

  paddingR4: {
    paddingRight: 4,
  },

  paddingR8: {
    paddingRight: 8,
  },

  paddingR16: {
    paddingRight: 16,
  },

  marginT4: {
    marginTop: 4,
  },

  marginL16: {
    marginLeft: 16,
  },

  titleText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },

  inputStyle: {
    backgroundColor: "#ccc",
    color: "#7C7D7F",
    borderRadius: 10,
    margin: "auto",
    width: width / 1.1,
    paddingLeft: 20,
    marginTop: 10,
  },

  paddingTR: {
    paddingTop: 5,
    paddingBottom: 5,
  },
});
