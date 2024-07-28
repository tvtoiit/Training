# CSS Documentation

## 1. Khái niệm cơ bản

CSS (Cascading Style Sheets) là ngôn ngữ dùng để mô tả cách hiển thị các phần tử HTML trên trang web. CSS giúp kiểm soát các thuộc tính như màu sắc, kiểu chữ, kích thước, khoảng cách, và bố trí.

## 2. Cú pháp CSS cơ bản

CSS bao gồm các quy tắc với ba phần chính: chọn lựa (selector), thuộc tính (property), và giá trị (value).

```css
selector {
  property: value;
}
```
# 1. Bố trí Grid

display: grid;: Chuyển phần tử thành grid container.
grid-template-columns: Xác định số lượng và kích thước các cột.
grid-template-rows: Xác định số lượng và kích thước các hàng.
grid-column và grid-row: Xác định vị trí của các phần tử con

.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 10px;
}

.item {
  grid-column: span 2;
}

# 2. CSS Transitions
transition: Xác định thuộc tính CSS nào sẽ thay đổi và thời gian thay đổi.
.box {
  width: 100px;
  height: 100px;
  background-color: blue;
  transition: background-color 0.3s ease;
}

.box:hover {
  background-color: red;
}

# 3. CSS Animations
@keyframes: Định nghĩa hoạt ảnh.
animation: Áp dụng hoạt ảnh cho phần tử.

@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.box {
  animation: slideIn 0.5s ease-out;
}

# 4. Media Queries
@media: Định nghĩa các quy tắc CSS áp dụng cho các điều kiện cụ thể (như kích thước màn hình).

@media (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}

# 5. Các thuộc tính tùy chỉnh (CSS Variables)
--variable-name: Định nghĩa biến CSS.
var(--variable-name): Sử dụng biến CSS

:root {
  --main-color: #3498db;
}

.box {
  background-color: var(--main-color);
}

# 6. Các cách căn giữa item




