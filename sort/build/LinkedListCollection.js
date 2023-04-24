"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListCollection = void 0;
const Sorter_1 = require("./Sorter");
class Node {
    constructor(data) {
        this.data = data;
    }
}
class LinkedListCollection extends Sorter_1.Sorter {
    add(data) {
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
    get length() {
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
    at(index) {
        if (!this.head) {
            throw new Error('Index out of bounds');
        }
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('Index out of bounds');
    }
    compare(lefthand, righthand) {
        if (!this.head) {
            throw new Error('No nodes to compare');
        }
        return this.at(lefthand).data > this.at(righthand).data;
    }
    swap(lefthand, righthand) {
        const leftNode = this.at(lefthand);
        const rigthNode = this.at(righthand);
        const leftNodeValue = leftNode.data;
        leftNode.data = rigthNode.data;
        rigthNode.data = leftNodeValue;
    }
    print() {
        if (!this.head) {
            return;
        }
        let node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
}
exports.LinkedListCollection = LinkedListCollection;
