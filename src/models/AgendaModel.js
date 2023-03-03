import WorkoutModel from "./WorkoutModel";
import { isDateEqual, formatDate } from "../Lib";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CommonActions } from "@react-navigation/native";

export default class AgendaModel {
  constructor(name = "UserAgenda", workoutList = []) {
    this.name = name;
    this.workoutList = [];
    if (workoutList && workoutList.length > 0) {
      this.setWorkoutList(workoutList);
      console.log(`Agenda constructor : ${workoutList[0]}`);
    }
  }

  static createInstance(object) {
    return new AgendaModel(object.name, object.workoutList);
  }

  setWorkoutList(workoutList = []) {
    this.workoutList =
      workoutList && workoutList.length
        ? (this.workoutList = workoutList.map((workout) =>
            WorkoutModel.createInstance(workout)
          ))
        : [];
    return this;
  }

  deleteWorkout(workoutToDelete) {
    return this.deleteWorkoutByDate(workoutToDelete.date);
  }

  deleteWorkoutByDate(workoutDate) {
    this.workoutList = this.workoutList.filter(
      (workout) => workout.date !== workoutDate
    );
    return this;
  }

  getWorkoutByDate(date) {
    return (this.workoutList && this.workoutList.length)
        ? this.workoutList.find((workout) => isDateEqual(workout.date, date))
        : null;
  }

  addWorkout(date) {
    let foundWorkout = this.getWorkoutByDate(date);
    if (foundWorkout) {
      return foundWorkout;
    }
    foundWorkout = new WorkoutModel(null, formatDate(date));
    this.workoutList[this.workoutList.length] = foundWorkout;
    return this.workoutList[this.workoutList.length - 1];
  }

  getAllDate() {
    return this.workoutList && this.workoutList.length
      ? this.workoutList.map((workout) => workout.date)
      : [];
  }

  dateExists(date) {
    return this.getAllDate().includes(date);
  }
  getAllMuscles() {
    return this.workoutList && this.workoutList.length
      ? this.workoutList.map((workout) => workout.getAllMuscles())
      : [];
  }

  getSummary() {
    if (!this.workoutList || this.workoutList.length == 0) {
      return "No Workout";
    }
    return this.name + " : \n" +
      this.workoutList
        .map((workout) => workout.getShortSummary())
        .join("\n - ")
    ;
  }
  cleanWorkoutList() {
    this.workoutList = this.workoutList.filter(
      (workout) => workout.muscleList.length > 0
    );
  }
  async save() {
    try {
      await AsyncStorage.setItem(this.name, JSON.stringify(this.workoutList));
      console.log("Data successfully saved \n" + this.getSummary());
    } catch (e) {
      console.log("Failed to save the data to the storage");
    }
  }

  deleteAgenda() {
    this.workoutList = [];
    this.save();
  }

  async loadWorkoutList() {
    let storedValue = null;
    try {
      storedValue = await AsyncStorage.getItem(this.name);
      console.log("Agenda loaded from storage");
    } catch (e) {
      console.log("Error: Failed to fetch Item from storage.");
    }
    if (storedValue) {
      this.setWorkoutList(JSON.parse(storedValue));
      console.log("Data loaded From Storage : " + this.getSummary());
    } else {
      this.workoutList = [new WorkoutModel()];
      console.log(
        "No data found in the Storage. Create new Workout " + this.getSummary()
      );
    }
    return true;
  }
  
  log() {
    console.log( '[AgendaModel]', this.getSummary());
  }
}
