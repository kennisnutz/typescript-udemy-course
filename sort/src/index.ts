import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollections';
import { CharacterCollection } from './CharacterCollection';
import { LinkedListCollection } from './LinkedListCollection';

// const linkedList = new LinkedListCollection();
// linkedList.add(200);
// linkedList.add(190);
// linkedList.add(-20);
// linkedList.add(30);
// linkedList.add(40);
// linkedList.add(3300);
// linkedList.print();
// linkedList.sort();
// linkedList.print();

// const charCollection = new CharacterCollection('wjbKIAmwbsdsie');
// console.log(charCollection.data);
// charCollection.sort();
// console.log(charCollection.data);

const numsCol = new NumbersCollection([28, 29, -32, 4, 74, 67]);
console.log(numsCol.data);
numsCol.sort();
console.log(numsCol.data);