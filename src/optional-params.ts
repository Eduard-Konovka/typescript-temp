// Опціональні параметри та властивості ==================

function newGreet(name?: string) {
  if (name) {
    return `Hello, ${name}!`;
  } else {
    return `Hello!`;
  }
}

console.log(newGreet("Alice")); // Виводить: Hello, Alice!
console.log(newGreet()); // Виводить: Hello!

type Person = {
  name: string;
  age?: number; // age є опціональною властивістю
};

const alice: Person = { name: "Alice", age: 27 };
const bob: Person = { name: "Bob" }; // age не вказано, це припустимо
