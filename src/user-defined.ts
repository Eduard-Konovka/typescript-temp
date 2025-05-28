// User-Defined ====================
// Ви можете створити свої власні механізми перевірки типів, які можуть бути використані для перевірки типів змінних
// Це може бути корисно, коли ви хочете створити функцію, яка може працювати з різними типами даних
// або коли ви хочете створити функцію, яка може працювати з різними типами даних
// User-defined type guards - це механізми, які дозволяють TypeScript визначити тип змінної в певному контексті
// Це може бути корисно, коли ви хочете перевірити тип змінної перед її використанням

type Dog4 = {
  bark: () => void;
};

type Cat4 = {
  meow: () => void;
};

function isDog4(animal: Dog4 | Cat4): animal is Dog4 {
  return "bark" in animal;
}

function letAnimalTalk(animal: Dog4 | Cat4) {
  if (isDog4(animal)) {
    animal.bark();
  } else {
    animal.meow();
  }
}

//

type Admin3 = {
  name: string;
  privileges: string[];
};

type Employee3 = {
  name: string;
  startDate: Date;
};

type Staff3 = Admin3 | Employee3;

function isEmployee(staff: Staff3): staff is Employee3 {
  return (staff as Employee3).startDate !== undefined;
}

const staffMember: Staff3 = { name: "Bob", startDate: new Date() };

if (isEmployee(staffMember)) {
  console.log(
    `Welcome on board, ${staffMember.name}! Your start date is ${staffMember.startDate}`
  );
}
