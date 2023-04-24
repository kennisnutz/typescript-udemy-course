import { Sortable, Sorter } from './Sorter';

export class CharacterCollection extends Sorter implements Sortable {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(lefthand: number, righthand: number): boolean {
    return (
      this.data[lefthand].toLowerCase() > this.data[righthand].toLowerCase()
    );
  }

  swap(lefthand: number, righthand: number): void {
    const characters = this.data.split('');
    const lefthandValue = characters[lefthand];
    characters[lefthand] = characters[righthand];
    characters[righthand] = lefthandValue;

    this.data = characters.join('');
  }
}
