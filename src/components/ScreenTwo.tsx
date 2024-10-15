import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type ScreenTwoProps = {
  route: RouteProp<MainStackParamList, "Two">,
  navigation: FrameNavigationProp<MainStackParamList, "Two">,
};

export function ScreenTwo({ navigation, route }: ScreenTwoProps) {
  return (
    <flexboxLayout style={styles.container}>
      <label style={styles.text}>
        {route.params.message}
      </label>
      <button
        style={styles.button}
        onTap={() => navigation.navigate("One")}
      >
        New Game
      </button>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  text: {
    textAlignment: "center",
    fontSize: 24,
    color: "black",
    marginBottom: 20,
  },
  button: {
    fontSize: 18,
    color: "#2e6ddf",
  },
});