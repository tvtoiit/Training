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

display: grid: Chuyển phần tử thành grid container.
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
6.1 Canh giữa theo chiều ngang
- Sử dụng text-align: center;

<div style="text-align: center;">
  <span>Canh giữa theo chiều ngang</span>
</div>

- Sử dụng margin: 0, auto;
<div style="width: 200px; margin: 0 auto;">
  <span>Canh giữa theo chiều ngang</span>
</div>

6.2 Canh giữa theo chiều dọc
- Sử dụng line-height -> cho giá trị bằng với phần tử height

<div style="height: 30px; line-height: 30px;">
  <span>Canh giữa theo chiều dọc</span>
</div>

- Sử dụng flexbox: Dùng flex container để canh giữa các phần tử bên trong cả chiều ngang và chiều dọc
<div style="display: flex; align-items: center; height: 200px;">
  <span>Canh giữa chiều doc</span>
</div> 

6.3 Canh giữa theo cả 2 chiều 
- Sử dụng flexbox 

<div style="height: 200px; display: flex; align-item: center; justify-content: center;">
  <span>Canh giữa hoàn toàn</span>
</div>

- Sử dụng grid Layout

<div style="height: 200px; display: grid; place-item: center;">
  <span>Canh giữa hoàn toàn</span>
</div>

- Sử dụng vị trí tuyệt đối và chuyển đổi

<div style="position: relative; height: 200px">
  <div style="position: alsolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
    Canh giữa hoàn toàn
  </div>
</div>

6.4 Canh giữa trong grid
- Dành riêng cho các container sử dụng css Grid Layout

<div style="display: grid; align-item: center; justify-content: center; height: 200px">
  <span>Canh giữa hoàn toàn</span>
</div>







