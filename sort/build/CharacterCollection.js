"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharacterCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(lefthand, righthand) {
        return (this.data[lefthand].toLowerCase() > this.data[righthand].toLowerCase());
    }
    swap(lefthand, righthand) {
        const characters = this.data.split('');
        const lefthandValue = characters[lefthand];
        characters[lefthand] = characters[righthand];
        characters[righthand] = lefthandValue;
        this.data = characters.join('');
    }
}
exports.CharacterCollection = CharacterCollection;
