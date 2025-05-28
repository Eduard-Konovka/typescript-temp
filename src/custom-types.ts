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

console.log(cat);
console.log(dog);
console.log(fish);
console.log(cat.meow());
console.log(dog.bark());
console.log(fish.swim());
console.log(fish.fins); // Error: Property 'fins' does not exist on type 'Animal[AnimalIds.fish]'.
