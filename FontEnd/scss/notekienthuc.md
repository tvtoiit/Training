# Hướng Dẫn Học SCSS

## Giới Thiệu

**SCSS (Sassy CSS)** là một cú pháp của **Sass (Syntactically Awesome Style Sheets)**, giúp việc viết và duy trì mã CSS trở nên dễ dàng và hiệu quả hơn. SCSS sử dụng cú pháp giống hệt CSS, vì vậy tất cả các tệp CSS hợp lệ đều là các tệp SCSS hợp lệ.

## Nội Dung

1. [Cài Đặt SCSS](#cài-đặt-scss)
2. [Cú Pháp SCSS](#cú-pháp-scss)
3. [Biến (Variables)](#biến-variables)
4. [Lồng Nhau (Nesting)](#lồng-nhau-nesting)
5. [Kế Thừa (Inheritance)](#kế-thừa-inheritance)
6. [Mixins](#mixins)
7. [Hàm (Functions)](#hàm-functions)
8. [Thực Hành](#thực-hành)
9. [Tài Nguyên Tham Khảo](#tài-nguyên-tham-khảo)

## Cài Đặt SCSS

Để sử dụng SCSS, bạn cần cài đặt Sass trên máy tính của mình. Cách phổ biến nhất là sử dụng npm (Node Package Manager):

```sh
npm install -g sass
```

# Sau khi cài đặt, bạn có thể biên dịch các tệp SCSS thành CSS bằng lệnh sau:
sass input.scss output.css

# Cú Pháp SCSS
SCSS sử dụng cú pháp giống hệt CSS, nhưng cung cấp thêm nhiều tính năng mạnh mẽ như biến, lồng nhau, kế thừa, mixins và hàm.

# Biến (Variables)
Biến cho phép bạn lưu trữ các giá trị và sử dụng lại chúng trong suốt tệp SCSS của bạn.

$primary-color: #333;

body {
  color: $primary-color;
}

# Lồng Nhau (Nesting)
Lồng nhau cho phép bạn tổ chức các selector theo cấu trúc của HTML.

nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    display: inline-block;
  }
  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}

# Kế Thừa (Inheritance)
Sử dụng @extend để kế thừa các thuộc tính của một selector khác.

%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.message {
  @extend %message-shared;
}

.success {
  @extend %message-shared;
  border-color: green;
}

.error {
  @extend %message-shared;
  border-color: red;
}

# Mixins
Mixins cho phép bạn tạo các khối mã có thể tái sử dụng và chèn chúng vào các selector khác.

@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  border-radius: $radius;
}

.box { 
  @include border-radius(10px);
}

# Hàm (Functions)
Bạn có thể định nghĩa các hàm để trả về giá trị.

@function calculate-margin($value) {
  @return $value * 2;
}

.container {
  margin: calculate-margin(10px);
}




