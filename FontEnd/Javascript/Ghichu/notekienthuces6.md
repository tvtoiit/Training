# JavaScript ES6 Documentation

## 1. Let và Const

- **`let`**: Khai báo biến có phạm vi khối (block scope), có thể thay đổi giá trị.
  ```javascript
  let x = 10;
  x = 20;

- **`const`**: Khai báo biến có phạm vi khối (block scope), không thể thay đổi giá trị sau khi đã được gán.

const y = 30;
// y = 40; // Error: Assignment to constant variable.

## 2. Template Literals
Chuỗi ký tự đa dòng và interpolation

const name = 'John';
const age = 25;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;

## 3. Multi-line String

## 4. Arrow Functions
Cú pháp ngắn gọn để khai báo hàm:

const add = (a, b) => a + b;

# Hàm không có tham số: 
const greet = () => 'Hello, World!';

# Hàm có một dòng lệnh: 
const square = x => x * x;

## 5. Classes


## 6. Default Parameters
Khai báo tham số mặc định cho hàm

function multiply(a, b = 1) {
  return a * b;
}

## 7. Destructuring Assignment
Destructuring Arrays:
const [x, y] = [1, 2];

Destructuring Objects:
const person = { name: 'Alice', age: 30 };
const { name, age } = person;

## 8. Rest and Spread Operators
Rest Operator: Gom nhóm các tham số vào một mảng.
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

Spread Operator: Tách mảng hoặc đối tượng thành các phần tử.
const nums = [1, 2, 3];
const moreNums = [0, ...nums, 4];

## 9. Spread 
## 10. Enhanced object literals
## 11. Tagged template literal
## 12. Modules






