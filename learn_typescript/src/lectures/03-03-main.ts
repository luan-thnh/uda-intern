const sum: (a: number, b: number) => number = (a, b) => a + b;
console.log(sum(1, 2));

const getLengthOptional = (numList?: number[]): number | undefined => {
  return Array.isArray(numList) ? numList.length : 0;
};
console.log(getLengthOptional([1, 2, 3, 4, 5, 6]));

const getLengthParameter = (numList: number[] = []): number => {
  return Array.isArray(numList) ? numList.length : 0;
};

console.log(getLengthParameter([1, 2, 3, 4, 5, 6]));

// Void
function sayHello(): void {
  console.log('Hello');
}

// Never
function error(message: string): never {
  throw new Error(message);
}
