import React, { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  Item,
  HeaderButton,
  HeaderButtons,
} from "react-navigation-header-buttons";
import WorkoutModel from "../models/WorkoutModel";
import SetCard from "../component/SetCard";
import SetModel from "../models/SetModel";

export default WorkoutScreen = (props) => {
  const [setInstance, setSetInstance] = useState(SetModel.getRandom());
  const [workout, setWorkout] = useState(new WorkoutModel(null, new Date()));
  workout.log();
  return (
    <View style={Styles.container}>
     <SetCard setInstance={setInstance} setSetInstance={setSetInstance}/>
    </View>
  );
};

const HeaderButtonComponent = (props) => (
  <HeaderButton
    IconComponent={Ionicons}
    iconSize={23}
    color="#FFF"
    {...props}
  />
);

Home.navigationOptions = (navData) => {
  return {
    headerTitle: "Workout",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
        <Item
          title="Calendar"
          iconName="md-calendar"
          onPress={() => {
            console.log("Go To workout Screen");
            navData.navigation.navigate("Workout");
          }}
        />
        <Item
          title="Setting"
          iconName="ios-settings-outline"
          onPress={() => navData.navigation.navigate("Setting")}
        />
      </HeaderButtons>
    ),
  };
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});