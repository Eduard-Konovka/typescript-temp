// Never ===========================
// Тип never представляє значення, яке ніколи не відбувається
// Це може бути корисно, коли ви хочете вказати, що функція ніколи не повертає значення
// або коли ви хочете вказати, що функція завжди викликає помилку

function throwError(message: string): never {
  throw new Error(message);
}

throwError("Something went wrong!");

function infiniteLoop(): never {
  while (true) {
    // Do something
  }
}
infiniteLoop(); // This function will never return
