const profile = {
  name: 'bob',
  age: 22,
  coordinates: {
    long: 12,
    lat: 44,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
const { coordinates }: { coordinates: { long: number; lat: number } } = profile;
