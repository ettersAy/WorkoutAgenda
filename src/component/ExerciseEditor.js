import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import SetModel from "../models/SetModel";
import ExerciseModel from '../models/ExerciseModel';

const ExerciseEditor = ({ exercise }) => {
  const [sets, setSets] = useState(exercise.setList);

  const handleAddSet = () => {
    setSets([...sets, SetModel.getRandom()]);
  };

  const handleDeleteSet = (index) => {
    const newSets = [...sets];
    newSets.splice(index, 1);
    setSets(newSets);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={exercise.imageSource} style={styles.image} />
        <Text style={styles.title}>{exercise.name}</Text>
      </View>
      <View style={styles.setsContainer}>
        <Text style={styles.subTitle}>Sets:</Text>
        {sets.map((set, index) => (
          <View key={index} style={styles.set}>
            <Text style={styles.setNumber}>Set {index + 1}:</Text>
            <Text>{set.nbrRep} Reps </Text>
            <Text>{set.weight} kg </Text>
            <TouchableOpacity onPress={() => handleDeleteSet(index)}>
              <MaterialIcons name="delete" size={24} color="black" />
            </TouchableOpacity>
          </View>
        ))}
        <TouchableOpacity style={styles.addButton} onPress={handleAddSet}>
          <MaterialIcons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  setsContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  set: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  setNumber: {
    marginRight: 10,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: 'blue',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
});

export default ExerciseEditor;
