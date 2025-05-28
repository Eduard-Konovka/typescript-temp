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
console.log(result); // ['Alice', 'Bob', 'Charlie']

function greet2() {
  return "Hello, world!";
}

let result2: string = greet();
