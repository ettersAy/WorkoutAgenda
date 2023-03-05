import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default AutocompleteInput = ({ action, initList, name }) => {
  console.log({'name': name});
  const [suggestions, setSuggestions] = useState(initList);
  const [inputValue, setInputValue] = useState('');

  handleInputChange = (inputValue) => {
    setInputValue(inputValue);
    if (inputValue.length > 0) {
      const suggestions = initList.filter((muscle) =>
        muscle.toLowerCase().startsWith(inputValue.toLowerCase())
      );
      setSuggestions(suggestions);
    } else {
      setSuggestions(initList);
    }
  };

  return (
    <View>
      <TextInput value={inputValue} onChangeText={handleInputChange} style={styles.inputText} placeholder={`Enter ${name} name`}/>
      <ScrollView>
        {suggestions.map((suggestion, index) => (
          <TouchableOpacity onPress={() => action(suggestion)} key={index}>
            <Text style={styles.suggestionText}>{suggestion}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  suggestionText: {
    margin: 5,
    marginTop: 10,
    padding: 5,
    paddingLeft: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },
  inputText:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 10,
  },
});
