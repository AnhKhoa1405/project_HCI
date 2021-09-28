import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Dimensions } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

export default function AnotherSales() {
  const [loaded] = useFonts({
    RobotoBlack: require("../../assets/fonts/Roboto-Black.ttf"),
    RobotoThin: require("../../assets/fonts/Roboto-Thin.ttf"),
    RototoMedium: require("../../assets/fonts/Roboto-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.solganText}>Sân yêu thích</Text>
      <View
        style={{
          flexDirection: "column",
          paddingBottom: 20,
          borderWidth: 1,
          borderStyle: "dotted",
          borderColor: "transparent",
          borderBottomColor: "#BCC0C3",
        }}
      >
        <View style={{ paddingRight: width / 20, flexDirection: "row" }}>
          <Image
            style={{
              width: width / 3.5,
              height: width / 3.5,
              resizeMode: "stretch",
              borderRadius: 10,
            }}
            source={{
              uri: "http://hanoimoi.com.vn/Uploads/anhthu/2018/7/12/b3.jpg",
            }}
          />
          <View style={{ marginLeft: 20 }}>
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
                  fontFamily: "RobotoBlack",
                }}
              >
                Sân Thăng Quan Tiến Chức
              </Text>
            </View>
            <Text
              style={{
                flex: 1,
                marginTop: 5,
                width: width / 2,
                lineHeight: 18,
                fontFamily: "RototoMedium",
              }}
            >
              Chuyên cung cấp dịch vụ cho thuê các loại sân phổ biến(bóng đá,
              bóng rổ,...)
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="star" size={24} color="#F7B603" />
              <Text style={{ fontSize: 16, marginLeft: 5 }}>4.1</Text>
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 5,
                  color: "#BCC0C3",
                  fontFamily: "RobotoBlack",
                }}
              >
                (999+)
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
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 8,
                  color: "#969EA6",
                  fontFamily: "RobotoBlack",
                }}
              >
                0.4 km
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          paddingBottom: 20,
          marginTop: 20,
          borderWidth: 1,
          borderStyle: "dotted",
          borderColor: "transparent",
          borderBottomColor: "#BCC0C3",
        }}
      >
        <View style={{ paddingRight: width / 20, flexDirection: "row" }}>
          <Image
            style={{
              width: width / 3.5,
              height: width / 3.5,
              resizeMode: "stretch",
              borderRadius: 10,
            }}
            source={{
              uri: "https://www.sanbongconhantao.vn/upload/userfiles/images/ung-dung-cua-co-nhan-tao-trong-the-thao.jpeg",
            }}
          />
          <View style={{ marginLeft: 20 }}>
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
                  fontFamily: "RobotoBlack",
                }}
              >
                Sân Lửa Hồng
              </Text>
            </View>
            <Text
              style={{
                flex: 1,
                marginTop: 5,
                width: width / 2,
                lineHeight: 18,
                fontFamily: "RototoMedium",
              }}
            >
              Cung cấp các dịch vụ cho thuê sân chuyên nghiệp đẳng cấp
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="star" size={24} color="#F7B603" />
              <Text style={{ fontSize: 16, marginLeft: 5 }}>4.1</Text>
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 5,
                  color: "#BCC0C3",
                  fontFamily: "RobotoBlack",
                }}
              >
                (999+)
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
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 8,
                  color: "#969EA6",
                  fontFamily: "RobotoBlack",
                }}
              >
                0.4 km
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          paddingBottom: 20,
          marginTop: 20,
          borderWidth: 1,
          borderStyle: "dotted",
          borderColor: "transparent",
          borderBottomColor: "#BCC0C3",
        }}
      >
        <View style={{ paddingRight: width / 20, flexDirection: "row" }}>
          <Image
            style={{
              width: width / 3.5,
              height: width / 3.5,
              resizeMode: "stretch",
              borderRadius: 10,
            }}
            source={{
              uri: "https://skatevn.com/wp-content/uploads/2016/02/Skatepark-Venice-Beach.jpg",
            }}
          />
          <View style={{ marginLeft: 20 }}>
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
                  fontFamily: "RobotoBlack",
                }}
              >
                Sân Trượt Ván Nộ Long
              </Text>
            </View>
            <Text
              style={{
                flex: 1,
                marginTop: 5,
                width: width / 2,
                lineHeight: 18,
                fontFamily: "RototoMedium",
              }}
            >
              Chuyên cho thuê sân trượt ván biểu diễn chuyên nghiệp
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="star" size={24} color="#F7B603" />
              <Text
                style={{
                  fontSize: 16,
                  marginLeft: 5,
                  fontFamily: "RobotoBlack",
                }}
              >
                4.1
              </Text>
              <Text style={{ fontSize: 14, marginLeft: 5, color: "#BCC0C3" }}>
                (999+)
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 8,
                  marginBottom: 5,
                  color: "#969EA6",
                  fontFamily: "RobotoBlack",
                }}
              >
                .
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 8,
                  color: "#969EA6",
                  fontFamily: "RobotoBlack",
                }}
              >
                0.4 km
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          paddingBottom: 20,
          marginTop: 20,
          borderWidth: 1,
          borderStyle: "dotted",
          borderColor: "transparent",
          borderBottomColor: "#BCC0C3",
        }}
      >
        <View style={{ paddingRight: width / 20, flexDirection: "row" }}>
          <Image
            style={{
              width: width / 3.5,
              height: width / 3.5,
              resizeMode: "stretch",
              borderRadius: 10,
            }}
            source={{
              uri: "https://nagifit.vn/wp-content/uploads/2021/05/SAN-DAU-BOXING-MMA-MUAYTHAI-VO-CO-TRUYEN-VUAVOTHUAT-9.jpg",
            }}
          />
          <View style={{ marginLeft: 20 }}>
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
                  fontFamily: "RobotoBlack",
                }}
              >
                Sân Chiến Thế Nhờ
              </Text>
            </View>
            <Text
              style={{
                flex: 1,
                marginTop: 5,
                width: width / 2,
                lineHeight: 18,
              }}
            >
              Chuyên về các sân đấm bốc (1vs1 , 2vs2 ,...)
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="star" size={24} color="#F7B603" />
              <Text
                style={{
                  fontSize: 16,
                  marginLeft: 5,
                }}
              >
                4.1
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 5,
                  color: "#BCC0C3",
                  fontFamily: "RobotoBlack",
                }}
              >
                (999+)
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
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 8,
                  color: "#969EA6",
                  fontFamily: "RobotoBlack",
                }}
              >
                0.4 km
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          paddingBottom: 20,
          marginTop: 20,
          borderWidth: 1,
          borderStyle: "dotted",
          borderColor: "transparent",
          borderBottomColor: "#BCC0C3",
        }}
      >
        <View style={{ paddingRight: width / 20, flexDirection: "row" }}>
          <Image
            style={{
              width: width / 3.5,
              height: width / 3.5,
              resizeMode: "stretch",
              borderRadius: 10,
            }}
            source={{
              uri: "http://santhethao.com.vn/uploads/images/tin-tuc/San-The-Thao-Gerflor-San-Bong-Chuyen.jpg",
            }}
          />
          <View style={{ marginLeft: 20 }}>
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
                  fontFamily: "RobotoBlack",
                }}
              >
                Sân Hòa Hưng
              </Text>
            </View>
            <Text
              style={{
                flex: 1,
                marginTop: 5,
                width: width / 2,
                lineHeight: 18,
                fontFamily: "RototoMedium",
              }}
            >
              Chúng tôi cung cấp các dịch vụ về bóng chuyền chuyên nghiệp nhất
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="star" size={24} color="#F7B603" />
              <Text
                style={{
                  fontSize: 16,
                  marginLeft: 5,
                }}
              >
                4.1
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 5,
                  color: "#BCC0C3",
                  fontFamily: "RobotoBlack",
                }}
              >
                (999+)
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
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 8,
                  color: "#969EA6",
                  fontFamily: "RobotoBlack",
                }}
              >
                0.4 km
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          paddingBottom: 20,
          marginTop: 20,
          borderWidth: 1,
          borderStyle: "dotted",
          borderColor: "transparent",
          borderBottomColor: "#BCC0C3",
        }}
      >
        <View style={{ paddingRight: width / 20, flexDirection: "row" }}>
          <Image
            style={{
              width: width / 3.5,
              height: width / 3.5,
              resizeMode: "stretch",
              borderRadius: 10,
            }}
            source={{
              uri: "https://luongsport.com/wp-content/uploads/2019/10/39638297_2154685938134273_4535680670839603200_o.jpg",
            }}
          />
          <View style={{ marginLeft: 20 }}>
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
                  fontFamily: "RobotoBlack",
                }}
              >
                Sân Hưng Thịnh
              </Text>
            </View>
            <Text
              style={{
                flex: 1,
                marginTop: 5,
                lineHeight: 18,
                fontFamily: "RototoMedium",
              }}
            >
              Cho thuê các loại sân về cầu lông
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="star" size={24} color="#F7B603" />
              <Text style={{ fontSize: 16, marginLeft: 5 }}>4.1</Text>
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 5,
                  color: "#BCC0C3",
                  fontFamily: "RobotoBlack",
                }}
              >
                (999+)
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
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 8,
                  color: "#969EA6",
                  fontFamily: "RobotoBlack",
                }}
              >
                0.4 km
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          paddingBottom: 20,
          marginTop: 20,
          borderWidth: 1,
          borderStyle: "dotted",
          borderColor: "transparent",
          borderBottomColor: "#BCC0C3",
        }}
      >
        <View style={{ paddingRight: width / 20, flexDirection: "row" }}>
          <Image
            style={{
              width: width / 3.5,
              height: width / 3.5,
              resizeMode: "stretch",
              borderRadius: 10,
            }}
            source={{
              uri: "https://kenh14cdn.com/Images/Uploaded/Share/2010/12/21/101221prmilo01.jpg",
            }}
          />
          <View style={{ marginLeft: 20 }}>
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
                  fontFamily: "RobotoBlack",
                }}
              >
                Sân Ngoại Thành
              </Text>
            </View>
            <Text style={{ flex: 1, marginTop: 5, fontFamily: "RototoMedium" }}>
              Các loại bóng rổ không thể chê
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="star" size={24} color="#F7B603" />
              <Text style={{ fontSize: 16, marginLeft: 5 }}>4.1</Text>
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 5,
                  color: "#BCC0C3",
                  fontFamily: "RobotoBlack",
                }}
              >
                (999+)
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 8,
                  marginBottom: 5,
                  color: "#969EA6",
                  fontFamily: "RobotoBlack",
                }}
              >
                .
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 8,
                  color: "#969EA6",
                  fontFamily: "RobotoBlack",
                }}
              >
                0.4 km
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          paddingBottom: 20,
          marginTop: 20,
          borderWidth: 1,
          borderStyle: "dotted",
          borderColor: "transparent",
          borderBottomColor: "#BCC0C3",
        }}
      >
        <View style={{ paddingRight: width / 20, flexDirection: "row" }}>
          <Image
            style={{
              width: width / 3.5,
              height: width / 3.5,
              resizeMode: "stretch",
              borderRadius: 10,
            }}
            source={{
              uri: "https://images.elipsport.vn/anh-seo-tin-tuc/2020/05/25/kich-thuoc-san-bong-ban-1.jpg",
            }}
          />
          <View style={{ marginLeft: 20 }}>
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
                  fontFamily: "RobotoBlack",
                }}
              >
                Sân Nội Thành
              </Text>
            </View>
            <Text
              style={{
                flex: 1,
                marginTop: 5,
                width: width / 2,
                lineHeight: 18,
              }}
            >
              Các lại sân bóng bàn đẳng cấp thế giới
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="star" size={24} color="#F7B603" />
              <Text style={{ fontSize: 16, marginLeft: 5 }}>4.1</Text>
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 5,
                  color: "#BCC0C3",
                  fontFamily: "RobotoBlack",
                }}
              >
                (999+)
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 8,
                  marginBottom: 5,
                  color: "#969EA6",
                  fontFamily: "RobotoBlack",
                }}
              >
                .
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 8,
                  color: "#969EA6",
                  fontFamily: "RobotoBlack",
                }}
              >
                0.4 km
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          paddingBottom: 20,
          marginTop: 20,
          borderWidth: 1,
          borderStyle: "dotted",
          borderColor: "transparent",
          borderBottomColor: "#BCC0C3",
        }}
      >
        <View style={{ paddingRight: width / 20, flexDirection: "row" }}>
          <Image
            style={{
              width: width / 3.5,
              height: width / 3.5,
              resizeMode: "stretch",
              borderRadius: 10,
            }}
            source={{
              uri: "https://lh3.googleusercontent.com/proxy/XqEBzv1u9qdp3Qup7Ttd9TxCwSHfUQdgxq7gG8RtgybCDSZL5600dm-OQZqGtRuX0zKEMWX3s22lqsM6afOmmI2ILlRJQth_qkUOzKKjAGIxr5g6",
            }}
          />
          <View style={{ marginLeft: 20 }}>
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
                  fontFamily: "RobotoBlack",
                }}
              >
                Sân Hàm Rồng
              </Text>
            </View>
            <Text
              style={{
                flex: 1,
                marginTop: 5,
                width: width / 2,
                fontFamily: "RototoMedium",
              }}
            >
              Các lại sân tennis phổ biến
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="star" size={24} color="#F7B603" />
              <Text style={{ fontSize: 16, marginLeft: 5 }}>4.1</Text>
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 5,
                  color: "#BCC0C3",
                  fontFamily: "RobotoBlack",
                }}
              >
                (999+)
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 8,
                  marginBottom: 5,
                  color: "#969EA6",
                  fontFamily: "RobotoBlack",
                }}
              >
                .
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 8,
                  color: "#969EA6",
                  fontFamily: "RobotoBlack",
                }}
              >
                0.4 km
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          paddingBottom: 20,
          marginTop: 20,
          borderWidth: 1,
          borderStyle: "dotted",
          borderColor: "transparent",
          borderBottomColor: "#BCC0C3",
        }}
      >
        <View style={{ paddingRight: width / 20, flexDirection: "row" }}>
          <Image
            style={{
              width: width / 3.5,
              height: width / 3.5,
              resizeMode: "stretch",
              borderRadius: 10,
            }}
            source={{
              uri: "https://thegioiconhantao.com.vn/wp-content/uploads/2018/10/86f2b38f957e75202c6f-717x460.jpg",
            }}
          />
          <View style={{ marginLeft: 20 }}>
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
                  fontFamily: "RobotoBlack",
                }}
              >
                Sân Chảo Lửa
              </Text>
            </View>
            <Text
              style={{
                flex: 1,
                marginTop: 5,
                width: width / 2,
                fontFamily: "RototoMedium",
              }}
            >
              Nhiều loại sân bóng đá da dạng
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="star" size={24} color="#F7B603" />
              <Text style={{ fontSize: 16, marginLeft: 5 }}>4.1</Text>
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 5,
                  color: "#BCC0C3",
                  fontFamily: "RobotoBlack",
                }}
              >
                (999+)
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
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 8,
                  color: "#969EA6",
                  fontFamily: "RobotoBlack",
                }}
              >
                0.4 km
              </Text>
            </View>
          </View>
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
