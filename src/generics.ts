let arr: Array<string | number> = [];

arr = ["str", 10];

const promise: Promise<string> = new Promise((resolve) => {
  setInterval(() => {
    resolve("Done!");
  }, 1000);
});

promise.then((data): void => {
  console.log(data);
});

// Generic function/method ==========================

function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);
let output3 = identity<boolean>(true);
let output4 = identity<string[]>(["a", "b", "c"]);
let output5 = identity<{ name: string }>({ name: "John" });
let output6 = identity<null>(null);
let output7 = identity<undefined>(undefined);
let output8 = identity<{}>({});
let output9 = identity<never>(undefined as never); // Using 'never' type

output1 = identity("myString");
output2 = identity(100);

console.log(
  output1,
  output2,
  output3,
  output4,
  output5,
  output6,
  output7,
  output8,
  output9
);

function firstElement<T>(arr: T[]): T {
  return arr[0];
}

let numbers2 = [1, 2, 3, 4, 5];
let firstNum = firstElement(numbers2);

let strings2 = ["a", "b", "c", "d"];
let firstStr = firstElement(strings2);

console.log(firstNum, firstStr);

function merge(objA: object, objB: object) {
  return Object.assign(objA, objB);
}

// const merged = merge({ name: "Alisa" }, { age: 28 });
const merged = merge({ name: "Alisa" }, { age: 28 }) as {
  name: string;
  age: number;
};

merged.name;

function merge2<T extends object, U extends object>(objA2: T, objB2: U) {
  return Object.assign(objA2, objB2);
}

const merged2 = merge2({ name: "Alisa" }, { age: 28 });

merged2.name;

// const merged3: {
//   name: string;
// } & {
//   age: number;
// };

type Person3 = {
  name: string;
};

type AdditionFields = {
  age: number;
};

function merge3<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const merged3 = merge3<Person3, AdditionFields>({ name: "Alisa" }, { age: 28 });

merged3.name;

// Extends =================================
