import MuscleModel from "./MuscleModel";
import { randomId, randomElement, formatDate } from "../Lib";
import { GROUPED_MUSCLE } from "../data";

export default class WorkoutModel {
  constructor(id, date, muscleList = [], done = false) {
    this.id = id ? id : randomId();
    this.date = formatDate(date);
    this.done = done;
    this.setMuscleList(muscleList);
  }

  setMuscleList(muscleList = []) {
    muscleList = muscleList && muscleList.length ? muscleList : [];
    this.muscleList = workoutList = muscleList.map((muscle) =>
      MuscleModel.createInstance(muscle)
    );

    return this;
  }

  static createInstance(object) {
    return new WorkoutModel(
      object.id,
      object.date,
      object.muscleList,
      object.done
    );
  }

  getDay() {
    date = new Date(this.date);
    const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    const dayOfWeek = days[date.getDay()];
    const month = date.getMonth() + 1;
    const dayOfMonth = date.getDate();

    return `${dayOfWeek} ${month}/${dayOfMonth}`;
  }

  static getRandom() {
    let muscleList = GROUPED_MUSCLE.map((group) => randomElement(group));
    muscleList = muscleList
      .map((muscle, index) => MuscleModel.getRandom(muscle, index + 1))
      .reverse();
    return new WorkoutModel(randomId(), new Date(), muscleList);
  }

  checkIfDone() {
    let done = 1;
    for (let i = 0; i < this.repExecs.length; i++) {
      if (this.repExecs[i].done !== 1) {
        done = 0;
        break;
      }
    }
    this.done = done;
    return this;
  }

  getShortSummary() {
    return `${this.date} : \n ${this.getSummary()}`;
  }
  getSummary() {
    strSummary =
      this.muscleList.length === 0
        ? "No exercises"
        : this.muscleList
            .map((key) => this.muscleList[key].getSummary())
            .join(", ");
    return `${this.date} : ${strSummary}`;
  }
  log() {
    let strSummary = this.muscleList
      .map((key) => this.muscleList[key].getSummary())
      .join(", ");
    console.log(`${this.getSummary()} : ${strSummary}`);
  }

  addMuscle(muscleName) {
    if (!this.muscleList[muscleName]) {
      this.muscleList = Object.assign(
        { [muscleName]: new MuscleModel(muscleName) },
        this.muscleList
      );
    }
    return this;
  }

  clone() {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }

  getAllMuscles() {
    return this.muscleList.map((muscle) => muscle.name);
  }

  getAllExercises() {
    return this.muscleList.map((muscle) => muscle.getAllExercises());
  }

  exerciseExists(exerciseName) {
    return this.getAllExercises().includes(exerciseName);
  }
  log() {
    console.log(`WorkoutModel:: ${this.getSummary()}`);
  }
}
