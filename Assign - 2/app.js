var x = 1;
console.log(x);
function a() {
  x = 10;
  console.log(x);
}

a();

// Answer
// 1
// 10

// -----------------------------------

let x = 10;
console.log(x);
function a() {
  x = 100;
  console.log(x);
}
a();
x = 1000;

// Answer
// 10
// 100

// -----------------------------------

const x = 100;
console.log(x);
function a() {
  x = 10;
  console.log(x);
}
a();

// Answer
// 100
// Error (const keyword)

// -----------------------------------

function a() {
  console.log(x);
}
a();
var x = 2;

// Answer
// undefined

// -----------------------------------

let x;
function b() {
  console.log(x);
}
b();
x = 2;

// Answer
// undefined

// -----------------------------------

function a() {
  console.log(x);
}
a();
let x = 2;

// Answer
// Error

// -----------------------------------

var a = 1;
let b = 2;
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}

console.log(b);

// Answer
// 10
// 20
// 30
// 2

// ----------------------------------

function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  return y;
}
var z = x();
console.log(z);
z();

// Answer

// y() {
//     console.log(a);
// }
// 7

// ----------------------------------

function x() {
  for (var i = 0; i < 6; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000 * i);
  }
}
x();

// Answer
// 6
// 6
// 6
// 6
// 6
// 6

// ----------------------------------

function x() {
  for (var i = 0; i < 6; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, 1000 * i);
    }
    close(i);
    console.log("interview");
  }
}
x();

// Answer
// interview
// interview
// interview
// interview
// interview
// interview
// 0
// 1
// 2
// 3
// 4
// 5

// -----------------------------------

const person = {
  name: "nagarro",
  age: 100,
  isAutherised: false,
  isUnicorn: true,
  bestDomain: "analytics",
};

// question1: make copy of the object and manipulate values in the new copied object
// question2: print all the properties using appropriate for loop

// Answer 1 ->
// Object.assign(var , person);
// var.name = 'harsh';
//
// Answer 2 ->
// for (i in person) {
//     console.log(`${i} is -> ${person[i]}`);
// }

// ------------------------------------

// theory questions you should also prepare
// 1. what is GEC (global execution context)? -- mcp and cep
// it is the context where all the code and its context gets executes.
// MCP is memory creation phase where memory is assigned to the program.
// CEP is code execution phase where the code is executed in the sequential order.

// 2. single threaded meaning?
// Javascript have a single call stack and the code is run in sequential order.

// 3. what is hoisting?
// Javascript already declares the function and variable before the execution of the program.

// 4. call back queue
// It is the queue where the code's function etc are placed and are FIFO.

// 5. let and const hoisted hote hai?? and kahan hote hai? (dead temporal zone mei hote hai) -->  read about dead temporal zone
// let and const get hoisted but they have some default value. Since it is inside dead temporal zone so
// the value is inaccessible until the the value is not initialized.

// 6. block scope and global scope
// In Block scope if the variable is declared only the block elements can access it not outside of the block
// The global scope is the scope for the entire code for the javascipt. It can be accessed from anywhere
// from the code.

// 7. closure?
// with the help of closure we can access the variable etc of the parent without calling and using the
// the parent block.

// 8. event loop

// 9. asynchronous
// We can execute the function not in the synchronous order that means we can call a function and while it
// execute we can go toward the next line of the code.

// 10. for each loop
// array.forEach(() => {})
