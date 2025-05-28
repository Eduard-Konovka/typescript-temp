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
  console.log("Role: ", Role.ADMIN); // Role: 0
}

enum HttpCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
}

function respond(status: HttpCodes) {
  console.log("Status:", status);
}

respond(HttpCodes.OK); // Status: 200

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
    console.log("Swim");
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
