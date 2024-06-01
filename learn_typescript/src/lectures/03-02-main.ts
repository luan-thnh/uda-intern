/**
 * Type alias and Interface
 */

// 1. Type alias

type StudentName = string;
type StudentAge = number;
type StudentType = {
  readonly id: number; // readonly
  name: string;
  age?: number; // optional
};

// 2. Interface
interface IStudent {
  readonly id: number; // readonly
  name: string;
  age?: number; // optional
}

const studentA: IStudent = {
  id: 1,
  name: 'Nguyen Van A',
  age: 20,
};

studentA.id = 2; // Error: readonly

// Union Types
let price: number | string = 100;
let title: string | number = 'product 1';

interface IInfo {
  gender: 'male' | 'female';
  phone: string | number;
  email: string;
}

// Intersection Types
type UserType = IInfo & IStudent;

const userA: UserType = {
  id: 1,
  name: 'Nguyen Van A',
  age: 20,
  gender: 'male',
  phone: '0123456789',
  email: 'x9L0s@example.com',
};

interface IUser extends IInfo, StudentType {}

// Voi interface ma co key trung nhau thi phai co type giong nhau

// Interface co the gop lai nhiu phan khai bao giup mo rong
// Declaration Merging
interface IUser {
  avatar: string;
}

// Type alias khong the gop lai nhiu phan khai bao
