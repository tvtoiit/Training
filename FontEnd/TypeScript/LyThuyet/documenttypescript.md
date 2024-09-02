# Lộ trình học TypeScript

## 1. Kiến thức cơ bản

- **Cài đặt TypeScript**
  - Hướng dẫn cài đặt TypeScript và thiết lập môi trường phát triển.

  # A. Cài đặt thư viện 
    - Cài đặt node, npm
    - npm install -g typescript@4.8.3 ts-node@10.9.1

    - check version typescript compiler:
      tsc -v
      //Version 4.8.3

    - Tạo project
    B1. Tạo thư mục dự án
      mkdir my-typescript-project
      cd my-typescript-project 

    B2. Khởi tạo dự án với `npm`
      npm init -y
      - File `package.json` này chứa thông tin về dự án và các gói mà dự án phụ thuộc vào.

    B3. Thiết Lập TypeScript
      - Tạo 1 file cấu hình TypeScript (`tsconfig.json`). File này chứa các cài đặt cần thiết cho trình biên dịch TypeScript.
        tsc --init

    B4. Tạo Thư Mục và File TypeScript
      mkdir src

      - Tạo file `index.ts` trong thư mục `src`:
      `src/index.ts:`

      function greet(name: string): string {
        return `Hello, ${name}!`;
      }

      console.log(greet("TypeScript"));

    B5. Biên Dịch TypeScript sang JavaScript
      - Để biên dịch mã nguồn TypeScript sang JavaScript, bạn chỉ cần chạy lệnh `tsc`:

    B6. Chạy File JavaScript với Node.js
      node src/index.js

    B7. Sử dụng `ts-node` để Chạy Trực Tiếp File TypeScript
      ts-node src/index.ts
    
    B8. Thiết Lập Scripts trong `package.json`
      {
        "name": "my-typescript-project",
        "version": "1.0.0",
        "main": "index.js",
        "scripts": {
          "start": "ts-node src/index.ts",
          "build": "tsc"
        },
        "dependencies": {},
        "devDependencies": {}
      }

- **Cú pháp cơ bản**
  - Sự khác biệt cơ bản giữa TypeScript và JavaScript.
  - Khai báo biến với `let`, `const` và kiểu dữ liệu.

- **Kiểu dữ liệu (Types)**
  - Kiểu dữ liệu cơ bản: `string`, `number`, `boolean`, `array`, `tuple`, `enum`, `any`, `void`, `null`, `undefined`, `never`.
  - Sử dụng kiểu `any` và lý do nên tránh.

- **Type Inference**
  - Cách TypeScript tự động suy luận kiểu dữ liệu khi không khai báo rõ ràng.

- **Union và Intersection Types**
  - Sử dụng `union` (`|`) và `intersection` (`&`) để kết hợp các kiểu dữ liệu.

## 2. Interface và Type Alias

- **Interface**
  - Khai báo và sử dụng `interface` để định nghĩa cấu trúc của đối tượng.
  - So sánh `interface` và `type alias`.

- **Type Alias**
  - Đặt tên cho các kiểu dữ liệu phức tạp với `type`.

## 3. Classes và Kế thừa

- **Classes**
  - Khai báo và sử dụng các lớp trong TypeScript.
  - Constructor và phương thức của lớp.

- **Modifiers và Tính đóng gói**
  - Sử dụng `public`, `private`, `protected`, `readonly` để kiểm soát truy cập.
  - Tính đóng gói và tính kế thừa trong TypeScript.

## 4. Function Types và Generics

- **Function Types**
  - Khai báo kiểu cho hàm và sử dụng hàm như đối số.

- **Generics**
  - Khái niệm và áp dụng Generics để xây dựng hàm và lớp tái sử dụng.

## 5. Modules và Namespaces

- **Modules**
  - Sử dụng `export` và `import` để tổ chức mã nguồn thành các khối nhỏ hơn.
  - Các loại modules: ES Module, CommonJS.

- **Namespaces**
  - Khái niệm và cách sử dụng `namespace` để nhóm các thành phần liên quan.

## 6. Decorators

- **Decorators**
  - Khái niệm về decorators và cách sử dụng với lớp, phương thức, thuộc tính, và tham số.
  - Các loại decorators: `Class`, `Method`, `Property`, `Parameter`.

## 7. Advanced Types

- **Mapped Types**
  - Sử dụng mapped types để biến đổi các kiểu hiện có thành kiểu mới.

- **Conditional Types**
  - Sử dụng conditional types để xây dựng các kiểu dữ liệu dựa trên điều kiện.

- **Utility Types**
  - Sử dụng các utility types như `Partial`, `Readonly`, `Pick`, `Record`, `Exclude`, `Extract`, `NonNullable`, `ReturnType`, `InstanceType`.

## 8. Error Handling và Type Guards

- **Error Handling**
  - Cách xử lý lỗi với `try/catch` trong TypeScript.

- **Type Guards**
  - Sử dụng type guards để kiểm tra và xử lý các kiểu dữ liệu khác nhau.

## 9. Khai thác TypeScript trong các Framework

- **Angular, React, Vue**
  - Tích hợp TypeScript vào các framework phổ biến như Angular, React, và Vue.
  - Sử dụng TypeScript để cải thiện tính rõ ràng và tính an toàn của mã nguồn.

## 10. Tooling và Cài đặt Cấu hình

- **TypeScript Configuration**
  - Hiểu file `tsconfig.json` và cách cấu hình TypeScript cho dự án.

- **Linting và Formatting**
  - Sử dụng công cụ linting và formatting như TSLint hoặc ESLint với TypeScript để đảm bảo chất lượng mã nguồn.
