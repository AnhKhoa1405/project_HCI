import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

const dataCategory = [
  {
    name: "Football",
    image: "https://cdn-icons-png.flaticon.com/512/123/123495.png",
  },
  {
    name: "Tennis",
    image: "https://image.flaticon.com/icons/png/512/123/123514.png",
  },
  {
    name: "Basketball",
    image: "https://cdn-icons-png.flaticon.com/512/1645/1645768.png",
  },
  {
    name: "Badminton",
    image: "https://image.flaticon.com/icons/png/512/123/123509.png",
  },
  {
    name: "Table Tennis",
    image:
      "https://cdn2.iconfinder.com/data/icons/hobby-butterscotch-vol-2/512/Ping_Pong_-_Table_Tennis-512.png",
  },
  {
    name: "Volleyball",
    image: "https://image.flaticon.com/icons/png/512/184/184093.png",
  },
  {
    name: "Skating",
    image:
      "https://static.vecteezy.com/system/resources/previews/002/061/586/non_2x/roller-skates-icon-art-eps-vector.jpg",
  },
];

export default function MyCategory(props) {
  const navigation = props.title;
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={styles.test1}
          onPress={() => {
            navigation.navigate("HomeStadium", {
              name: "Football",
            });
          }}
        >
          <Image
            style={{ height: width / 8, width: width / 8, marginBottom: 5 }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/123/123495.png",
            }}
          />
          <Text style={styles.titleCateText}>Football</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.test1}
          onPress={() => {
            navigation.navigate("HomeStadium", {
              name: "Tennis",
            });
          }}
        >
          <Image
            style={{ height: width / 8, width: width / 8, marginBottom: 5 }}
            source={{
              uri: "https://image.flaticon.com/icons/png/512/123/123514.png",
            }}
          />
          <Text style={styles.titleCateText}>Tennis</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.test1}
          onPress={() => {
            navigation.navigate("HomeStadium", {
              name: "Basketball",
            });
          }}
        >
          <Image
            style={{ height: width / 8, width: width / 8, marginBottom: 5 }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1645/1645768.png",
            }}
          />
          <Text style={styles.titleCateText}>Basketball</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.test1}
          onPress={() => {
            navigation.navigate("HomeStadium", {
              name: "Badminton",
            });
          }}
        >
          <Image
            style={{ height: width / 8, width: width / 8, marginBottom: 5 }}
            source={{
              uri: "https://image.flaticon.com/icons/png/512/123/123509.png",
            }}
          />
          <Text style={styles.titleCateText}>Badminton</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={styles.test1}
          onPress={() => {
            navigation.navigate("HomeStadium", {
              name: "Table Te...",
            });
          }}
        >
          <Image
            style={{ height: width / 8, width: width / 8, marginBottom: 5 }}
            source={{
              uri: "data:image/png;base64,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",
            }}
          />
          <Text style={styles.titleCateText}>Table Te...</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.test1}
          onPress={() => {
            navigation.navigate("HomeStadium", {
              name: "Volleyball",
            });
          }}
        >
          <Image
            style={{ height: width / 8, width: width / 8, marginBottom: 5 }}
            source={{
              uri: "https://image.flaticon.com/icons/png/512/184/184093.png",
            }}
          />
          <Text style={styles.titleCateText}>Volleyball</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.test1}
          onPress={() => {
            navigation.navigate("HomeStadium", {
              name: "Skating",
            });
          }}
        >
          <Image
            style={{ height: width / 8, width: width / 8, marginBottom: 5 }}
            source={{
              uri: "https://cdn.dribbble.com/users/2552641/screenshots/6534557/icon_challenge_originals_ice_skate_1x.jpg",
            }}
          />
          <Text style={styles.titleCateText}>Skating</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.test1}
          onPress={() => {
            navigation.navigate("HomeStadium", {
              name: "Boxing",
            });
          }}
        >
          <Image
            style={{ height: width / 8, width: width / 8, marginBottom: 5 }}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmeFJcpiZzhs-OwzBV4QIwNViSRD50aPQNwn2bBMr5tNhfLMiQiTx3HGYp8kqjkpPM9_w&usqp=CAU",
            }}
          />
          <Text style={styles.titleCateText}>Boxing</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width / 1.1,
    marginLeft: 16,
    marginBottom: 20,
  },
  test1: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 10,
    paddingTop: 10,
  },
  titleCateText: {
    fontSize: 16,
    fontWeight: "700",
  },
});
