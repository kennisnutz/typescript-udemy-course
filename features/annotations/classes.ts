//class definition
class Vehicle {
  private drive(): void {
    console.log('Vrooom!!');
  }

  protected honk(): void {
    console.log('Beep Beep!!');
  }

  moveCar(): void {
    this.drive();
    this.honk();
  }
}
//class Initialization

const mercedies = new Vehicle();
mercedies.moveCar();

//Class inheritans

class Car extends Vehicle {
  protected honk(): void {
    console.log('PEEE PEEE PEEE');
  }
}

const volvo = new Car();

volvo.moveCar();

//Constructors
class Citizen1 {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  protected greet(): void {
    console.log(`${this.name} says hello I'm citizen 1!!`);
  }

  sayHello(): void {
    this.greet();
  }
}

class Citizen2 {
  constructor(public name: string, public age: number) {}
  protected greet(): void {
    console.log(`${this.name} says hello I'm citizen 2!!`);
  }
  sayHello(): void {
    this.greet();
  }
}
//Both are correct

const newCitizen1 = new Citizen1('alex', 34);
const newCitizen2 = new Citizen2('bob', 23);

newCitizen1.sayHello();
newCitizen2.sayHello();

//the constructor can be overwritten in a child class like so
class IgboPerson extends Citizen2 {
  constructor(public voted: boolean, name: string, age: number) {
    super(name, age);
  }

  greet(): void {
    console.log(
      `hi my name is ${this.name} and I ${
        this.voted ? 'voted' : 'did not vote'
      } during the last election`
    );
  }
}

const igboGuy = new IgboPerson(true, 'chi', 33);
const igboGirl = new IgboPerson(false, 'chi', 33);
igboGuy.sayHello();
igboGirl.sayHello();
