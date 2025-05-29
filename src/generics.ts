let arr: Array<string | number> = [];

arr = ["str", 10];

const promise: Promise<string> = new Promise((resolve) => {
  setInterval(() => {
    resolve("Done!");
  }, 1000);
});

promise.then((data): void => {
  console.log(data);
});

// Generic function/method ==========================
