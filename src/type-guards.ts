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

useVehicle(carInstance);
useVehicle(truckInstance);
