import { Sortable } from './Sorter';
import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter implements Sortable {
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftHand: number, rightHand: number): boolean {
    return this.data[leftHand] > this.data[rightHand];
  }

  swap(leftHand: number, rightHand: number): void {
    const leftHandValue = this.data[leftHand];
    this.data[leftHand] = this.data[rightHand];
    this.data[rightHand] = leftHandValue;
  }
}
