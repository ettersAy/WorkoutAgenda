import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card, Button, Title, Paragraph } from "react-native-paper";
import SetModel from "../models/SetModel";
import SetCard from "./SetCard";

export default ExerciseCard = ({
    exercise,
    deleteExercise,
    updateExercise,
  }) => {
  const [setItem, setSetItem] = useState(SetModel.getRandom());

  const updateSet = (setUpdated) => {
    console.log("updateSet : " + setUpdated.getSummary());
  };

  const deleteSet = (setIdToDelete) => {
    console.log("Set to delete : " + setIdToDelete);
  };

  return (
    <SetCard setItem={setItem} updateSet={updateSet} deleteSet={deleteSet} />
  );
};

const Styles = StyleSheet.create({
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
