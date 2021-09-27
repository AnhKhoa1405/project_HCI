import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Dimensions } from "react-native";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

export default function AnotherSales() {
  return (
    <View style={styles.container}>
      <Text style={styles.solganText}>Những ưu đãi khác từ chủ sân</Text>
      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <View style={{ paddingRight: width / 20 }}>
          <Image
            style={{
              width: width / 2.3,
              height: width / 3,
              resizeMode: "stretch",
            }}
            source={{
              uri: "https://assets.grab.com/wp-content/uploads/sites/11/2020/08/27161852/1200-x-660-Cashles-Thursday.png",
            }}
          />
          <Text style={{ width: width / 2.3 }}>
            Đặt sân thứ 5 không cần tiền mặt
          </Text>
        </View>
        <View style={{ paddingRight: 15 }}>
          <Image
            style={{
              width: width / 2.3,
              height: width / 3,
              resizeMode: "stretch",
            }}
            source={{
              uri: "https://stc.shopiness.vn/deal/2020/07/17/1/f/c/0/1594954248916_540.png",
            }}
          />
          <Text style={{ width: width / 2.3 }}>Giảm 77% khi đặt sân</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <View style={{ paddingRight: width / 20 }}>
          <Image
            style={{
              width: width / 2.3,
              height: width / 3,
              resizeMode: "stretch",
            }}
            source={{
              uri: "https://www.tiendauroi.com/wp-content/uploads/2020/08/khuye%CC%82%CC%81n-ma%CC%83i-40-mobifone-grab-moca.jpg",
            }}
          />
          <Text style={{ width: width / 2.3 }}>Giảm 40% khi đặt sân</Text>
        </View>
        <View style={{ paddingRight: 15 }}>
          <Image
            style={{
              width: width / 2.3,
              height: width / 3,
              resizeMode: "stretch",
            }}
            source={{
              uri: "https://assets.grab.com/wp-content/uploads/sites/11/2020/06/11113751/Inbox-3.png",
            }}
          />
          <Text style={{ width: width / 2.3 }}>
            Cả tuần đặt sân không lo về giá
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <View style={{ paddingRight: width / 20 }}>
          <Image
            style={{
              width: width / 2.3,
              height: width / 3,
              resizeMode: "stretch",
            }}
            source={{
              uri: "https://cafefcdn.com/thumb_w/650/2019/2019-vuila9600x375-15772682099121611132014-0-0-375-600-crop-1577268217410-637128916228732500.jpg",
            }}
          />
          <Text style={{ width: width / 2.3 }}>Đồng giá 9k cho vật phẩm</Text>
        </View>
        <View style={{ paddingRight: 15 }}>
          <Image
            style={{
              width: width / 2.3,
              height: width / 3,
              resizeMode: "stretch",
            }}
            source={{
              uri: "https://stc.shopiness.vn/deal/2021/01/13/6/b/6/9/1610509147058_540.png",
            }}
          />
          <Text style={{ width: width / 2.3 }}>Cả làng giựt deal</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <View style={{ paddingRight: width / 20 }}>
          <Image
            style={{
              width: width / 2.3,
              height: width / 3,
              resizeMode: "stretch",
            }}
            source={{
              uri: "https://stc.shopiness.vn/deal/2018/10/17/e/9/6/8/1539753189235_540.png",
            }}
          />
          <Text style={{ width: width / 2.3 }}>Khuyến mãi đặt sân 50k</Text>
        </View>
        <View style={{ paddingRight: 15 }}>
          <Image
            style={{
              width: width / 2.3,
              height: width / 3,
              resizeMode: "stretch",
            }}
            source={{
              uri: "https://www.xeomgrabbinhduong.com/wp-content/uploads/2019/12/Grab-Thu-Dau-Mot-Binh-Duong.jpg",
            }}
          />
          <Text style={{ width: width / 2.3 }}>
            Tư vấn đặt sân nhận ngay giá sốc
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <View style={{ paddingRight: width / 20 }}>
          <Image
            style={{
              width: width / 2.3,
              height: width / 3,
              resizeMode: "stretch",
            }}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlLLok9vhHaCvpkXF9s36s_J80EXLlYw_-4w&usqp=CAU",
            }}
          />
          <Text style={{ width: width / 2.3 }}>Giảm tụt sàn tháng 11</Text>
        </View>
        <View style={{ paddingRight: 15 }}>
          <Image
            style={{
              width: width / 2.3,
              height: width / 3,
              resizeMode: "stretch",
            }}
            source={{
              uri: "https://tintuc.ngan-hang.com/media/blog/1567999468476.png",
            }}
          />
          <Text style={{ width: width / 2.3 }}>
            Deal đứng với các khuyến mãi sốc
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width / 1.1,
    marginLeft: 16,
  },
  solganText: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 15,
  },
});
