# SQL Documentation

## 1. Giới thiệu về SQL

SQL (Structured Query Language) là ngôn ngữ tiêu chuẩn dùng để giao tiếp với cơ sở dữ liệu quan hệ. SQL được sử dụng để thực hiện các thao tác như truy vấn dữ liệu, cập nhật dữ liệu, và quản lý cấu trúc cơ sở dữ liệu.

## 2. Cú pháp cơ bản

### 2.1. Các loại câu lệnh SQL

- **DML (Data Manipulation Language)**: `SELECT`, `INSERT`, `UPDATE`, `DELETE`
- **DDL (Data Definition Language)**: `CREATE`, `ALTER`, `DROP`
- **DCL (Data Control Language)**: `GRANT`, `REVOKE`

## 3. Các câu lệnh SQL phổ biến

### 3.1. SELECT

- **Câu lệnh cơ bản**

```sql
SELECT column1, column2
FROM table_name;
```
# Chọn tất cả cột
SELECT * FROM table_name;

# Sắp xếp dữ liệu
SELECT column1, column2
FROM table_name
ORDER BY column1 ASC; -- Hoặc DESC

# Lọc dữ liệu
SELECT column1, column2
FROM table_name
WHERE condition;

# Kết hợp dữ liệu từ nhiều bảng
SELECT columns
FROM table1
JOIN table2
ON table1.common_field = table2.common_field;

# 3.2. INSERT
Chèn dữ liệu vào bảng

INSERT INTO table_name (column1, column2)
VALUES (value1, value2);

Chèn nhiều bản ghi
INSERT INTO table_name (column1, column2)
VALUES (value1, value2), (value3, value4);

# 3.3. UPDATE
Cập nhật dữ liệu

UPDATE table_name
SET column1 = value1, column2 = value2
WHERE condition;

# 3.4. DELETE
Xóa dữ liệu

DELETE FROM table_name
WHERE condition;

# 3.5. CREATE TABLE
Tạo bảng mới

CREATE TABLE table_name (
    column1 datatype constraint,
    column2 datatype constraint,
    ...
);

# 3.6. ALTER TABLE
Thay đổi cấu trúc bảng

ALTER TABLE table_name
ADD column_name datatype;

Xóa cột
ALTER TABLE table_name
DROP COLUMN column_name;

# 3.7. DROP TABLE
Xóa bảng

DROP TABLE table_name;

# 4. Các hàm và toán tử
4.1. Hàm Aggregation

COUNT
SELECT COUNT(*) FROM table_name;

SUM
SELECT SUM(column_name) FROM table_name;

AVG
SELECT AVG(column_name) FROM table_name;

MAX và MIN
SELECT MAX(column_name), MIN(column_name) FROM table_name;

# 4.2. Hàm Chuỗi
CONCAT
SELECT CONCAT(column1, ' ', column2) AS full_name FROM table_name;

LENGTH
SELECT LENGTH(column_name) FROM table_name;

UPPER và LOWER
SELECT UPPER(column_name) FROM table_name;
SELECT LOWER(column_name) FROM table_name;

# 4.3. Hàm Ngày và Thời gian
NOW
SELECT NOW();

DATE_FORMAT
SELECT DATE_FORMAT(date_column, '%Y-%m-%d') FROM table_name;

# 5. Các kỹ thuật nâng cao
5.1. JOINs
INNER JOIN
SELECT columns
FROM table1
INNER JOIN table2
ON table1.common_field = table2.common_field;

LEFT JOIN
SELECT columns
FROM table1
LEFT JOIN table2
ON table1.common_field = table2.common_field;

RIGHT JOIN
SELECT columns
FROM table1
RIGHT JOIN table2
ON table1.common_field = table2.common_field;


FULL OUTER JOIN
SELECT columns
FROM table1
FULL OUTER JOIN table2
ON table1.common_field = table2.common_field;

# 5.2. Subqueries
Subquery trong SELECT

SELECT column1
FROM table_name
WHERE column2 = (SELECT column2 FROM another_table WHERE condition);

Subquery trong WHERE
SELECT column1
FROM table_name
WHERE column2 IN (SELECT column2 FROM another_table);

# 5.3. Indexes
Tạo chỉ mục
CREATE INDEX index_name
ON table_name (column_name);

Xóa chỉ mục
DROP INDEX index_name ON table_name;


