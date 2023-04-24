import { Sortable, Sorter } from './Sorter';

class Node {
  next: Node | null;
  constructor(public data: number) {}
}

export class LinkedListCollection extends Sorter implements Sortable {
  head: Node | null;

  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }
    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }
    return length;
  }

  private at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }
    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error('Index out of bounds');
  }

  compare(lefthand: number, righthand: number): boolean {
    if (!this.head) {
      throw new Error('No nodes to compare');
    }
    return this.at(lefthand).data > this.at(righthand).data;
  }

  swap(lefthand: number, righthand: number): void {
    const leftNode = this.at(lefthand);
    const rigthNode = this.at(righthand);

    const leftNodeValue = leftNode.data;
    leftNode.data = rigthNode.data;
    rigthNode.data = leftNodeValue;
  }

  print(): void {
    if (!this.head) {
      return;
    }
    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
