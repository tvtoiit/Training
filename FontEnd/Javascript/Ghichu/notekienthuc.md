# JavaScript ES6 Documentation

## 1. Let và Const

- **`let`**: Khai báo biến có phạm vi khối (block scope), có thể thay đổi giá trị.
  ```javascript
  let x = 10;
  x = 20;

- **`const`**: Khai báo biến có phạm vi khối (block scope), không thể thay đổi giá trị sau khi đã được gán.

const y = 30;
// y = 40; // Error: Assignment to constant variable.

## 2. Arrow Functions
Cú pháp ngắn gọn để khai báo hàm:

const add = (a, b) => a + b;

# Hàm không có tham số: 
const greet = () => 'Hello, World!';

# Hàm có một dòng lệnh: 
const square = x => x * x;

## 3. Template Literals
Chuỗi ký tự đa dòng và interpolation

const name = 'John';
const age = 25;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;

## 4. Default Parameters
Khai báo tham số mặc định cho hàm

function multiply(a, b = 1) {
  return a * b;
}

## 5. Destructuring Assignment
Destructuring Arrays:
const [x, y] = [1, 2];

Destructuring Objects:
const person = { name: 'Alice', age: 30 };
const { name, age } = person;

## 6. Rest and Spread Operators
Rest Operator: Gom nhóm các tham số vào một mảng.
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

Spread Operator: Tách mảng hoặc đối tượng thành các phần tử.
const nums = [1, 2, 3];
const moreNums = [0, ...nums, 4];

## 7. Classes
# Khai báo lớp (class):

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}


# Kế thừa lớp:
class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  getId() {
    return this.studentId;
  }
}

## 8. Modules

# Xuất module:
// module.js
export const pi = 3.14;
export function calculateArea(radius) {
  return pi * radius * radius;
}
# Nhập module:
// main.js
import { pi, calculateArea } from './module.js';
console.log(calculateArea(5)); // 78.5

## 9. Promises
# Tạo và sử dụng Promise

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
  }, 1000);
});

myPromise.then(result => console.log(result)); // Success!






