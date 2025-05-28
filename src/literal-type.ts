// Literal Type ====================
// Літеральні типи дозволяють вам визначити тип, який може приймати лише певні значення
// Це може бути корисно, коли ви хочете обмежити можливі значення змінної до певного набору
// Літеральні типи можуть бути використані для створення більш точних типів даних
// Наприклад, ви можете визначити тип, який може бути лише певними рядками або числами

type Direction = "left" | "right" | "up" | "down";
type Color = "red" | "green" | "blue";
type Shape = "circle" | "square" | "triangle";
type Vehicle = "car" | "bike" | "bus";
type Fruit = "apple" | "banana" | "orange";

type OneOrTwo = 1 | 2;
let value: OneOrTwo;
value = 1; // OK
value = 2; // OK
// value = 3; // Error: Type '3' is not assignable to type 'OneOrTwo'.

type YesOrNo = "yes" | "no";
let answer: YesOrNo;
answer = "yes"; // OK
answer = "no"; // OK
// answer = 'maybe'; // Error: Type '"maybe"' is not assignable to type 'YesOrNo'.

type ButtonSize = "small" | "medium" | "large";

function getButtonStyle(size: ButtonSize) {
  switch (size) {
    case "small":
      return { fontSize: "10px", padding: "5px" };
    case "medium":
      return { fontSize: "14px", padding: "10px" };
    case "large":
      return { fontSize: "18px", padding: "15px" };
    default:
      return { fontSize: "14px", padding: "10px" };
  }
}

let myButtonStyle = getButtonStyle("medium"); // OK
// myButtonStyle = getButtonStyle('extra-large'); // Error: Argument of type '"extra-large"' is not assignable to parameter of type 'ButtonSize'.

console.log("myButtonStyle", myButtonStyle);
