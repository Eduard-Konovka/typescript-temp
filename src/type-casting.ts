// Type Casting ===================
// Type casting - це механізм, який дозволяє вам вказати TypeScript, що змінна має певний тип
// Type casting може бути реалізований за допомогою операторів as або <type>

let someValue: unknown = "this is a string";

let strLength1: number = (<string>someValue).length;
// or
let strLength2: number = (someValue as string).length;

// let strLength3: number = someValue.length; // Error: Object is of type 'unknown'.

const input = document.getElementById("enterName") as HTMLInputElement;

if (input) {
  (input as HTMLInputElement).placeholder = "Enter name...";
}
