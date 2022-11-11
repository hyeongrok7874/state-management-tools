import { observable, action, makeObservable } from "mobx";

export default class CountStore {
  count = 0;

  constructor() {
    makeObservable(this, {
      count: observable,
      increase: action,
      decrease: action,
    });
  }

  increase = () => this.count++;

  decrease = () => this.count--;
}
