const drink: { color: string; carbonated: boolean; sugar: number } = {
  color: 'red',
  carbonated: true,
  sugar: 13,
};

const pepsi: [string, boolean, number] = ['brown', true, 24];

type Drink = [string, boolean, number];

const sprite: Drink = ['green', true, 14];
const tea: Drink = ['brown', false, 2];

const carSpecs: [number, number] = [400, 3352];
