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
import ExerciseEditor from "../component/ExerciseEditor";
import MuscleCard from "../component/MuscleCard";
import MuscleModel from "../models/MuscleModel";

export default WorkoutScreen = (props) => {
  const [workout, setWorkout] = useState(new WorkoutModel(null, new Date()));
  workout.log();
  const updateMuscle = (updatedMuscle) => {
    console.log("updateMuscle : " + updatedMuscle.getSummary());
  };

  const deleteMuscle = (idMuscleToDelete) => {
    console.log("Muscle to delete : " + idMuscleToDelete);
  };

  const onSave = (updatedExercise) => {
    console.log("onSave : " + updatedExercise.getSummary());
  }

  return (
    <View style={Styles.container}>
      <MuscleCard
        muscle={MuscleModel.getRandom()}
        updateMuscle={updateMuscle}
        deleteMuscle={deleteMuscle}
      />
      
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
