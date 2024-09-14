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
  - Kiểu dữ liệu cơ bản: `number`, `string`, `boolean`, `array`, `tuple`, `enum`, `any`, `void`, `null`, `undefined`, `never`.
  - Sử dụng kiểu `any` và lý do nên tránh.
  -----------------------------
  <!-- Array -->
  Có 2 cách phổ biến để khai báo mảng: 
  1. Sử dụng type[]:
    - let arr: number[] = [1, 2, 3];
  2. Sử dụng Array<type>:
    - let arr: Array<number> = [1, 2, 3];
  => Ưu tiên type[] khi làm việc với mảng đơn giản và một chiều, vì nó ngắn gọn và dễ đọc hơn.
  => Ưu tiên Array<type> khi làm việc với kiểu phức tạp (mảng đa chiều, kiểu tùy chỉnh) 

  <!-- tuple -->
  Có số lượng và các phần tử cố định và các phần tử này có thể thuộc nhiều kiểu khác nhau: 
  1. Khai báo tuple
    let person: [string, number];
    person = ["Mercedes", 300];
  
  2. Truy cập và thao tác với tuple
    console.log(person[0]);

  3. Hạn chế của tuple 
    Số lượng phần tử cố định: nếu cố tình thêm hoặc xóa sửa thì typescript sẽ cảnh báo lỗi
    person.push("AB");

  4. Tuple với nhãn 
    let person: [name: string, age: number] = ["Alice", 30];
  - Nhãn giúp hiểu hơn chứ nó không ảnh hưởng đến hoạt động của tuple 

  <!-- Enum (enumeration) -->
  Cung cấp 3 loại enum: Numeric Enums, String Enums, Heterogeneous Enums
  1. Numeric Enums (Enum số)
    Đây là loại enum mặc định trong TypeScript. Mỗi thành viên của enum sẽ được gán một giá trị số, bắt đầu từ 0 nếu không chỉ định giá trị:

  EG.
    enum Direction {
      Up,    // 0
      Down,  // 1
      Left,  // 2
      Right  // 3
    }
  
  - Bạn có thể truy cập giá trị bằng cách: 
    let direction: Direction = Direction.Up;
    console.log(direction);

  - Bạn cũng có thể khởi tạo enum với 1 giá trị cụ thể: 
    enum Direction {
      Up = 1,
      Down,  // 2
      Left,  // 3
      Right  // 4
    }
  => Ở đây giá trị Up = 1 và các giá trị tiếp theo sẽ tự động tăng dần

  2. String Enums (Enum chuỗi)
    enum Direction {
      Up = "UP",
      Down = "DOWN",
      Left = "LEFT",
      Right = "RIGHT"
    }

  3. Heterogeneous Enums (Enum hỗn hợp)
    -  TypeScript cũng cho phép tạo enum kết hợp cả số và chuỗi:
    EG: enum Mix {
          No = 0,
          Yes = "YES"
        }
    - Hỗn hợp này thường ít được sử dụng và có thể gây nhầm lẫn, nên cần hạn chế dùng trừ khi có lý do rõ ràng.

  4. Một số lưu ý khi sử dụng Enum
  - Scope: enum trong TypeScript có phạm vi toàn cục (global) và có thể gây ra  xung đột tên nếu không được quản lý cẩn thận. Bạn nên sử dụng tên enum có     tính mô tả và tránh các tên chung chung.

  - Enums hoặc Union Types: Trong một số trường hợp, nếu enum đơn giản chỉ có các giá trị chuỗi, bạn có thể cân nhắc sử dụng Union Types để thay thế:   

  - Kiểu Union Types: Là kiểu có thể nhận nhiều hơn một kiểu dữ liệu
    let value: string | number;
    + Trường hợp này, value có thể nhận giá trị là một chuỗi (string) hoặc một số (number).

<!-- Any -->
  - Là kiểu dữ liệu cho phép lưu trữ với bất kì kiễu dữ liệu nào
  1. Khi nào thì sử dụng any
    - Tương tác với mã không kiểm soát được kiểu
    - Dữ liệu có kiểu không xác định trước
  
  2. Khai báo và sử dụng any 
    let randomValue: any;
    randomValue = 40;
    randomValue = "Hello";
    ...
  
  3. Nguy cơ khi sử dụng any
    - Khi bạn sử dụng any, TypeScript sẽ không kiểm tra kiểu dữ liệu, dẫn đến lỗi tiềm ẩn trong runtime:

    let value: any = "Hello";
    console.log(value.toFixed(2));  // Không lỗi khi biên dịch, nhưng gây lỗi khi chạy

    - Đoạn mã trên sẽ gây ra lỗi tại thời điểm chạy vì chuỗi không có phương thức toFixed.

  4. Tránh lạm dụng any
    - Mặc dù any mang lại tính linh hoạt, nhưng bạn nên tránh lạm dụng nó để duy trì tính an toàn của mã. Thay vì sử dụng any, bạn nên cố gắng sử dụng các kiểu dữ liệu cụ thể hơn hoặc Union Types để đảm bảo rằng mã của bạn được kiểm tra kiểu đúng cách.

  5. Thay thế any bằng các kiểu dữ liệu an toàn hơn
    - Union Types: Khi bạn biết trước một tập hợp các kiểu dữ liệu có thể được chấp nhận
      let value: string | number;
      value = "Hello";  // Hợp lệ
      value = 42;       // Hợp lệ

    - Unknown: Nếu bạn muốn sử dụng kiểu không xác định nhưng vẫn yêu cầu kiểm tra kiểu trước khi sử dụng.
      let value: unknown;
      value = "Hello";

      if (typeof value === "string") {
          console.log(value.toUpperCase());  // Hợp lệ
      }

  6. Tóm tắt
    - Any: Cho phép một biến lưu trữ bất kỳ kiểu dữ liệu nào và bỏ qua kiểm tra kiểu của TypeScript.

    - Khi nào sử dụng: Khi không rõ kiểu dữ liệu, tương tác với mã JavaScript hoặc thư viện bên ngoài, hoặc khi chuyển đổi mã JavaScript sang TypeScript.

    - Nguy cơ: Sử dụng any có thể làm giảm tính an toàn của mã và tạo ra lỗi tiềm ẩn trong thời gian chạy.

    - Lời khuyên: Hạn chế sử dụng any và tìm cách sử dụng các kiểu cụ thể hoặc an toàn hơn như unknown hoặc Union Types để duy trì tính an toàn của TypeScript.  

<!-- Void -->
  - Biểu thị rằng 1 hàm không trả về giá trị hoặc 1 biến 
  1. Sử dụng void trong hàm: 
  function logMessage(mess: string): void {
    console.log(mess);
  }

  2. Sử dụng void trong biến
  let unusable: void;

  3. Void vs Undefined
    - void: Được sử dụng chủ yếu trong các khai báo hàm để biểu thị rằng hàm không trả về giá trị.

    - undefined: Là một giá trị thực tế có thể được gán cho biến. Trong TypeScript, kiểu undefined là một kiểu riêng biệt, bạn có thể sử dụng nó để chỉ rằng một biến không có giá trị.

  4. Tóm tắt 
    - void được sử dụng để biểu thị rằng một hàm không trả về giá trị. 
    - Nó cũng có thể được sử dụng như một kiểu của biến, nhưng điều này ít hữu ích trong thực tế.

    - Trong hầu hết các trường hợp, bạn sẽ sử dụng void trong khai báo hàm thay vì sử dụng nó như một kiểu của biến.

    - Khác với undefined, void được sử dụng để chỉ định ý định rõ ràng của nhà phát triển về việc không trả về bất kỳ giá trị nào từ một hàm.
