import React, {useState} from "react";
import { Ionicons } from "@expo/vector-icons";
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
      <Text style={styles.label}>Rep</Text>
      <TextInput
        value={weight.toString()}
        maxLength={3}
        style={styles.inputText}
        onChangeText={setWeight}
        onSubmitEditing={applyModif}
        keyboardType="numeric"
      />
      <Text style={styles.label}>kg</Text>
      <TouchableOpacity onPress={() => deleteSet(setItem.id)}>
        <Ionicons name="trash" size={18} color="black" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    // add a shadow to the container
    container:{
        flexDirection: 'row',
        marginLeft:10,
        marginTop:10,
        padding: 10,
        backgroundColor: '#40414f',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        elevation: 10,
      },
      inputText: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginTop: -5,
        marginLeft: 3,
        marginRight: 5,
        //paddingLeft: 5,
        fontSize: 12,
        color: 'white',
      },
      label: {
        fontSize: 13,
        marginRight: 10,
        color: 'white',
      },
      icon: {
        margin: 0,
        padding: 0,
        color: 'white',
      },
});
