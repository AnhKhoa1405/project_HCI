import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Home from "./Home/Home";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeStadium from "./ListStadium/HomeStadium";
import SignIn from "./AccountOption/SignIn";
import InputPhone from "./AccountOption/InputPhone";
import InputName from "./AccountOption/InputName";
import InputPassword from "./AccountOption/InputPassword";
import GetLocation from "./AccountOption/GetLocation";
import FooterHome from "./FooterPage/FooterHome";
import Discount from "./Discount/Discount";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen
          options={{
            title: "1/3",
            headerTitleStyle: {
              textAlign: "right",
              fontFamily: "RobotoMedium",
              fontSize: 15,
            },
            headerBackTitle: "",
          }}
          name="InputPhone"
          component={InputPhone}
        />
        <Stack.Screen
          options={{
            title: "3/3",
            headerTitleStyle: {
              textAlign: "right",
              fontFamily: "RobotoMedium",
              fontSize: 15,
            },
            headerBackTitle: "",
          }}
          name="InputName"
          component={InputName}
        />
        <Stack.Screen
          options={{
            title: "2/3",
            headerTitleStyle: {
              textAlign: "right",
              fontFamily: "RobotoMedium",
              fontSize: 15,
            },
            headerBackTitle: "",
          }}
          name="InputPassword"
          component={InputPassword}
        />
        <Stack.Screen
          options={{ title: "", headerBackTitle: "" }}
          name="GetLocation"
          component={GetLocation}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Footer"
          component={FooterHome}
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        ></Stack.Screen>
        <Stack.Screen name="HomeStadium" component={HomeStadium}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
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
