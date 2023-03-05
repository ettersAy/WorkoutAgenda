import React, { useState } from "react";
import { Text, View,Modal, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import ExerciseModel from "../models/ExerciseModel";
import ExerciseCard from "./ExerciseCard";
import SelectModal from "./SelectModal";

import { EXERCISES_PER_MUSCLE_ALL } from "../data";
import { ActivityIndicator } from "react-native-paper";

export default MuscleCard = ({ muscle, updateMuscle, deleteMuscle }) => {
  const [exerciseList, setExerciseList] = useState(muscle.exerciseList);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const updateList = (newList) => {
    setIsLoading(true);
    setExerciseList([]);
    muscle.exerciseList = [...newList];
    updateMuscle(muscle);
    setExerciseList(muscle.exerciseList);
    setIsLoading(false);
  };

  const deleteExercise = (exerciseId) => {
    if (exerciseList.length > 1) {
      updateList(exerciseList.filter((exercise) => exercise.id !== exerciseId));
    }
  };

  const addNewExercise = (exerciseName) => {
    //console.log('exerciseName: ' + exerciseName);
    updateList([...exerciseList, new ExerciseModel(null, exerciseName)]);
    setModalVisibility(false);
  };

  const updateExercise = (exerciseUpdated) => {
    if (exerciseList.length) {
      updateList(
        exerciseList.map((exercise) => {
          return exercise.id === exerciseUpdated.id
            ? exerciseUpdated
            : exercise;
        })
      );
    }
  };

  const getNotExistingExercise = () => {
    const existingExercises = exerciseList.map((exercise) => exercise.name);
    console.log({ MuscleName: muscle.name });
    return EXERCISES_PER_MUSCLE_ALL[muscle.name].filter(
      (exerciseName) => !existingExercises.includes(exerciseName)
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={muscle.imageSource} style={styles.image} />
        <Text style={styles.title}>{muscle.name}</Text>
        <TouchableOpacity style={styles.addButton} onPress={() => setModalVisibility(true)}>
          <MaterialIcons name="add-circle-outline" size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          exerciseList.map((exercise, index) => (
            <ExerciseCard
              key={exercise.id}
              exercise={exercise}
              updateExercise={updateExercise}
              deleteExercise={deleteExercise}
            />
          ))
        )}
      </View>
      <Modal animationType="slide" transparent={true} visible={modalVisibility}>
        <SelectModal
          modalVisibility={modalVisibility}
          setModalVisibility={setModalVisibility}
          action={addNewExercise}
          getFilteredList={getNotExistingExercise}
          name={"exercise"}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  listContainer: {
    flex: 1,
  },
  addButton: {
    marginLeft: 10,
    width: 20,
    height: 20,
  },
});
