interface Student {
  id: number;
  fullName: string;
  age: number;
  address: string;
}

const student: Student = {
  id: 1,
  fullName: 'Nguyen Van A',
  age: 20,
  address: 'Da Nang',
};

const { id, fullName, ...rest } = student;

console.log(rest); // { age: 20, address: 'Da Nang' }

interface Info {
  phone: string;
  email: string;
  avatar: string;
}

const info: Info = {
  phone: '0123456789',
  email: 'x9L0s@example.com',
  avatar: 'https://picsum.photos/200/300',
};

type User = Student & Info;

const user: User = {
  ...student,
  ...info,
};

// Array tuong tu voi Object
