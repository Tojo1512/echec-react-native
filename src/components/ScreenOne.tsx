import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { ChessBoard } from "./ChessBoard";

type ScreenOneProps = {
  navigation: FrameNavigationProp<MainStackParamList, "One">,
};

export function ScreenOne({ navigation }: ScreenOneProps) {
  return (
    <flexboxLayout style={styles.container}>
      <label className="text-2xl mb-4 font-bold text-center">
        Chess Game
      </label>
      <ChessBoard />
      <button
        style={styles.button}
        onTap={() => navigation.navigate("Two", { message: "Game Over!" })}
      >
        End Game
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
  },
  button: {
    fontSize: 18,
    color: "#2e6ddf",
    marginTop: 20,
  },
});