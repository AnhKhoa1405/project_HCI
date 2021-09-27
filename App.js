import React from "react";
import { StyleSheet, View } from "react-native";
import Home from "./Home/Home";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeStadium from "./ListStadium/HomeStadium";

const Stack = createStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Home />
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
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
