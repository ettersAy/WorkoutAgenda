import React, {useState} from "react";
import { AntDesign } from "@expo/vector-icons";
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";


export default SetCard = ({ setItem, updateSet , deleteSet }) => {
  const [nbrRep, setNbrRep] = useState(setItem.nbrRep);
  const [weight, setWeight] = useState(setItem.weight);

  const applyModif = () => {
    updateSet(setItem.update(nbrRep, weight));
    setNbrRep(setItem.nbrRep);
    setWeight(setItem.weight);
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={nbrRep.toString()}
        maxLength={2}
        style={styles.inputText}
        onChangeText={setNbrRep}
        onSubmitEditing={applyModif}
        keyboardType="numeric"
      />
      <Text>Reps with </Text>
      <TextInput
        value={weight.toString()}
        maxLength={3}
        style={styles.inputText}
        onChangeText={setWeight}
        onSubmitEditing={applyModif}
        keyboardType="numeric"
      />
      <Text>kg</Text>
      <TouchableOpacity onPress={() => deleteSet(setItem.id)}>
        <AntDesign name="delete" size={24} color="black" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginLeft:10,
        marginTop:10,
        padding:5,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
      },
      inputText: {
        borderBottomColor: 'black',
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
