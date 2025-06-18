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

// const merged4 = merge({ name: "Alisa" }, "TEXT"); // {0: 'T', 1: 'E', 2: 'X', 3: 'T', name: 'Alisa'}

function merge5<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// const merged5 = merge5({ name: "Alisa" }, "TEXT");

// merged5.name;

type Length = {
  length: number;
};

function getLength<T extends Length>(str: T) {
  return str.length;
}

getLength("text");
getLength([1, 2, 3]);
// getLength(100); // Error: Argument of type 'number' is not assignable to parameter of type 'ILength'

function arrayLogger<T extends Array<string>>(array: T): void {
  array.forEach((item) => console.log(item));
}

arrayLogger(["Hello", "World"]); // Ok
// arrayLogger([1, 2, 3]); // Error: Тип "number" не может быть назначен для типа "string"

// keyof ==================================

type Person4 = {
  name: string;
  age: number;
  location: string;
};

type PersonKeys = keyof Person4; // 'name' | 'age' | 'location'

function getPersonInfo(person4: Person4, key: PersonKeys) {
  return person4[key];
}

const john: Person4 = {
  name: "John",
  age: 25,
  location: "NY",
};

console.log(getPersonInfo(john, "age")); // 25
console.log(getPersonInfo(john, "name")); // 'John'
// console.log(getPersonInfo(john, "job")); // Error: Argument of type '"job"' is not assignable to parameter of type 'PersonKeys'

function extractValue<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

extractValue({ name: "John" }, "name");

// Generic Classes ===========================

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Hello");
textStorage.addItem("World");
// textStorage.addItem(1); // Error: Argument of type 'number' is not assignable to parameter of type 'string'
console.log(textStorage.getItems()); // ['Hello', 'World']

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
// numberStorage.addItem("TEXT"); // Error: Argument of type 'number' is not assignable to parameter of type 'number'
console.log(numberStorage.getItems()); // [1, 2]

class KeyValuePair<TKey, TValue> {
  constructor(private key: TKey, private value: TValue) {}

  getKey(): TKey {
    return this.key;
  }

  getValue(): TValue {
    return this.value;
  }
}

const pair1 = new KeyValuePair("name", "Alice");
console.log(pair1.getKey()); // 'name'
console.log(pair1.getValue()); // 'Alice'

const pair2 = new KeyValuePair(1, true);
console.log(pair2.getKey()); // 1
console.log(pair2.getValue()); // true

// Utility Types =================================

// Partial<T> ------------------------------------

type User2 = {
  id: number;
  name: string;
  email: string;
  registered: boolean;
};

function createUser(data: Partial<User2>): User2 {
  // Деякі значення за замовчуванням:
  const defaultUser: User2 = {
    id: Date.now(),
    name: "",
    email: "",
    registered: false,
  };

  // З'єднуємо дані користувача та значення за замовчуванням
  return { ...defaultUser, ...data };
}

const newUser = createUser({ name: "Alice", email: "alice@example.com" });

console.log("newUser:", newUser);

// Readonly<T> -----------------------------------

type User3 = {
  id: number;
  name: string;
  email: string;
};

let alice2: User3 = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

alice2.name = "Bob"; // OK

let aliceReadonly: Readonly<User3> = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

// aliceReadonly.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.

const arr2: Readonly<string[]> = ["One", "Two", "Three"];

// arr2.push("Four"); // Error: Property 'push' does not exist on type 'readonly string[]'.

// Pick<T, K> ---------------------------------

type User4 = {
  id: number;
  name: string;
  email: string;
};

type UserBasicInfo = Pick<User4, "id" | "name">;

let userBasicInfo: UserBasicInfo = {
  id: 1,
  name: "John Doe",
  // email: "john@example.com", // Error: Property 'email' does not exist on type 'UserBasicInfo'
};

//

type BaseEmployee = {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  department: string;
  startDate: Date;
  // ...і багато інших полів
};

type BaseProject = {
  id: number;
  name: string;
  budget: number;
  deadline: Date;
  // ...і багато інших полів
};

type Assignment = {
  employee: Pick<BaseEmployee, "id" | "firstName" | "lastName">;
  projects: Pick<BaseProject, "id" | "name" | "deadline">[];
  shouldNotifyEmployee?: boolean;
};

let assignment: Assignment = {
  employee: {
    id: 1,
    firstName: "Alice",
    lastName: "Smith",
  },
  projects: [
    {
      id: 101,
      name: "Project A",
      deadline: new Date("2023-12-31"),
    },
    {
      id: 102,
      name: "Project B",
      deadline: new Date("2024-01-15"),
    },
  ],
  shouldNotifyEmployee: true,
};

console.log("Assignment:", assignment);

// Record<K, T> ---------------------------------

type Weekdays = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
type Weekend = "Sat" | "Sun";

type Day = Weekdays | Weekend;

type DayTranslations = Record<Day, string>;

const translations: DayTranslations = {
  Mon: "Понеділок",
  Tue: "Вівторок",
  Wed: "Середа",
  Thu: "Четверг",
  Fri: "П'ятниця",
  Sat: "Субота",
  Sun: "Неділя",
};

console.log("Translations:", translations);

//

enum UserRoles {
  admin = "admin",
  manager = "manager",
  employee = "employee",
}

type UserRolesStatuses = Record<UserRoles, boolean>;

const userRoleStatuses: UserRolesStatuses = {
  [UserRoles.admin]: true,
  [UserRoles.manager]: false,
  [UserRoles.employee]: true,
};

//

type InitialFormType = {
  name: string;
  email: string;
  password: string;
};

export type Form = InitialFormType & {
  errors: Partial<Record<keyof InitialFormType, [string]>>;
};

// Omit<T, K> ---------------------------------
