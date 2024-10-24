import React, { useEffect, useState } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  useColorScheme,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/navigation/Tabs";

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function App() {
  const systemColorScheme = useColorScheme(); //utk detect system color
  const [isDark, setIsDark] = useState(systemColorScheme === "dark");

  const [isSplashVisible, setSplashVisible] = useState(true);

  //manualy toggle between light and dark
  const toglecolorScheme = () => {};

  //toggle utk dark white manualy
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  //useEffect utk isDarknya
  useEffect(() => {
    setIsDark(systemColorScheme === "dark"); // sync system preference
  }, [systemColorScheme]);

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
    <View style={{ flex: 1 }}>
      <View style={{ padding: 20, marginTop: 50 }}>
        <Button title="Toggle Theme" onPress={toggleTheme} />
      </View>
      <NavigationContainer>
        {/* passing props :isDark to tabs componennt */}
        <Tabs isDark={isDark} />
      </NavigationContainer>
    </View>
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
