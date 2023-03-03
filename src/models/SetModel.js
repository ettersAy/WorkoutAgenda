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

  update(nbrRep = null, weight = null, done = null) {
    if (nbrRep) {
      this.nbrRep = nbrRep? nbrRep : 1;
    }
    if (weight) {
      this.weight = weight? weight : 0;
    }
    if (done) {
      this.done = done? done : false;
    }
    return this;
  }
  log = () => console.log(this.id, this.nbrRep, this.weight, this.done);
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