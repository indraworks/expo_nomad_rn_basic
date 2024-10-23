import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/navigation/Tabs";

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isSplashVisible, setSplashVisible] = useState(true);
  useEffect(() => {
    // Simulate  delay 2 detik s
    setTimeout(async () => {
      setSplashVisible(false);
      await SplashScreen.hideAsync(); //hide splash screen after delay
    }, 2000);
  }, []);

  //tampilan 2 detik
  if (isSplashVisible) {
    return (
      <View style={styles.splashContainer}>
        <Image
          source={require("./assets/welcomeme.png")}
          style={styles.splashImage}
        />
      </View>
    );
  }

  //jika sudah slsai tampil layar biasanya homeSCreen

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  splashImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  homeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
