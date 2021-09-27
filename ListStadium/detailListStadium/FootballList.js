import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { Dimensions } from "react-native";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

function fillData(myData) {
  return myData.map((element) => {
    return (
      <View key={element.id}>
        <View
          style={{
            flexDirection: "column",
            paddingBottom: 10,
            borderWidth: 1,
            borderStyle: "dotted",
            borderColor: "transparent",
            borderBottomColor: "#BCC0C3",
            marginTop: 10,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              paddingRight: width / 20,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: width / 3.5,
                height: width / 4,
                resizeMode: "stretch",
                borderRadius: 10,
              }}
              source={{
                uri: element.img,
              }}
            />
            <View style={{ marginLeft: 30 }}>
              <View style={{ flexDirection: "row" }}>
                <MaterialCommunityIcons
                  style={{ marginRight: 5 }}
                  name="check-decagram"
                  size={24}
                  color="green"
                />
                <Text
                  style={{
                    fontSize: 16,
                    width: width / 2,
                  }}
                >
                  {element.name}
                </Text>
              </View>
              <Text style={{ width: width / 2 }}>{element.address}</Text>
              <Text
                style={{
                  flex: 1,
                  marginTop: 5,
                  width: width / 2,
                  lineHeight: 18,
                }}
              >
                {element.description}
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AntDesign name="star" size={24} color="#F7B603" />
                <Text style={{ fontSize: 16, marginLeft: 5 }}>
                  {element.rating}
                </Text>
                <Text style={{ fontSize: 14, marginLeft: 5, color: "#BCC0C3" }}>
                  ( {element.peopleParticipation} + )
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 8,
                    marginBottom: 5,
                    color: "#969EA6",
                  }}
                >
                  .
                </Text>
                <Text style={{ fontSize: 14, marginLeft: 8, color: "#969EA6" }}>
                  {element.distance} km
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  });
}

export default function FootballList(props) {
  return (
    <View style={{ paddingLeft: 16, paddingRight: 16 }}>
      {fillData(props.myData)}
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
