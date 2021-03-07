/*
  ? Javascript Data types:
  * 1- Primitives (Value Types):
  - Ex: Number, Strings, Boolean, Symbol, Undefined, Null.
  ! Copied by its value.

  let x = 5;
  let y = x;
  x = 10;

  // x & y are independent: X: 10, Y: 5
  console.log(`X: ${x}, Y: ${y}`);

  // Copying a primitive value to a function's parameter:
  - its value is copied into the number parameter that is local in this function.

  let number = 5;
  function increase(number) {
    number++;
  }

  // Calling the function has no effect:
  increase(number);
  increase(number);

  // The number variable & number++ ==> are totally independent!
  console.log(`number: ${number}`); //// number: 5
*/

let x = 5;
let y = x;
x = 10;

// x & y are independent: X: 10, Y: 5
console.log(`X: ${x}, Y: ${y}`);

// Copying a primitive value to a function's parameter:
// Its value is copied into the number parameter that is local in this function.
let number = 5;
function increase(number) {
  number++;
}

// Calling the function has no effect:
increase(number);
increase(number);

// The number variable & number++ ==> are totally independent!
console.log(`number: ${number}`);
