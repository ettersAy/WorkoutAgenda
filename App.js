import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/screens/HomeScreen";
import WorkoutScreen from "./src/screens/WorkoutScreen";
import UserScreen from "./src/screens/UserScreen";
import SettingScreen from "./src/screens/SettingScreen";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Workout: WorkoutScreen,
    User: UserScreen,
    Setting: SettingScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#006600",
      },
      headerTitleStyle: {
        fontWeight: "bold",
        color: "#FFF",
      },
      headerTintColor: "#FFF",
    },
  },
  {
    initialRouteName: "Workout",
  }
);

const Navigator = createAppContainer(AppNavigator);

export default function App() {
  console.log("Starting App");
  return (
    <Navigator>
      <WorkoutScreen />
    </Navigator>
  );
}