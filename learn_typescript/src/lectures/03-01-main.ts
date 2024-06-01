/**
 * 1. Type system overview
 * 2. Type Alias vs Interface
 * 3. Function
 * 4. Enum
 * 5. Generics
 * 6. Utility types
 * 7. And more
 *
 * =====
 * - Primitive Types: number, string, boolean, bigint, symbol, null, undefined
 * - Object Types: object, array, function
 * - Typescript Types: any, unknown, never, Tuple, void, null, undefined, ...
 */

// Literal Types
let number: 1; // const number = 1;
let textNumber: 'One'; // const textNumber = 'One';
let isNumber: true; // const isNumber = true;

// => khi dung `const` gan bang gia tri nao do ts tu hiu do la mot `literal type`

const product = {
  id: 1,
  title: 'product 1',
} as const; // Readonly can not assign new value

// Type assertion
function getStatus(value: 'active') {
  console.log(value);
}

let s = 'active'; // let s:string => su dung `const` hoac `as`
getStatus(s as 'active');

// Tuple
type Tuple = [number, string];
const tuple: Tuple = [1, 'string'];

// Null
let nullValue: null = null;

// Undefined
let undefinedValue: undefined = undefined;
