import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import SetModel from "../models/SetModel";
import ExerciseModel from "../models/ExerciseModel";

export default ExerciseEditor = ({ exercise, onSave }) => {
  const [name, setName] = useState(exercise.name);
  const [setList, setSetList] = useState(exercise.setList);

  const handleSave = () => {
    const updatedExercise = new ExerciseModel(exercise.id, name, setList, exercise.done);
    onSave(updatedExercise);
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, padding: 5, marginTop: 5 }}
        value={name}
        onChangeText={setName}
        placeholder="Enter exercise name"
      />
      {setList.map((set, index) => (
        <View key={index} style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
          <Text style={{ marginRight: 10 }}>Set {index + 1}</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, padding: 5, flex: 1, marginRight: 10 }}
            value={set.nbrRep.toString()}
            onChangeText={(value) => {
              const newSetList = [...setList];
              newSetList[index].nbrRep = parseInt(value) || 0;
              setSetList(newSetList);
            }}
            keyboardType="numeric"
            placeholder="Number of Reps"
          />
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, padding: 5, flex: 1, marginRight: 10 }}
            value={set.weight.toString()}
            onChangeText={(value) => {
              const newSetList = [...setList];
              newSetList[index].weight = parseInt(value) || 0;
              setSetList(newSetList);
            }}
            keyboardType="numeric"
            placeholder="Weight"
          />
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, padding: 5, flex: 1, marginRight: 10 }}
            value={set.done.toString()}
            onChangeText={(value) => {
              const newSetList = [...setList];
              newSetList[index].done = value.toLowerCase() === "true";
              setSetList(newSetList);
            }}
            placeholder="Done"
          />
        </View>
      ))}
      <Button title="Add Set" onPress={() => setSetList([...setList, SetModel.getRandom()])} />
      <View style={{ marginTop: 10 }}>
        <Button title="Save" onPress={handleSave} />
      </View>
    </View>
  );
};

