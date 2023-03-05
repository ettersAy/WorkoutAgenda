import React, { useState } from 'react';
import { View,Text,  Image, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import SetModel from "../models/SetModel";
import SetEditor from './SetEditor';

const ExerciseEditor = ({ exercise, onSave }) => {
  const [name, setName] = useState(exercise.name);
  const [setList, setSetList] = useState(exercise.setList);

  const handleSave = () => {
    const updatedExercise = new ExerciseModel(exercise.id, name, setList, exercise.done);
    onSave(updatedExercise);
  };

  const handleAddSet = () => {
    const newSetList = [...setList, SetModel.getRandom()];
    setSetList(newSetList);
  };

  const handleSetChange = (index, set) => {
    const newSetList = [...setList];
    newSetList[index] = set;
    setSetList(newSetList);
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
      <View style={{ marginRight: 10 }}>
        <Image
          source={require('../../assets/img.png')}
          style={{ width: 100, height: 100, borderRadius: 5 }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Exercise name"
        />
        {setList.map((set, index) => (
          <SetEditor
            key={index}
            setItem={set}
            onChange={(updatedSet) => handleSetChange(index, updatedSet)}
          />
        ))}
        <TouchableOpacity onPress={handleAddSet} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <Feather name="plus-circle" size={24} color="black" />
          <View style={{ marginLeft: 10 }}>
            <Text>Add Set</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSave} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Feather name="save" size={24} color="black" />
          <View style={{ marginLeft: 10 }}>
            <Text>Save Exercise</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ExerciseEditor;
