/*
  ? Javascript Data types:
  * 2- Reference Types:
  - Ex: Objects, Functions, Arrays
  ! Copied by its reference.

  - Reference Types store their given value at a specific location in the memory.
  - The address of that memory location is what get stored inside that variable as a reference.
  - When we copy reference type variables, we actually copy that address (not data).
  - Manipulating data of an object doesn't change its reference in memory.
  - Objects that have the same reference are pointing to the same address in memory.
  - Objects that copied by its reference are equal.
  - Manipulating data inside a constant object are allowed because it doesn't change its reference in memory.
*/
//* Ex(1): Passing a value by reference
const point = { x: 10, y: 20 };

function changePoint(obj) {
  obj.x += 10;
}

changePoint(point);
console.log(point); //* { x: 20, y: 20 }

//* Ex(2): Copy reference types
// Both person1 and person2 reference the same (address) in memory.
const person1 = { name: 'Ayman' };
const person2 = person1;

// So, when we modify one, changes are immediately visible to the other.
person2['job'] = 'React Developer';

console.log(`person1: ${Object.values(person1)}`); //* person1: Ayman,React Developer
console.log(`person2: ${Object.values(person2)}`); //* person1: Ayman,React Developer

// Comparing reference types that has the same address in memory:
console.log(person1 === person2); //* true
console.log(person1 == person2); //* true

//? Customizing a copied object without affecting the original one's values:
//* (1) Declaring a new object with the same values will reference a different address location in memory:
const person3 = { name: 'Ayman', job: 'React Developer' };
console.log(person1 === person3); //* false
console.log(person1 == person3); //* false

//* (2) Using spread operator to copy the values of any object or array:
const person4 = { ...person1 }; //* will reference a different address location in memory

const myArray = ['name', 'age', 22];
const anotherArray = [...myArray];

//? Manipulating data inside a constant object:
anotherArray.push('job'); //* The value (Address) isn't changed

//* We can't redeclare a constant variable:
// anotherArray = ['HTML5', 'JavaScript']; //* TypeError
