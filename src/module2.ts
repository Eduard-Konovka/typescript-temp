let decimal: number = 6; // десяткові
let float: number = 3.14; // число з плаваючою крапкою
let hex: number = 0xf00d; // шістнадцяткове
let binary: number = 0b1010; // двійкове
let octal: number = 0o744; // вісімкове

function foo(num: number, str: string, bool: boolean, empty: null) {
  // Some logic
}

let mixed: (number | string)[] = [1, "two"];
let matrix: number[][] = [
  [1, 2],
  [3, 4],
];

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
notSure = {};

let num: number;

num = notSure;
// console.log('num', num)

let date: [number, number, number];
date = [7, 11, 2023]; // OK

let fixed: [string, number];

fixed = ["Text", 10];

fixed.push("Add this text");

// console.log(fixed)

let tuple: [string, ...number[]];

tuple = ["hello", 42, 100, 200]; // OK

// Union Type =========================
// TypeScript підтримує об'єднання типів (union types), які дозволяють змінній приймати значення кількох типів
// Це може бути корисно, коли ви хочете, щоб змінна могла приймати різні типи даних
// або коли ви хочете створити тип, який може бути одним з кількох інших типів

// enum Constants {
//   A = 5,
//   B = 'B',
//   C = '10',
//   D = null,
//   E = undefined,
//   F = true,
//   G = false,
//   H = {},
//   I = [],
//   J = () => { },
//   K = Symbol('K'),
//   L = BigInt(12345678901234567890),
//   M = new Date(),
//   N = new RegExp('N'),
//   O = new Map(),
//   P = new Set(),
//   Q = new WeakMap(),
// }

enum Role {
  ADMIN,
  USER,
}

const person = {
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  // console.log('Role: ', Role.ADMIN); // Role: 0
}

enum HttpCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
}

function respond(status: HttpCodes) {
  console.log("Status:", status);
}

// respond(HttpCodes.OK); // Status: 200

let mixedType: string | number | boolean;

mixedType = "string"; // OK
mixedType = 10; // OK
mixedType = true; // OK
// mixedType = {}; // Error: Type '{}' is not assignable to type 'string | number | boolean'.

// ====================================

function combine(param1: number | string, param2: number | string) {
  // return param1 + param2; // Error: Operator '+' cannot be applied to types 'string | number' and 'string | number'.

  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

// ====================================

type Dog = {
  legs: 4;
  bark: () => void;
};

type Fish = {
  fins: 2;
  swim: () => void;
};

let pet: Dog | Fish = {
  fins: 2,
  swim() {
    // console.log('Swim');
  },
};

// type guard function
function isDog(pet: Dog | Fish): pet is Dog {
  return "bark" in pet;
}

// Перевіряємо, чи є наш вихованець собакою перед тим, як використовувати метод bark
if (isDog(pet)) {
  pet.bark(); // OK, тепер TypeScript знає, що pet - це Dog
} else {
  pet.swim(); // TypeScript знає, що якщо pet не Dog, то це має бути Fish
}

// Intersection Type ==================

type Employee = {
  name: string;
  id: number;
};

type Manager = {
  employees: Employee[];
};

type CEO = Employee & Manager;

const ceo: CEO = {
  name: "Alice",
  id: 1,
  employees: [
    {
      name: "Bob",
      id: 2,
    },
  ],
};

// Literal Type ====================
// Літеральні типи дозволяють вам визначити тип, який може приймати лише певні значення
// Це може бути корисно, коли ви хочете обмежити можливі значення змінної до певного набору
// Літеральні типи можуть бути використані для створення більш точних типів даних
// Наприклад, ви можете визначити тип, який може бути лише певними рядками або числами

type Direction = "left" | "right" | "up" | "down";
type Color = "red" | "green" | "blue";
type Shape = "circle" | "square" | "triangle";
type Vehicle = "car" | "bike" | "bus";
type Fruit = "apple" | "banana" | "orange";

type OneOrTwo = 1 | 2;
let value: OneOrTwo;
value = 1; // OK
value = 2; // OK
// value = 3; // Error: Type '3' is not assignable to type 'OneOrTwo'.

type YesOrNo = "yes" | "no";
let answer: YesOrNo;
answer = "yes"; // OK
answer = "no"; // OK
// answer = 'maybe'; // Error: Type '"maybe"' is not assignable to type 'YesOrNo'.

type ButtonSize = "small" | "medium" | "large";

function getButtonStyle(size: ButtonSize) {
  switch (size) {
    case "small":
      return { fontSize: "10px", padding: "5px" };
    case "medium":
      return { fontSize: "14px", padding: "10px" };
    case "large":
      return { fontSize: "18px", padding: "15px" };
    default:
      return { fontSize: "14px", padding: "10px" };
  }
}

let myButtonStyle = getButtonStyle("medium"); // OK
// myButtonStyle = getButtonStyle('extra-large'); // Error: Argument of type '"extra-large"' is not assignable to parameter of type 'ButtonSize'.

// Return Type ========================
// TypeScript може автоматично виводити тип повернення функції на основі її реалізації
// Це може бути корисно, коли ви хочете, щоб TypeScript автоматично визначав тип повернення функції
// або коли ви хочете, щоб TypeScript перевіряв тип повернення функції

function greet(): string {
  // return 100; // Error: Type 'number' is not assignable to type 'string'.
  return "Hello, world!";
}

let greeting = greet();

type UserTemplate = {
  id: number;
  name: string;
};

const getUserNames = (users: UserTemplate[]): string[] => {
  return users.map((user) => user.name);
};

const users: UserTemplate[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

let result = getUserNames(users);
// console.log(result); // ['Alice', 'Bob', 'Charlie']

function greet2() {
  return "Hello, world!";
}

let result2: string = greet();

// Void =============================
// Тип void представляє відсутність значення
// Це може бути корисно, коли ви хочете вказати, що функція не повертає значення
// або коли ви хочете вказати, що функція не має значення

function logMessage(message: string): void {
  console.log(message);
}

// logMessage('Hello, world!');

function doSomething(callback: () => void) {
  callback();
}

// doSomething(() => console.log('Callback function!'));

// Never ===========================
// Тип never представляє значення, яке ніколи не відбувається
// Це може бути корисно, коли ви хочете вказати, що функція ніколи не повертає значення
// або коли ви хочете вказати, що функція завжди викликає помилку

function throwError(message: string): never {
  throw new Error(message);
}

// throwError('Something went wrong!');

function infiniteLoop(): never {
  while (true) {
    // Do something
  }
}
// infiniteLoop(); // This function will never return

// Function Type ========================

// Визначення типу функції, який приймає два числа та повертає число
type CallbackType = (num1: number, num2: number) => number;
// type CallbackType = (...nums: number[]) => number; // функція, яка приймає будь-яку кількість аргументів.

// Функція, яка приймає два числа та функцію зворотного виклику, застосовує цю функцію до чисел та виводить результат
function calc(param1: number, param2: number, callback: CallbackType): void {
  console.log("Result:", callback(param1, param2));
}

// Приклади використання calc з різними функціями зворотного виклику
// calc(1, 1, (num1, num2) => num1 + num2);
// calc(10, 5, (num1, num2) => num1 - num2);

let a: number = 10;
let b: number = 20;

function handleEvent(event: string, handler: (...params: any[]) => void): void {
  console.log(`Handling event: ${event}`);

  return handler(a, b);
}

// handleEvent("click", () => {
//   console.log("Clicked!");
// });

// handleEvent("mouseover", (x: number, y: number) => {
//   console.log(`Mouse at ${x}, ${y}`);
// });

// Custom Types ===================

enum AnimalIds {
  cat = "cat",
  dog = "dog",
  fish = "fish",
}

type Animal = {
  [AnimalIds.cat]: {
    name: string;
    age: number;
    breed: string;
    color: string;
    weight: number;
    isFriendly: boolean;
    meow: () => string;
  };

  [AnimalIds.dog]: {
    name: string;
    age: number;
    breed: string;
    color: string;
    weight: number;
    isFriendly: boolean;
    bark: () => string;
  };

  [AnimalIds.fish]: {
    name: string;
    age: number;
    breed: string;
    color: string;
    weight: number;
    isFriendly: boolean;
    fins?: number;
    swim: () => undefined;
  };
};

// Створення об'єктів типу Animal
let cat: Animal[AnimalIds.cat] = {
  name: "Tom",
  age: 3,
  breed: "Siamese",
  color: "white",
  weight: 4,
  isFriendly: true,
  meow: () => "Meow! I am a cat",
};

let dog: Animal[AnimalIds.dog] = {
  name: "Buddy",
  age: 5,
  breed: "Labrador",
  color: "brown",
  weight: 30,
  isFriendly: true,
  bark: () => "Woof! I am a dog",
};

let fish: Animal[AnimalIds.fish] = {
  name: "Nemo",
  age: 1,
  breed: "Clownfish",
  color: "orange",
  weight: 0.1,
  isFriendly: true,
  swim: () => undefined,
};

// console.log(cat);
// console.log(dog);
// console.log(fish);
// console.log(cat.meow());
// console.log(dog.bark());
// console.log(fish.swim());
// console.log(fish.fins); // Error: Property 'fins' does not exist on type 'Animal[AnimalIds.fish]'.

// Опціональні параметри та властивості ==================

function newGreet(name?: string) {
  if (name) {
    return `Hello, ${name}!`;
  } else {
    return `Hello!`;
  }
}

// console.log(newGreet("Alice")); // Виводить: Hello, Alice!
// console.log(newGreet()); // Виводить: Hello!

type Person = {
  name: string;
  age?: number; // age є опціональною властивістю
};

const alice: Person = { name: "Alice", age: 27 };
const bob: Person = { name: "Bob" }; // age не вказано, це припустимо

// Interface ===================
// Інтерфейси в TypeScript дозволяють визначати структуру об'єктів
// Вони можуть бути використані для опису об'єктів, функцій, масивів та інших типів даних
// Інтерфейси можуть бути розширені, що дозволяє створювати нові інтерфейси на основі існуючих
// Це може бути корисно, коли ви хочете створити новий інтерфейс, який має всі властивості існуючого інтерфейсу
// або коли ви хочете створити новий інтерфейс, який має деякі з властивостей існуючого інтерфейсу

interface Aaa {
  name: string;
}

type Bbb = {
  name: string;
};

interface Animal2 {
  name: string;
}

interface Animal2 {
  age: number;
}

let dog2: Animal2 = {
  name: "Fido",
  age: 5,
};

interface Dog2 extends Animal2 {
  bark: string;
}

let dog3: Dog2 = {
  name: "Rex",
  age: 3,
  bark: "Woof!",
};

dog3.bark = "Woof!";

// console.log(dog3);

interface Animal3 {
  name: string;
}

interface Dog3 extends Animal3 {
  bark: string;
}

class MyDog3 implements Dog3 {
  name = "Fido";
  bark = "Woof!";
}

// Error: Property 'name' is missing in type 'OtherDog'
class OtherDog3 implements Dog3 {
  name = "Rex";
  bark = "Woof!";
}

//

interface Walkable {
  walk(): void;
}

interface Eatable {
  eat(): void;
}

class Animal4 implements Walkable, Eatable {
  walk() {
    console.log("The animal walks...");
  }

  eat() {
    console.log("The animal eats...");
  }
}

const animal = new Animal4();

// animal.eat();
// animal.walk();

interface AddFunc {
  (n1: number, n2: number): number;
}

let add2: AddFunc;

add2 = (n1: number, n2: number) => {
  return n1 + n2;
};

// console.log(add2(5, 10)); // Виводить: 15

// Type Guards ==================
// Type guards - це механізми, які дозволяють TypeScript визначити тип змінної в певному контексті
// Це може бути корисно, коли ви хочете перевірити тип змінної перед її використанням
// або коли ви хочете створити функцію, яка може працювати з різними типами даних
// Type guards можуть бути реалізовані за допомогою операторів typeof, instanceof, in та інших

// typeof =======================

type ComplexType = string | number;

function combine2(a: ComplexType, b: ComplexType) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// in ===========================

type Admin = {
  name: string;
  privileges: string[];
};

type Employee2 = {
  name: string;
  startDate: Date;
};

type AdminOrEmployee = Admin | Employee2;

function printDetails(obj: AdminOrEmployee) {
  console.log(`Name: ${obj.name}`);

  if ("privileges" in obj) {
    console.log(`Privileges: ${obj.privileges.join(", ")}`);
  }

  if ("startDate" in obj) {
    console.log(`Start Date: ${obj.startDate}`);
  }
}

// instanceof ====================

class Car {
  drive() {
    console.log("Driving a car...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo: ${amount}`);
  }
}

// Define your type

type Vehicle2 = Car | Truck;

// Create your instances

const carInstance = new Car();
const truckInstance = new Truck();

// Function to use vehicle

function useVehicle(vehicle: Vehicle2) {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

// useVehicle(carInstance);
// useVehicle(truckInstance);

// User-Defined ====================
// Ви можете створити свої власні механізми перевірки типів, які можуть бути використані для перевірки типів змінних
// Це може бути корисно, коли ви хочете створити функцію, яка може працювати з різними типами даних
// або коли ви хочете створити функцію, яка може працювати з різними типами даних
// User-defined type guards - це механізми, які дозволяють TypeScript визначити тип змінної в певному контексті
// Це може бути корисно, коли ви хочете перевірити тип змінної перед її використанням

type Dog4 = {
  bark: () => void;
};

type Cat4 = {
  meow: () => void;
};

function isDog4(animal: Dog4 | Cat4): animal is Dog4 {
  return "bark" in animal;
}

function letAnimalTalk(animal: Dog4 | Cat4) {
  if (isDog4(animal)) {
    animal.bark();
  } else {
    animal.meow();
  }
}

//

type Admin3 = {
  name: string;
  privileges: string[];
};

type Employee3 = {
  name: string;
  startDate: Date;
};

type Staff3 = Admin3 | Employee3;

function isEmployee(staff: Staff3): staff is Employee3 {
  return (staff as Employee3).startDate !== undefined;
}

const staffMember: Staff3 = { name: "Bob", startDate: new Date() };

if (isEmployee(staffMember)) {
  // console.log(
  //   `Welcome on board, ${staffMember.name}! Your start date is ${staffMember.startDate}`
  // );
}

// Type Casting ===================
// Type casting - це механізм, який дозволяє вам вказати TypeScript, що змінна має певний тип
// Type casting може бути реалізований за допомогою операторів as або <type>

let someValue: unknown = "this is a string";

let strLength1: number = (<string>someValue).length;
// or
let strLength2: number = (someValue as string).length;

// let strLength3: number = someValue.length; // Error: Object is of type 'unknown'.

const input = document.getElementById("enterName") as HTMLInputElement;

if (input) {
  (input as HTMLInputElement).placeholder = "Enter name...";
}

// Index Properties ==================
// Індексаційні властивості дозволяють вам визначити тип об'єкта, який може бути доступний за допомогою індексації
// Це може бути корисно, коли ви хочете створити об'єкт, який може мати різні властивості
// або коли ви хочете створити об'єкт, який може мати різні типи даних
// Індексаційні властивості можуть бути реалізовані за допомогою операторів [key: string]: type або [key: number]: type
