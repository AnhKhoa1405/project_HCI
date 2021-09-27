import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import BadmintonList from "./detailListStadium/BadmintonList";
import BasketBallList from "./detailListStadium/BasketballList";
import BoxingList from "./detailListStadium/BoxingList";
import FootballList from "./detailListStadium/FootballList";
import SkatingList from "./detailListStadium/SkatingList";
import TableTennisList from "./detailListStadium/TableTennisList";
import TennisList from "./detailListStadium/TennisList";
import VolleyballList from "./detailListStadium/VolleyballList";
import { Picker } from "@react-native-picker/picker";
import { Dimensions } from "react-native";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

function checkRoute(name) {
  switch (name) {
    case "Football":
      return <FootballList />;
    case "Tennis":
      return <TennisList />;
    case "Basketball":
      return <BasketBallList />;
    case "Badminton":
      return <BadmintonList />;
    case "Table Te...":
      return <TableTennisList />;
    case "Volleyball":
      return <VolleyballList />;
    case "Skating":
      return <SkatingList />;
    case "Boxing":
      return <BoxingList />;
  }
}

export default function HomeStadium({ navigation, route }) {
  const [language, setLanguage] = useState(0);
  const [filterByStore, setStore] = useState(0);
  const [sale, setSale] = useState(0);
  const [active, setActive] = useState(0);
  return (
    <View style={{ marginTop: 15 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: width / 3.1,
              paddingTop: 10,
              paddingBottom: 10,
              marginLeft: 20,
              borderWidth: 1,
              borderRadius: 20,
              borderColor: "brown",
            }}
          >
            <Picker
              selectedValue={language}
              onValueChange={(itemValue) => setLanguage(itemValue)}
            >
              <Picker.Item
                style={{
                  fontSize: 12,
                }}
                label="Sắp xếp"
                value="java"
              />
              <Picker.Item
                style={{
                  fontSize: 12,
                }}
                label="Đánh giá tốt"
                value="js"
              />
              <Picker.Item
                style={{
                  fontSize: 12,
                }}
                label="Phổ biến"
                value="rn"
              />
            </Picker>
          </View>
          <Text
            style={{
              fontSize: 18,
              marginLeft: 10,
            }}
          >
            Lọc:{" "}
          </Text>
          <View
            style={{
              width: width / 2.2,
              paddingTop: 10,
              paddingBottom: 10,
              marginLeft: 10,
              borderWidth: 1,
              borderRadius: 20,
              borderColor: "brown",
            }}
          >
            <Picker
              selectedValue={filterByStore}
              onValueChange={(itemValue) => setStore(itemValue)}
            >
              <Picker.Item
                style={{
                  fontSize: 12,
                }}
                label="Danh mục & cửa hàng"
                value="java"
              />
              <Picker.Item
                style={{
                  fontSize: 12,
                }}
                label="Mart"
                value="js"
              />
              <Picker.Item
                style={{
                  fontSize: 12,
                }}
                label="Baemin Kitchen"
                value="rn"
              />
            </Picker>
          </View>
          <View
            style={{
              width: width / 3.2,
              paddingTop: 10,
              paddingBottom: 10,
              marginLeft: 10,
              borderWidth: 1,
              borderRadius: 20,
              borderColor: "brown",
            }}
          >
            <Picker
              selectedValue={sale}
              onValueChange={(itemValue) => setSale(itemValue)}
            >
              <Picker.Item
                style={{
                  fontSize: 12,
                }}
                label="Khuyến mãi"
                value="java"
              />
              <Picker.Item
                style={{
                  fontSize: 12,
                }}
                label="Trên 40%"
                value="js"
              />
              <Picker.Item
                style={{
                  fontSize: 12,
                }}
                label="Dưới 40%"
                value="rn"
              />
            </Picker>
          </View>
          <View
            style={{
              width: width / 2.9,
              paddingTop: 10,
              paddingBottom: 10,
              marginLeft: 10,
              borderWidth: 1,
              borderRadius: 20,
              borderColor: "brown",
            }}
          >
            <Picker
              selectedValue={active}
              onValueChange={(itemValue) => setActive(itemValue)}
            >
              <Picker.Item
                style={{
                  fontSize: 12,
                }}
                label="Đang mở cửa"
                value="java"
              />
              <Picker.Item
                style={{
                  fontSize: 12,
                }}
                label="KFC"
                value="js"
              />
              <Picker.Item
                style={{
                  fontSize: 12,
                }}
                label="Kichi Kichi"
                value="rn"
              />
              <Picker.Item
                style={{
                  fontSize: 12,
                }}
                label="Lotteria"
                value="nn"
              />
            </Picker>
          </View>
        </View>
      </ScrollView>

      {checkRoute(route.params.name)}
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
