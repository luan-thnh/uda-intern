const stuA = { name: 'Nguyen Van A', age: 20 };
const stuB = stuA;
const stuC = { name: 'Nguyen Van C', age: 21 };

console.log(stuA === stuB); // true
console.log(stuA === stuC); // false

let stu;

stu = {
  name: 'Nguyen Van A',
  age: 20,
  address: 'Da Nang',
};

if (stu?.name) {
  console.log(stu);
}
