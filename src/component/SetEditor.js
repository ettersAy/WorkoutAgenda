import React, { useState } from "react";
import { TextInput, View, Button, Image } from "react-native";
//import {  } from 'react-native-elements';

const SetEditor = ({ setItem }) => {
  const [nbr, setNbr] = useState(setItem.nbrRep.toString());
  const [weight, setWeight] = useState(setItem.weight.toString());
  const [done, setDone] = useState(setItem.done.toString());

  const handleSave = () => {
    //onSave(new SetModel(parseInt(nbr), parseInt(weight), done === 'true'));
  };

  return (
    <View style={{ borderRadius: 5 }}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../../assets/red/Chest_red.png")}
          style={{ width: 100, height: 100, borderRadius: 5 }}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <TextInput
            value={nbr}
            onChangeText={setNbr}
            placeholder="Number of Reps"
          />
          <TextInput
            value={weight}
            onChangeText={setWeight}
            placeholder="Weight"
          />
          <TextInput value={done} onChangeText={setDone} placeholder="Done" />
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <Button
          title="Save"
          onPress={handleSave}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
        />
      </View>
    </View>
  );
};

export default SetEditor;
