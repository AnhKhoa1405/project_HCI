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

export default function HighRating(props) {
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
            Sân được đánh giá cao
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("HomeStadium", {
                name: titleName != undefined ? titleName : "Bóng đá",
                filter: "high",
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
                  uri: "https://nld.mediacdn.vn/2020/4/20/1-15873512964081682775236.jpg",
                }}
                style={{
                  width: width / 3,
                  height: width / 5,
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
                    Sân Lũ Lụt
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
                        fontFamily: "RobotoBlack",
                      }}
                    >
                      3.0
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
                      11 vs 11
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
                    <Text>7 km</Text>
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
                      paddingLeft: 3,
                    }}
                  >
                    720.000 vnđ / 1h
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
                  uri: "https://tikibook.com/upload/news/042021/san-van-dong-optus-0.jpg",
                }}
                style={{
                  width: width / 3,
                  height: width / 5,
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
                    Sân Hàm Rồng
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <AntDesign name="star" size={14} color="#F7B603" />
                    <Text
                      style={{
                        fontFamily: "RobotoBlack",
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
                      5 vs 5
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
                    <Text>3.5 km</Text>
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
                      paddingLeft: 3,
                    }}
                  >
                    120.000 vnđ / 1h
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
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxAZ0SHDJlkPS5lEWE6GgjAOw7qSUoipf8G98ZjnAbAV5vGUYjDgjMXE8NCstEb2Bet9A&usqp=CAU",
                }}
                style={{
                  width: width / 3,
                  height: width / 5,
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
                    Sân Công Viên
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <AntDesign name="star" size={14} color="#F7B603" />
                    <Text
                      style={{
                        fontFamily: "RobotoBlack",
                        paddingLeft: 3,
                      }}
                    >
                      2.2
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
                      5 vs 5
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
                    <Text>5 km</Text>
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
                      paddingLeft: 3,
                    }}
                  >
                    450.000 vnđ / 1h
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
                  uri: "https://cdn1.tuoitre.vn/zoom/600_315/2020/6/17/photo-1-1592380746735413858541-crop-15923808269651850829597.jpg",
                }}
                style={{
                  width: width / 3,
                  height: width / 5,
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
                    Sân Mỹ Đình
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <AntDesign name="star" size={14} color="#F7B603" />
                    <Text
                      style={{
                        fontFamily: "RobotoBlack",
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
                      7 vs 7
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
                    <Text>10 km</Text>
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
                      paddingLeft: 3,
                    }}
                  >
                    500.000 vnđ / 1h
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
                  uri: "https://kenh14cdn.com/Images/Uploaded/Share/2010/12/11/1212Umm-Slal.jpg",
                }}
                style={{
                  width: width / 3,
                  height: width / 5,
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
                    Sân Cát
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <AntDesign name="star" size={14} color="#F7B603" />
                    <Text
                      style={{
                        fontFamily: "RobotoBlack",
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
                      5 vs 5
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
                    <Text>6.2 km</Text>
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
                      paddingLeft: 3,
                    }}
                  >
                    600.000 vnđ / 1h
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
