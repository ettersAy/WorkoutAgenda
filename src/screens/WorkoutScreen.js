import React, { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  Item,
  HeaderButton,
  HeaderButtons,
} from "react-navigation-header-buttons";
import WorkoutModel from "../models/WorkoutModel";
import ExerciseCard from "../component/ExerciseCard";
import ExerciseModel from "../models/ExerciseModel";
import SetEditor from "../component/SetEditor";
import SetModel from "../models/SetModel";

export default WorkoutScreen = (props) => {
  const [workout, setWorkout] = useState(new WorkoutModel(null, new Date()));
  workout.log();
  const updateExercise = (updatedExercise) => {
    console.log("updateSet : " + updatedExercise.getSummary());
  };

  const deleteExercise = (idExerciseToDelete) => {
    console.log("Set to delete : " + idExerciseToDelete);
  };
  return (
    <View style={Styles.container}>
      <ExerciseCard
        exercise={ExerciseModel.getRandom()}
        updateExercise={updateExercise}
        deleteExercise={deleteExercise}
      />
      <SetEditor setItem={new SetModel(null, 10, 10)} />
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

WorkoutScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Workout",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
        <Item
          title="Calendar"
          iconName="save"
          onPress={() => {
            console.log("Save Workout");
          }}
        />
        <Item
          title="Calendar"
          iconName="home"
          onPress={() => {
            console.log("Go To Home Screen");
            navData.navigation.navigate("Home");
          }}
        />
        <Item
          title="Setting"
          iconName="settings-outline"
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
