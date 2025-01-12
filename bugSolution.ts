function add(a: number, b: number): number {
  return a + b;
}

function isNumber(arg: any): arg is number {
  return typeof arg === 'number';
}

let result = add(1, 2); // Correct usage
console.log(result); // Output: 3

let result2 = add(1, "2"); // This will throw an error at compile time
console.log(result2); // This line will not be reached