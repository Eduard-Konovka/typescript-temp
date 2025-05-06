type User = {
  name: string;
  age: number;
  isActive: boolean;
  hobbies?: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  greet: (userName: string) => void;
};

type size = 'small' | 'medium' | 'large';

enum Sizes {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

let total: number = 5;
let userName: string = 'John';
let isActive: boolean = true;
let numbers: number[] = [1, 2, 3, 4, 5, 6]; 

const user: User = {
  name: 'John Doe',
  age: 30,
  isActive: true,
  hobbies: ['reading', 'gaming'],
  address: {
    street: '123 Main St',
    city: 'New York',
    country: 'USA',
  },
  greet: function (userName: string = 'User') {
    const hobby = this.hobbies ? this.hobbies[0] : 'no hobbies';

    console.log(`Hello, my name is ${this.name}, my nickname is ${userName}, and I am ${this.age} years old, my hobbi is ${hobby}.`);
  }
};

const admin: User = {
  name: 'Jane Doe',
  age: 25,
  isActive: false,
  address: {
    street: '456 Elm St',
    city: 'Los Angeles',
    country: 'USA',
  },
  greet: function (userName: string = 'User') {
    const hobby = this.hobbies ? this.hobbies[0] : 'no hobbies';

    console.log(`Hello, my name is ${this.name}, my nickname is ${userName}, and I am ${this.age} years old, my hobbi is ${hobby}.`);
  }
};

user.greet('Johnny');
admin.greet('Janey');

const shirtSize: size = 'medium'; // This is valid
// const invalidSize: size = 'extra-large'; // This will cause a TypeScript error
const shirtSizeEnum: Sizes = Sizes.MEDIUM; // This is valid
// const invalidSizeEnum: Sizes = 'extra-large'; // This will cause a TypeScript error

function add(num1: number, num2: number): string {
  return (num1 + num2).toString();    
}

console.log(add(5, 10)); // Output: "15"

function sum(num1: number, num2: number): void {
  console.log (num1 + num2);    
}

sum(2, 3); // Output: 5

function greetUser(user: User): void {
  console.log(`Hello, ${user.name}!`);
}
greetUser(user); // Output: Hello, John Doe
