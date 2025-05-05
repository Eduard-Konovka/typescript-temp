let total: number = 5;
let userName: string = 'John';
let isActive: boolean = true;
let numbers: number[] = [1, 2, 3, 4, 5, 6]; 

type User = {
  name: string;
  age: number;
  isActive: boolean;
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  greet: () => void;
};
    
const user: User = {
  name: 'John',
  age: 30,
  isActive: true,
  hobbies: ['reading', 'gaming'],
  address: {
    street: '123 Main St',
    city: 'New York',
    country: 'USA',
  },
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  }
};

type size = 'small' | 'medium' | 'large';
const shirtSize: size = 'medium'; // This is valid
// const invalidSize: size = 'extra-large'; // This will cause a TypeScript error

export { total, userName, isActive, numbers, User, user, size, shirtSize };
