import React from "react";
import { View, Text, Image, StyleSheet, Button, Pressable } from "react-native";

const MainLogoImg = require("../assets/images/title_blue_01.png");

const MainTitle = ({ navigation }) => {
  const handleAdventurePress = () => {
    console.log("handleAdventurePress");
    navigation.navigate("Menu1");
  };
  const handleQuickQuizPress = () => {
    navigation.navigate("Quick Quiz");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.LogoImg} source={MainLogoImg} />
      <Pressable style={styles.Btn} onPressOut={handleAdventurePress}>
        <Text style={styles.text}>Adventure</Text>
      </Pressable>
      <Pressable style={styles.Btn} onPressOut={handleQuickQuizPress}>
        <Text style={styles.text}>Quick Quiz</Text>
      </Pressable>
      <Pressable disabled style={styles.Btn} onPressOut={handleAdventurePress}>
        <Text style={styles.text}>Leaderboard</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  LogoImg: {
    width: 350,
    resizeMode: "contain",
  },
  Btn: {
    borderRadius: 8,
    backgroundColor: "hsl(348,63%, 55%)",
    padding: 6,
    alignItems: "center",
    marginVertical: 10,
    width: 200,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    // fontFamily: "Lobster",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // margin: 50,
  },
});

export default MainTitle;
