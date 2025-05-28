// Function Type ========================

// Визначення типу функції, який приймає два числа та повертає число
type CallbackType = (num1: number, num2: number) => number;
// type CallbackType = (...nums: number[]) => number; // функція, яка приймає будь-яку кількість аргументів.

// Функція, яка приймає два числа та функцію зворотного виклику, застосовує цю функцію до чисел та виводить результат
function calc(param1: number, param2: number, callback: CallbackType): void {
  console.log("Result:", callback(param1, param2));
}

// Приклади використання calc з різними функціями зворотного виклику
calc(1, 1, (num1, num2) => num1 + num2);
calc(10, 5, (num1, num2) => num1 - num2);

let a: number = 10;
let b: number = 20;

function handleEvent(event: string, handler: (...params: any[]) => void): void {
  console.log(`Handling event: ${event}`);

  return handler(a, b);
}

handleEvent("click", () => {
  console.log("Clicked!");
});

handleEvent("mouseover", (x: number, y: number) => {
  console.log(`Mouse at ${x}, ${y}`);
});
