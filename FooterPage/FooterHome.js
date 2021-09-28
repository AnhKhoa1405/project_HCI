import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Home/Home";
import LoveMyPitch from "../LovePitch/LoveMyPitch";
import BookPitch from "../BookedPitch/BookPitch";
import HomeStadium from "../ListStadium/HomeStadium";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ childen, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: "center",
        alignItems: "center",
        ...styles.shadow,
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: width / 6,
          height: width / 6,
          borderRadius: 35,
          backgroundColor: "#e32f45",
        }}
      >
        {childen}
      </View>
    </TouchableOpacity>
  );
};
export default function FooterHome() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: "#ffffff",

          height: width / 6,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ forcused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 3,
              }}
            >
              <Image
                source={require("../assets/khoaimg/home.png")}
                resizeMode="contain"
                style={{
                  width: width / 16,
                  height: width / 16,
                  tintColor: forcused ? "#e32f46" : "#748c94",
                  marginBottom: 3,
                }}
              />
              <Text
                style={{
                  color: forcused ? "#e32f46" : "#748c94",
                  fontSize: 10,
                }}
              >
                TRANG CHỦ
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="LoveMyPitch"
        component={LoveMyPitch}
        options={{
          tabBarIcon: ({ forcused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 3,
              }}
            >
              <Image
                source={require("../assets/khoaimg/pitch.png")}
                resizeMode="contain"
                style={{
                  width: width / 16,
                  height: width / 16,
                  tintColor: forcused ? "#e32f46" : "#748c94",
                  marginBottom: 3,
                }}
              />
              <Text
                style={{
                  color: forcused ? "#e32f46" : "#748c94",
                  fontSize: 10,
                }}
              >
                SÂN ĐÃ ĐẶT
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="FootballList"
        component={Home}
        options={{
          tabBarIcon: ({ forcused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 3,
              }}
            >
              <Image
                source={require("../assets/khoaimg/love.png")}
                resizeMode="contain"
                style={{
                  width: width / 16,
                  height: width / 16,
                  tintColor: forcused ? "#e32f46" : "#748c94",
                  marginBottom: 3,
                }}
              />
              <Text
                style={{
                  color: forcused ? "#e32f46" : "#748c94",
                  fontSize: 10,
                }}
              >
                SÂN YÊU THÍCH
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="BookPitch"
        component={BookPitch}
        options={{
          tabBarIcon: ({ forcused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 3,
              }}
            >
              <Image
                source={require("../assets/khoaimg/discount.png")}
                resizeMode="contain"
                style={{
                  width: width / 16,
                  height: width / 16,
                  tintColor: forcused ? "#e32f46" : "#748c94",
                  marginBottom: 3,
                }}
              />
              <Text
                style={{
                  color: forcused ? "#e32f46" : "#748c94",
                  fontSize: 10,
                }}
              >
                KHUYẾN MÃI
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="HomeStadium"
        component={Home}
        options={{
          tabBarIcon: ({ forcused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 3,
              }}
            >
              <Image
                source={require("../assets/khoaimg/settings.png")}
                resizeMode="contain"
                style={{
                  width: width / 16,
                  height: width / 16,
                  tintColor: forcused ? "#e32f46" : "#748c94",
                  marginBottom: 3,
                }}
              />
              <Text
                style={{
                  color: forcused ? "#e32f46" : "#748c94",
                  fontSize: 10,
                }}
              >
                CÀI ĐẶT
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
