# HTML Documentation

## 1. Khái niệm cơ bản

HTML (HyperText Markup Language) là ngôn ngữ đánh dấu dùng để xây dựng và cấu trúc nội dung trên web. HTML sử dụng các thẻ (tags) để chỉ định các phần tử của trang web.

## 2. Cấu trúc cơ bản của tài liệu HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document Title</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>Main Heading</h1>
  </header>
  <nav>
    <ul>
      <li><a href="#section1">Section 1</a></li>
      <li><a href="#section2">Section 2</a></li>
    </ul>
  </nav>
  <main>
    <section id="section1">
      <h2>Section 1 Heading</h2>
      <p>This is a paragraph in section 1.</p>
    </section>
    <section id="section2">
      <h2>Section 2 Heading</h2>
      <p>This is a paragraph in section 2.</p>
    </section>
  </main>
  <footer>
    <p>&copy; 2024 Your Company</p>
  </footer>
</body>
</html>

# 3. Các thẻ HTML phổ biến
# 3.1. Thẻ cấu trúc
<html>: Thẻ gốc của tài liệu HTML.
<head>: Phần đầu của tài liệu, chứa các thẻ meta, title, link đến stylesheet, và scripts.
<body>: Phần nội dung của tài liệu, nơi chứa các thẻ như header, nav, main, footer, v.v.

# 3.2. Thẻ tiêu đề
<h1>, <h2>, <h3>, <h4>, <h5>, <h6>: Các thẻ tiêu đề với độ ưu tiên giảm dần.
<h1>Main Heading</h1>
<h2>Sub Heading</h2>

# 3.3. Thẻ đoạn văn và danh sách
<p>: Thẻ đoạn văn.
<ul>: Danh sách không thứ tự.
<ol>: Danh sách có thứ tự.
<li>: Mục trong danh sách.

<p>This is a paragraph.</p>

<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<ol>
  <li>First</li>
  <li>Second</li>
</ol>


# 3.4. Thẻ liên kết và hình ảnh
<a>: Thẻ liên kết.
<img>: Thẻ hình ảnh

<a href="https://www.example.com">Visit Example.com</a>

<img src="image.jpg" alt="Description of image">

# 3.5. Thẻ bảng
<table>: Thẻ bảng.
<tr>: Thẻ hàng trong bảng.
<td>: Thẻ ô dữ liệu.
<th>: Thẻ ô tiêu đề.

<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
  </tr>
</table>

# 3.6. Thẻ biểu mẫu
<form>: Thẻ biểu mẫu.
<input>: Thẻ đầu vào.
<label>: Thẻ nhãn.
<textarea>: Thẻ vùng văn bản.
<button>: Thẻ nút bấm

<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">

  <label for="email">Email:</label>
  <input type="email" id="email" name="email">

  <label for="message">Message:</label>
  <textarea id="message" name="message"></textarea>

  <button type="submit">Submit</button>
</form>

# 4. Thuộc tính HTML
# 4.1. Thuộc tính id và class

id: Xác định một định danh duy nhất cho một phần tử.
class: Xác định một hoặc nhiều lớp cho phần tử, dùng để áp dụng các kiểu CSS chung.

<div id="uniqueId" class="commonClass">Content</div>

# 4.2. Thuộc tính href, src, và alt
href: Địa chỉ URL cho thẻ liên kết.
src: Địa chỉ URL cho thẻ hình ảnh.
alt: Mô tả hình ảnh cho thẻ hình ảnh (đảm bảo khả năng tiếp cận).

<a href="https://www.example.com">Link</a>
<img src="image.jpg" alt="Image description">

# 4.3. Thuộc tính action và method của thẻ <form>
action: URL nơi dữ liệu biểu mẫu sẽ được gửi.
method: Phương thức HTTP (GET hoặc POST) để gửi dữ liệu biểu mẫu.

<form action="/submit" method="post">
  <!-- Form elements here -->
</form>

# 5. HTML5 Các tính năng mới
# 5.1 Các thẻ mới
<section>: Phần của tài liệu, thường có tiêu đề.
<article>: Phần độc lập, có thể tái sử dụng.
<aside>: Nội dung phụ, thường là sidebar.
<nav>: Phần điều hướng liên kết.
<footer>: Phần chân trang của tài liệu hoặc phần.
<header>: Phần đầu trang của tài liệu hoặc phần.

<section>
  <header>
    <h1>Section Title</h1>
  </header>
  <p>Content of the section.</p>
</section>



# 5.2 Các thuộc tính mới
data-*: Thuộc tính tùy chỉnh cho dữ liệu không phải là thuộc tính chuẩn.

<div data-custom="value">Content</div>

# 6. Các thẻ Metadata
<meta>: Thẻ meta cung cấp thông tin về tài liệu.
<link>: Thẻ liên kết đến tài nguyên bên ngoài như CSS.
<style>: Thẻ chứa CSS nội tuyến.
<script>: Thẻ chứa JavaScript hoặc liên kết đến tệp JavaScript.

<head>
  <meta charset="UTF-8">
  <meta name="description" content="Description of the page">
  <link rel="stylesheet" href="styles.css">
  <style>
    body { font-family: Arial, sans-serif; }
  </style>
  <script src="script.js" defer></script>
</head>
