// T: Type; K: key; V: value

interface List<T> {
  length: number;
  [index: number]: T;
}

const numberList: List<number> = [1, 2, 3];
const stringList: List<string> = ['a', 'b', 'c'];

console.log(numberList);
console.log(stringList);

console.log(numberList[0]);
console.log(stringList[1]);

console.log(numberList.length);
console.log(stringList.length);

interface Product {
  id: number;
  title: string;
}

const products: List<Product> = [
  {
    id: 1,
    title: 'product 1',
  },
  {
    id: 2,
    title: 'product 2',
  },
];

console.log(products.length);

// Mapped type

type MappedProduct = {
  [K in keyof Product]: string;
};
