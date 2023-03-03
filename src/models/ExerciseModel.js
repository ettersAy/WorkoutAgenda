// file: component/Exercise/ExerciseModel.js
import { EXERCISES_PER_MUSCLE_ALL, EXERCISES_PER_MUSCLE } from '../data';
import { randomId, randomElement } from '../Lib';
import SetModel from './SetModel';

export default class ExerciseModel {
  constructor(id, name, setList = [], done = false) {
    this.id = id ? id : randomId();
    this.name = name;
    this.done = done;
    this.setSetList(setList);
  }

  static createInstance(object) {
    return new ExerciseModel(
      object.id,
      object.name,
      object.setList,
      object.done
    );
  }

  setSetList(setList = []) {
    setList = setList && setList.length ? setList : [SetModel.getRandom()];
    this.setList = setList.map((setItem) => SetModel.createInstance(setItem));
    return this;
  }

  setDone(done) {
    $this.done = done;
    for (let i = 0, len = this.setList.length; i < len; i++) {
      this.setList[i].done = done;
    }
    return this;
  }

  isDone() {
    return this.getSetList().length === this.setList.length;
  }

  getSetList(done = -1) {
    return this.setList.filter((repInstance) =>
      done === -1 ? true : repInstance.done === done
    );
  }

  getAllReps(done = -1) {
    let allReps = [];
    for (let i = 0, len = this.setList.length; i < len; i++) {
      allReps.concat(
        this.setList[i].setList.filter((setExec) =>
          done === -1 ? true : setExec.done === done
        )
      );
    }
    return allReps;
  }

  getTotalNbrOfSets() {
    let allSetList = this.getAllSetList(),
      TotalNbrOfSets = 0;
    for (let i = 0, len = allSetList.length; i < len; i++) {
      TotalNbrOfSets += allSetList[i].nbr;
    }
    return TotalNbrOfSets;
  }

  /**
   * Calculates the percentage of set executions that are completed (i.e., have a done of 1).
   *
   * @return {number} The percentage of completed set executions, rounded down to the nearest integer.
   */
  achievementPercentage() {
    return Math.floor(this.getAllReps(1).length / this.getAllReps().length);
  }

  getDistinctWeight() {
    let weights = [];
    let tmpWeight = 0;
    for (let i = 0, len = this.setList.length; i < len; i++) {
      tmpWeight = this.setList[i].weight;
      if (tmpWeight && !weights.includes(tmpWeight)) {
        weights.push(tmpWeight);
      }
    }
    return weights;
  }

  getShortSummary() {
    return (
      '( ' +
      this.setList.map((setItem) => setItem.getSummary()).join(' ), (') +
      ' )'
    );
  }
  getSummary() {
    let repStr = this.setList.map((setItem) => setItem.nbrRep).join(', ');
    let weightStr = this.setList.map((setItem) => setItem.weight).join(', ');
    weightStr = weightStr == 0 ? '' : `\n\tWeight : ${weightStr} kg`;

    return `\tReps : ${repStr} ${weightStr} `;
  }

  static defaultSetList() {
    const setExecs = [];
    for (let i = 0; i < 3; i += 1) {
      setExecs.push(SetModel.getRandom());
    }
    return setExecs;
  }

  static getRandom(muscleName) {
    if (!muscleName || !EXERCISES_PER_MUSCLE_ALL[muscleName]) {
      // If muscle is not provided or is not a valid property of EXERCISES_PER_MUSCLE, select a random exercise from any muscle group
      muscleName = randomElement(Object.keys(EXERCISES_PER_MUSCLE)); // Select a random muscle group from the array
    }
    const exerciseName = randomElement(EXERCISES_PER_MUSCLE_ALL[muscleName]);
    return new ExerciseModel(randomId(), exerciseName, [SetModel.getRandom()]);
  }

  static getNRandom(muscleName = 'chest', nbr = 3) {
    const exerciseList = [];
    for (let i = 0; i < nbr; i++) {
      exerciseList.push(ExerciseModel.getRandom(muscleName));
    }
    return exerciseList;
  }
}
