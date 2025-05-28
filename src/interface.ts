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

console.log(dog3);

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

animal.eat();
animal.walk();

interface AddFunc {
  (n1: number, n2: number): number;
}

let add2: AddFunc;

add2 = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(add2(5, 10)); // Виводить: 15
