# Flexbox CSS Documentation

## 1. Khái niệm cơ bản

Flexbox là một mô hình bố trí trong CSS cho phép sắp xếp và căn chỉnh các phần tử trong một container theo hàng hoặc cột với khả năng điều chỉnh kích thước và vị trí của các phần tử con.

## 2. Flex Container

Để sử dụng Flexbox, bạn cần khai báo `display: flex;` cho container.

.container {
  display: flex;
}

## 3. Các thuộc tính của Flex Container
# 3.1. flex-direction
Xác định hướng của các phần tử con trong container.

row: Hàng ngang (mặc định)
column: Cột dọc
row-reverse: Hàng ngang ngược
column-reverse: Cột dọc ngược

.container {
  flex-direction: row; /* row, column, row-reverse, column-reverse */
}


# 3.2. flex-wrap
Xác định liệu các phần tử con có nên gói gọn hay không.

nowrap: Không gói gọn (mặc định)
wrap: Gói gọn
wrap-reverse: Gói gọn ngược

.container {
  flex-wrap: wrap; /* nowrap, wrap, wrap-reverse */
}

# 3.3. flex-flow
Kết hợp flex-direction và flex-wrap.

.container {
  flex-flow: row wrap; /* flex-direction flex-wrap */
}


# 3.4. justify-content
Căn chỉnh các phần tử con theo trục chính (main axis).

flex-start: Bắt đầu (mặc định)
center: Trung tâm
flex-end: Kết thúc
space-between: Khoảng cách đều giữa các phần tử
space-around: Khoảng cách đều quanh các phần tử
space-evenly: Khoảng cách đều giữa các phần tử và các đầu

.container {
  justify-content: center; /* flex-start, center, flex-end, space-between, space-around, space-evenly */
}

# 3.5. align-items
Căn chỉnh các phần tử con theo trục phụ (cross axis).

stretch: Kéo dài (mặc định)
center: Trung tâm
flex-start: Bắt đầu
flex-end: Kết thúc
baseline: Căn chỉnh theo baseline của các phần tử

.container {
  align-items: center; /* stretch, center, flex-start, flex-end, baseline */
}

# 3.6. align-content
Căn chỉnh các dòng con trong container khi có nhiều dòng.

stretch: Kéo dài (mặc định)
center: Trung tâm
flex-start: Bắt đầu
flex-end: Kết thúc
space-between: Khoảng cách đều giữa các dòng
space-around: Khoảng cách đều quanh các dòng

.container {
  align-content: space-between; /* stretch, center, flex-start, flex-end, space-between, space-around */
}


# 3.7. align-items vs align-content
align-items dùng để căn chỉnh các phần tử con trên trục phụ trong một dòng duy nhất.
align-content dùng để căn chỉnh các dòng con khi có nhiều dòng trong container.


## 4. Flex Items
Các phần tử con của flex container có thể được điều chỉnh với các thuộc tính sau:

# 4.1. flex-grow
Xác định tỷ lệ mở rộng của phần tử con so với các phần tử khác khi container còn không gian.

0: Không mở rộng (mặc định)
1: Mở rộng để chiếm không gian còn lại

.item {
  flex-grow: 1;
}

# 4.2. flex-shrink
Xác định tỷ lệ thu nhỏ của phần tử con so với các phần tử khác khi container không đủ không gian.

1: Thu nhỏ khi cần (mặc định)
0: Không thu nhỏ

.item {
  flex-shrink: 1;
}

# 4.3. flex-basis
Xác định kích thước cơ bản của phần tử con trước khi phân phối không gian còn lại.

auto: Dựa trên kích thước nội dung (mặc định)
px, em, %: Kích thước cụ thể

.item {
  flex-basis: 200px;
}

# 4.4. flex
Kết hợp flex-grow, flex-shrink, và flex-basis.

flex: grow shrink basis

.item {
  flex: 1 1 200px;
}

# 4.5. align-self
Căn chỉnh một phần tử con riêng biệt theo trục phụ.

auto: Theo align-items của container (mặc định)
flex-start
flex-end
center
baseline
stretch

.item {
  align-self: center; /* auto, flex-start, flex-end, center, baseline, stretch */
}






