// file RepModel.js
import { randomId } from '../Lib';

export default class SetModel {
  constructor(id, nbr = 10, weight = 10, done = false) {
    this.id = id ? id : randomId();
    this.nbrRep = nbr;
    this.weight = weight;
    this.done = done;
  }

  static getRandom() {
    return new SetModel(randomId());
  }

  getSummary() {
    return `${this.nbrRep} reps - ${this.weight} kg`;
  }
  
  static createInstance(object) {
    return new SetModel(object.id, object.nbr, object.weight, object.done);
  }
}
/*
SetModel {
  constructor(date, nbr = 10, weight = 10, done = false) {
    this.date = date;
    this.nbrRep = nbr;
    this.weight = weight;
    this.done = done;
  }
  }
 */