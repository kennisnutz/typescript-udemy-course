// const oldCivic = {
//   name: 'civic',
//   year: 2000,
//   broken: true,
// };

// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Year: ${vehicle.year}`);
//   console.log(`Broken: ${vehicle.broken}`);
// };

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

const prontVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.name);
};

interface Student {
  name: string;
  dob: Date;
  grade: number;
  summary(): void;
}

const newStudent: Student = {
  name: 'alex',
  dob: new Date(),
  grade: 4.5,
  summary(): void {
    console.log(`Hello ${this.name}`);
  },
};

//reusable interface
interface Reportable {
  summary(): string;
}
const classMate = {
  name: 'alex',
  dob: new Date(),
  grade: 4.5,
  summary(): string {
    return `Hello ${this.name}`;
  },
};

const oldCar = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Old civic from  ${this.year} is ${
      this.broken ? 'broken' : 'not broken'
    }`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(classMate);
printSummary(oldCar);
