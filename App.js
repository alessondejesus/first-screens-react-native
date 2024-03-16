import * as React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import StackNavigator from "./components/common/Navigator";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <NavigationContainer theme={NavigatorTheme}>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <StackNavigator />
    </NavigationContainer>
  );
}

const NavigatorTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    primary: "rgb(255, 45, 85)",
    background: "#fff",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "#BFC2C8",
    notification: "rgb(255, 69, 58)",
  },
};
