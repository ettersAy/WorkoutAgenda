import React, { useState } from 'react';
import { StyleSheet, Text, Pressable, View, ScrollView } from 'react-native';
import AutocompleteInput from './AutocompleteInput';

export default SelectModal = ({
  modalVisibility,
  setModalVisibility,
  action,
  getFilteredList,
  name
}) => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <AutocompleteInput action={action} initList={getFilteredList()} name={name} />

        <Pressable 
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisibility(!modalVisibility)}>
          <Text style={styles.textStyle}>Close</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    maxHeight: 300,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  listMuscle: {},
  muscleText: {
    margin: 5,
    marginTop: 10,
    padding: 5,
    paddingLeft: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
