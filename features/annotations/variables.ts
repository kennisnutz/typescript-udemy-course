let apples = 5;
//Examples of annotations
let oranges: number = 20;
let speed: string = 'fast';
let hasName: boolean = true;

let colors: string[] = ['red', 'green', 'blue'];
let truths: boolean[] = [true, false, true];

//Classess

class Car {}

let car: Car = new Car();

//Object literals
let point: { x: number; y: number } = {
  x: 40,
  y: 65,
};

//Functions

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//Using annotations examples
//Case 1: function returns any type
const json = '{ "x": 20, y": 220 }';
const cordinates: { x: number; y: number } = JSON.parse(json);
console.log(cordinates);

const add = (x: number, y: number): number => {
  return y + x;
};

//Case 2: variable declared and initialized a different line
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

//Case 3: Creating variables to have special types
let numbers = [10, 50, -1];
let numbersAboveZero: boolean | number = false;
for (let i = 0; i < words.length; i++) {
  if (numbers[i] > 0) {
    numbersAboveZero = numbers[i];
  }
}
