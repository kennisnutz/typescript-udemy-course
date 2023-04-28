class Boat {
  @testDecorator
  color: string = 'blue';

  @testDecorator
  get formattedColor(): string {
    return `This boat's color is ${this.color}`;
  }

  @logError('Oops boat sunk')
  pilot(): void {
    throw new Error();
    console.log('swish');
  }
}

function logError(errMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errMessage);
      }
    };
  };
}

function testDecorator(target: any, key: string): void {
  console.log(target);
  console.log(key);
}
new Boat().pilot();
