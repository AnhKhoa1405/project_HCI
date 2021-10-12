import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  MaterialCommunityIcons,
  AntDesign,
  Entypo,
  FontAwesome5,
} from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { useFonts } from "expo-font";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

export default function PitchSales(props) {
  const navigation = props.title;
  const titleName = props.titleName;
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
      <View
        style={{
          flexDirection: "column",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              ...styles.solganText,
              fontFamily: "RobotoBlack",
              fontSize: 20,
              textAlign: "right",
            }}
          >
            Sân khuyến mãi
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("HomeStadium", {
                name: titleName != undefined ? titleName : "Bóng đá",
                filter: "sale",
              });
            }}
          >
            <Text
              style={{
                fontFamily: "RobotoBlack",
                fontSize: 16,
                fontStyle: "italic",
                textDecorationLine: "underline",
                textAlign: "right",
                color: "#3ac5c9",
              }}
            >
              Xem thêm
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                // borderWidth: 2,
                paddingRight: 16,
                // borderTopColor: "transparent",
                // borderBottomColor: "transparent",
                // borderLeftColor: "transparent",
                // borderRightColor: "#3ac5c9",
              }}
            >
              <Image
                source={{
                  uri: "https://thegioithethao.vn/upload_images/images/2021/01/08/san-bong-11-nguoi-min.png",
                }}
                style={{
                  width: width / 3,
                  height: width / 5,
                }}
              />
              <Image
                source={require("../../assets/khoaimg/discount1.png")}
                style={{
                  width: width / 15,
                  height: width / 15,
                  position: "absolute",
                  right: 20,
                }}
              />

              <View
                style={{
                  marginTop: 4,
                  width: width / 3,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "RototoMedium",
                    }}
                  >
                    Sân Cầu May
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <AntDesign name="star" size={14} color="#F7B603" />
                    <Text
                      style={{
                        fontFamily: "RototoMedium",
                        paddingLeft: 3,
                      }}
                    >
                      4.6
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "baseline",
                    }}
                  >
                    <MaterialCommunityIcons
                      name="soccer-field"
                      color="#3ac5c9"
                      size={18}
                    />
                    <Text
                      style={{
                        fontFamily: "RototoMedium",
                        paddingLeft: 3,
                      }}
                    >
                      Sân 5
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "baseline",
                      marginTop: 2,
                      marginBottom: 2,
                    }}
                  >
                    <Entypo name="location-pin" size={16} color="#3ac5c9" />
                    <Text
                      style={{
                        fontFamily: "RobotoBlack",
                      }}
                    >
                      3.5 km
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "baseline",
                  }}
                >
                  <FontAwesome5 name="money-bill" color="#3ac5c9" size={14} />
                  <Text
                    style={{
                      fontFamily: "RototoMedium",
                    
                      textDecorationLine: "line-through",
                      textDecorationStyle: "solid",
                      fontSize: 12,
                    }}
                  >
                    350.000
                  </Text>
                  <Text
                    style={{
                      fontFamily: "RototoMedium",
                    
                      fontWeight: "700",
                      color: "red",
                    }}
                  >
                    220.000 vnđ
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                // borderWidth: 2,
                paddingRight: 16,
                // borderTopColor: "transparent",
                // borderBottomColor: "transparent",
                // borderLeftColor: "transparent",
                // borderRightColor: "#3ac5c9",
              }}
            >
              <Image
                source={{
                  uri: "https://leep.imgix.net/2021/05/iQKrKs6y-san-bong-chay.jpg?auto=compress&fm=pjpg&ixlib=php-1.2.1",
                }}
                style={{
                  width: width / 3,
                  height: width / 5,
                }}
              />
              <Image
                source={require("../../assets/khoaimg/discount1.png")}
                style={{
                  width: width / 15,
                  height: width / 15,
                  position: "absolute",
                  right: 20,
                }}
              />
              <View
                style={{
                  marginTop: 4,
                  width: width / 3,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "RototoMedium",
                    }}
                  >
                    Sân Cầu Vồng
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <AntDesign name="star" size={14} color="#F7B603" />
                    <Text
                      style={{
                        fontFamily: "RototoMedium",
                        paddingLeft: 3,
                      }}
                    >
                      3.2
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "baseline",
                    }}
                  >
                    <MaterialCommunityIcons
                      name="soccer-field"
                      color="#3ac5c9"
                      size={18}
                    />
                    <Text
                      style={{
                        fontFamily: "RototoMedium",
                        paddingLeft: 3,
                      }}
                    >
                      Sân 7
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "baseline",
                      marginTop: 2,
                      marginBottom: 2,
                    }}
                  >
                    <Entypo name="location-pin" size={16} color="#3ac5c9" />
                    <Text
                      style={{
                        fontFamily: "RobotoBlack",
                      }}
                    >
                      2 km
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "baseline",
                  }}
                >
                  <FontAwesome5 name="money-bill" color="#3ac5c9" size={14} />
                  <Text
                    style={{
                      fontFamily: "RototoMedium",
                    
                      textDecorationLine: "line-through",
                      textDecorationStyle: "solid",
                      fontSize: 12,
                    }}
                  >
                    290.000
                  </Text>
                  <Text
                    style={{
                      fontFamily: "RototoMedium",
                    
                      fontWeight: "700",
                      color: "red",
                    }}
                  >
                    130.000 vnđ
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                // borderWidth: 2,
                paddingRight: 16,
                // borderTopColor: "transparent",
                // borderBottomColor: "transparent",
                // borderLeftColor: "transparent",
                // borderRightColor: "#3ac5c9",
              }}
            >
              <Image
                source={{
                  uri: "https://iconfacebook.net/wp-content/uploads/2021/02/bong-chay-la-gi-tong-hop-danh-sach-san-bong-chay-chat-luong-nhat-1613373634.jpeg",
                }}
                style={{
                  width: width / 3,
                  height: width / 5,
                }}
              />
              <Image
                source={require("../../assets/khoaimg/discount1.png")}
                style={{
                  width: width / 15,
                  height: width / 15,
                  position: "absolute",
                  right: 20,
                }}
              />
              <View
                style={{
                  marginTop: 4,
                  width: width / 3,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "RototoMedium",
                    }}
                  >
                    Sân Rồng
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <AntDesign name="star" size={14} color="#F7B603" />
                    <Text
                      style={{
                        fontFamily: "RototoMedium",
                        paddingLeft: 3,
                      }}
                    >
                      4.0
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "baseline",
                    }}
                  >
                    <MaterialCommunityIcons
                      name="soccer-field"
                      color="#3ac5c9"
                      size={18}
                    />
                    <Text
                      style={{
                        fontFamily: "RototoMedium",
                        paddingLeft: 3,
                      }}
                    >
                      1Sân 11
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "baseline",
                      marginTop: 2,
                      marginBottom: 2,
                    }}
                  >
                    <Entypo name="location-pin" size={16} color="#3ac5c9" />
                    <Text
                      style={{
                        fontFamily: "RobotoBlack",
                      }}
                    >
                      1.9 km
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "baseline",
                  }}
                >
                  <FontAwesome5 name="money-bill" color="#3ac5c9" size={14} />
                  <Text
                    style={{
                      fontFamily: "RototoMedium",
                    
                      textDecorationLine: "line-through",
                      textDecorationStyle: "solid",
                      fontSize: 12,
                    }}
                  >
                    700.000
                  </Text>
                  <Text
                    style={{
                      fontFamily: "RototoMedium",
                    
                      fontWeight: "700",
                      color: "red",
                    }}
                  >
                    550.000 vnđ
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                // borderWidth: 2,
                paddingRight: 16,
                // borderTopColor: "transparent",
                // borderBottomColor: "transparent",
                // borderLeftColor: "transparent",
                // borderRightColor: "#3ac5c9",
              }}
            >
              <Image
                source={{
                  uri: "https://blog.yousport.vn/wp-content/uploads/2018/09/k%C3%ADch-th%C6%B0%E1%BB%9Bc-s%C3%A2n-5.jpg",
                }}
                style={{
                  width: width / 3,
                  height: width / 5,
                }}
              />
              <Image
                source={require("../../assets/khoaimg/discount1.png")}
                style={{
                  width: width / 15,
                  height: width / 15,
                  position: "absolute",
                  right: 20,
                }}
              />
              <View
                style={{
                  marginTop: 4,
                  width: width / 3,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "RototoMedium",
                    }}
                  >
                    Sân Thượng
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <AntDesign name="star" size={14} color="#F7B603" />
                    <Text
                      style={{
                        fontFamily: "RototoMedium",
                        paddingLeft: 3,
                      }}
                    >
                      1.2
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <MaterialCommunityIcons
                      name="soccer-field"
                      color="#3ac5c9"
                      size={18}
                    />
                    <Text
                      style={{
                        fontFamily: "RototoMedium",
                        paddingLeft: 3,
                      }}
                    >
                      Sân 7
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "baseline",
                      marginTop: 2,
                      marginBottom: 2,
                    }}
                  >
                    <Entypo name="location-pin" size={16} color="#3ac5c9" />
                    <Text
                      style={{
                        fontFamily: "RobotoBlack",
                      }}
                    >
                      2.6 km
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "baseline",
                  }}
                >
                  <FontAwesome5 name="money-bill" color="#3ac5c9" size={14} />
                  <Text
                    style={{
                      fontFamily: "RototoMedium",
                    
                      textDecorationLine: "line-through",
                      textDecorationStyle: "solid",
                      fontSize: 12,
                    }}
                  >
                    470.000
                  </Text>
                  <Text
                    style={{
                      fontFamily: "RototoMedium",
                    
                      fontWeight: "700",
                      color: "red",
                    }}
                  >
                    100.000 vnđ
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                // borderWidth: 2,
                paddingRight: 16,
                // borderTopColor: "transparent",
                // borderBottomColor: "transparent",
                // borderLeftColor: "transparent",
                // borderRightColor: "#3ac5c9",
              }}
            >
              <Image
                source={{
                  uri: "https://cdn.bongdaplus.vn/Assets/Media/2020/04/17/66/tq0.jpg",
                }}
                style={{
                  width: width / 3,
                  height: width / 5,
                }}
              />
              <Image
                source={require("../../assets/khoaimg/discount1.png")}
                style={{
                  width: width / 15,
                  height: width / 15,
                  position: "absolute",
                  right: 20,
                }}
              />
              <View
                style={{
                  marginTop: 4,
                  width: width / 3,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "RototoMedium",
                    }}
                  >
                    Sân Bay
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <AntDesign name="star" size={14} color="#F7B603" />
                    <Text
                      style={{
                        fontFamily: "RototoMedium",
                        paddingLeft: 3,
                      }}
                    >
                      5.0
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "baseline",
                      alignItems: "center",
                    }}
                  >
                    <MaterialCommunityIcons
                      name="soccer-field"
                      color="#3ac5c9"
                      size={18}
                    />
                    <Text
                      style={{
                        fontFamily: "RototoMedium",
                        paddingLeft: 3,
                      }}
                    >
                      Sân 5
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "baseline",
                      marginTop: 2,
                      marginBottom: 2,
                    }}
                  >
                    <Entypo name="location-pin" size={16} color="#3ac5c9" />
                    <Text
                      style={{
                        fontFamily: "RobotoBlack",
                      }}
                    >
                      0.5 km
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "baseline",
                  }}
                >
                  <FontAwesome5 name="money-bill" color="#3ac5c9" size={14} />
                  <Text
                    style={{
                      fontFamily: "RototoMedium",
                      textDecorationLine: "line-through",
                      textDecorationStyle: "solid",
                      fontSize: 12,
                    }}
                  >
                    1.000.000
                  </Text>
                  <Text
                    style={{
                      fontFamily: "RototoMedium",
                    
                      fontWeight: "700",
                      color: "red",
                    }}
                  >
                    900.000 vnđ
                  </Text>
                </View>
              </View>
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
