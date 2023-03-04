import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import ExerciseModel from "../models/ExerciseModel";
import ExerciseCard from "./ExerciseCard";

export default MuscleCard = ({}) => {
  const [exercise, setExercise] = useState(ExerciseModel.getRandom());

  const updateExercise = (exerciseUpdated) => {
    console.log("exerciseUpdated : " + exerciseUpdated.getSummary());
  };

  const deleteExercise = (exerciseIdToDelete) => {
    console.log("Exercise to delete : " + exerciseIdToDelete);
  };

  return (
    <View>
      <ExerciseCard
        exercise={exercise}
        updateExercise={updateExercise}
        deleteExercise={deleteExercise}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 10,
    padding: 5,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
  },
  inputText: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginTop: -5,
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 5,
  },
  icon: {
    margin: 0,
    padding: 0,
    marginLeft: 20,
  },
});
