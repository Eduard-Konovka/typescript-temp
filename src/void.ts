// Void =============================
// Тип void представляє відсутність значення
// Це може бути корисно, коли ви хочете вказати, що функція не повертає значення
// або коли ви хочете вказати, що функція не має значення

function logMessage(message: string): void {
  console.log(message);
}

logMessage("Hello, world!");

function doSomething(callback: () => void) {
  callback();
}

doSomething(() => console.log("Callback function!"));
