import ExerciseModel from './ExerciseModel';
import { MUSCLE_GROUPS, EXERCISES_PER_MUSCLE_ALL } from '../data';
import { randomId, randomElement } from '../Lib';

export default class MuscleModel {
  constructor(id, name, exerciseList = [], done = false) {
    this.id = id ? id : randomId();
    this.name = name;
    this.done = done; 
    this.setExerciseList(exerciseList);
  }

  static createInstance(object) {
    return new MuscleModel(object.id, object.name, object.exerciseList, object.done);
  }

  setExerciseList(exerciseList = []) {
    exerciseList = exerciseList && exerciseList.length ? exerciseList : [ExerciseModel.getRandom()];
    this.exerciseList = exerciseList.map((exercise) => ExerciseModel.createInstance(exercise));
    return this;
  }

  
  getDistinctWeight() {
    const weights = [];
    for (let i = 0; i < this.exerciseList.length; i++) {
      weights.concat(this.exerciseList[i].getDistinctWeight());
    }
    return weights.filter((item, index) => weights.indexOf(item) === index);
  }

  getCompletedExercises() {
    return this.exerciseList.filter((item, index) => item.done === 1);
  }

  percentageAchievement() {
    return Math.floor(this.getCompletedExercises() / this.exerciseList.length);
  }

  static getRandom(muscleName, nbrExercise = 3) {
    muscleName = muscleName ? muscleName : randomElement(Object.values(MUSCLE_GROUPS));
    let exercises = []
    for (let i = 0; i < nbrExercise; i++) {
      exercises.push(ExerciseModel.getRandom(muscleName));
    } 
   
    return new MuscleModel(randomId(), muscleName, exercises);
  }
  getShortSummary() {
    return `${this.date} : \n ${this.getSummary()} `;
  }
  
  getSummary() {
    return this.exerciseList.map((exercise, index) => `${index+1}- ${exercise.name} : ${exercise.getShortSummary()} `).join( "\n"); 
  }

  isDone() {
    if (!this.exerciseList.length) {
      this.done = 0;
      return this;
    }
    let done = 1;
    for (let i = 0; i < this.exerciseList.length; i++) {
    //console.log('exerciseList ' + i + ' : ' + this.exerciseList[i].done);
      if (!this.exerciseList[i].done) {
        done = 0;
        break;
      }
    }
    this.done = done;
    return this;
  }
  addExerciseList(exerciseList) {}
  getAllExercises() {
    return this.exerciseList.map((exercise) => exercise.name);
  }
  log() {
    let strSummary = this.exerciseList
      .map((key) => this.exerciseList[key].getSummary())
      .join(', ');
    console.log(`${this.getSummary()} : ${strSummary}`);
  }
  
}
