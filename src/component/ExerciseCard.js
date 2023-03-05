import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import SetCard from "./SetCard";
import SetModel from "../models/SetModel";

export default ExerciseCard = ({
  exercise,
  updateExercise,
  deleteExercise,
}) => {
  const [setList, setSetList] = useState(exercise.setList);

  const updateList = (updatedList) => {
    setSetList([...updatedList]);
    exercise.setList = updatedList;
    updateExercise(exercise);
  };

  const addNewSet = () => {
    updateList([...setList, SetModel.getRandom()]);
  };

  const updateSet = (setUpdated) => {
    if (setList.length) {
      updateList(
        setList.map((setItem) => {
          return setItem.id === setUpdated.id ? setUpdated : setItem;
        })
      );
    }
  };

  const deleteSet = (setId) => {
    console.log({ deleteSet: setId });
    if (setList.length > 1) {
      updateList(setList.filter((setItem) => setItem.id !== setId));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image
          source={require("../../assets/exercise/Squat.png")}
          style={styles.image}
        />
        <View>
          <Text style={styles.title}>{exercise.name}</Text>
          {setList.length && (
            <ScrollView>
              {setList.map((setItem, index) => (
                <SetCard
                  key={setItem.id}
                  setItem={setItem}
                  updateSet={updateSet}
                  deleteSet={deleteSet}
                />
              ))}
            </ScrollView>
          )}
          <View style={styles.footer}>
            <TouchableOpacity onPress={addNewSet}>
              <Ionicons
                name="add-circle-sharp"
                size={24}
                color="black"
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteExercise(exercise.id)}>
              <Ionicons
                name="trash"
                size={24}
                color="black"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "red",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
  },
  body: {
    flexDirection: "row",
  },
  image: {
    width: 60, // width of your image in pixels
    height: 90, // height of your image in pixels
    borderRadius: 5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "flex-end",
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
  title: {
    fontSize: 15,
    marginLeft: 10,
    color: "black",
  },
});
