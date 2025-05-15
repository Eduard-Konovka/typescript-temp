let decimal: number = 6;     // десяткові
let float: number = 3.14;    // число з плаваючою крапкою
let hex: number = 0xf00d;    // шістнадцяткове
let binary: number = 0b1010; // двійкове
let octal: number = 0o744;   // вісімкове

function foo (num: number, str: string, bool: boolean, empty: null) {
  // Some logic
}

let mixed: (number | string)[] = [1, 'two'];
let matrix: number[][] = [[1, 2], [3, 4]];

let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;
notSure = {};

let num: number;

num = notSure;
// console.log('num', num)

let date: [number, number, number];
date = [7, 11, 2023]; // OK

let fixed: [string, number];

fixed = ['Text', 10];

fixed.push('Add this text');

// console.log(fixed)

let tuple: [string, ...number[]];

tuple = ['hello', 42, 100, 200]; // OK

enum Role {
  ADMIN,
  USER,
}

const person = {
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log('Role: ', Role.ADMIN); // Role: 0
}

enum HttpCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
}

function respond(status: HttpCodes) {
  console.log('Status:', status)
}

respond(HttpCodes.OK); // Status: 200