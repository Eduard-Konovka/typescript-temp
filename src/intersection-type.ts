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

console.log("firstname:", ceo.name); // Alice
