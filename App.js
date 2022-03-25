import React, { useState, Fragment } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Components
import MainTitle from "./components/MainTitle";
import Menu1 from "./components/Menu1";
import QuickQuizMenu from "./components/QuickQuizMenu";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator style={styles.container}>
        {/* <Fragment style={styles.container}> */}
        <Stack.Screen
          name="MainTitle"
          component={MainTitle}
          options={{ title: "Welcome !" }}
        />
        <Stack.Screen name="Quick Quiz" component={QuickQuizMenu} />
        {/* </Fragment> */}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    margin: 50,
  },
});
