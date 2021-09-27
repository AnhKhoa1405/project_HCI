import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Dimensions } from "react-native";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

export default function MyService() {
  return (
    <View style={styles.container}>
      <View style={styles.containerChild}>
        <Text style={styles.solganText}>Đặt sân ở nhà, không lo mất chỗ</Text>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ marginRight: 15 }}>
              <Image
                style={{ width: width / 3, height: width / 4, marginBottom: 5 }}
                source={{
                  uri: "https://hethonggas.vn/wp-content/uploads/2021/04/gas-cong-nghiep-gan-day.jpg",
                }}
              />
              <Text style={styles.descText}>Sân gần nhà</Text>
            </View>
            <View style={{ marginRight: 15 }}>
              <Image
                style={{ width: width / 3, height: width / 4, marginBottom: 5 }}
                source={{
                  uri: "http://file.hstatic.net/1000383950/file/qua-tang-khuyen-mai_6e85a42a6d1c431fafeaa478a79b4052.jpg",
                }}
              />
              <Text style={styles.descText}>Khuyến mãi</Text>
            </View>
            <View style={{ marginRight: 15 }}>
              <Image
                style={{ width: width / 3, height: width / 4, marginBottom: 5 }}
                source={{
                  uri: "https://likesubr.com/wp-content/uploads/2020/03/813A82BC-B97C-4694-8F32-18C0006133CA.png",
                }}
              />
              <Text style={styles.descText}>Đánh giá cao</Text>
            </View>
            <View style={{ marginRight: 15 }}>
              <Image
                style={{ width: width / 3, height: width / 4, marginBottom: 5 }}
                source={{
                  uri: "https://ocean.edu.vn/images/private/072018/BANNER%20CHUNG%20CHI%20NH%C3%81NH-01.png",
                }}
              />
              <Text style={styles.descText}>Sân mới</Text>
            </View>
            <View style={{ marginRight: 15 }}>
              <Image
                style={{ width: width / 3, height: width / 4, marginBottom: 5 }}
                source={{
                  uri: "https://media-cdn.laodong.vn/Storage/NewsPortal/2021/8/16/942769/San-Van-Dong-My-Dinh.jpeg",
                }}
              />
              <Text style={styles.descText}>Sân Trống</Text>
            </View>
          </ScrollView>
        </View>
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

  containerChild: {
    flexDirection: "column",
  },

  solganText: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 15,
  },

  descText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
