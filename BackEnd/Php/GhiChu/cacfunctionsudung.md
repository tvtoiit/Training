1. Xử Lý Chuỗi
	strlen($string)

	Mô tả: Trả về độ dài của chuỗi.
	Ví dụ: strlen('Hello'); trả về 5.
	strtoupper($string)

	Mô tả: Chuyển đổi tất cả ký tự trong chuỗi thành chữ hoa.
	Ví dụ: strtoupper('hello'); trả về 'HELLO'.
	strtolower($string)

	Mô tả: Chuyển đổi tất cả ký tự trong chuỗi thành chữ thường.
	Ví dụ: strtolower('HELLO'); trả về 'hello'.
	substr($string, $start, $length)

	Mô tả: Trích xuất một phần của chuỗi.
	Ví dụ: substr('Hello World', 6, 5); trả về 'World'.
	str_replace($search, $replace, $subject)

	Mô tả: Thay thế tất cả các lần xuất hiện của một chuỗi bằng một chuỗi khác.
	Ví dụ: str_replace('World', 'PHP', 'Hello World'); trả về 'Hello PHP'.
2. Xử Lý Mảng
	array_merge($array1, $array2, ...)

	Mô tả: Hợp nhất nhiều mảng thành một mảng.
	Ví dụ: array_merge([1, 2], [3, 4]); trả về [1, 2, 3, 4].
	array_push(&$array, $value1, $value2, ...)

	Mô tả: Thêm một hoặc nhiều phần tử vào cuối mảng.
	Ví dụ: $array = [1, 2]; array_push($array, 3, 4); trả về [1, 2, 3, 4].
	array_pop(&$array)

	Mô tả: Loại bỏ phần tử cuối cùng của mảng và trả về phần tử đó.
	Ví dụ: array_pop([1, 2, 3]); trả về 3 và mảng còn lại là [1, 2].
	in_array($needle, $haystack)

	Mô tả: Kiểm tra xem một giá trị có tồn tại trong mảng không.
	Ví dụ: in_array('apple', ['banana', 'apple', 'orange']); trả về true.
3. Xử Lý Số Học
	abs($number)

	Mô tả: Trả về giá trị tuyệt đối của số.
	Ví dụ: abs(-5); trả về 5.
	round($number, $precision)

	Mô tả: Làm tròn số đến số chữ số thập phân xác định.
	Ví dụ: round(3.14159, 2); trả về 3.14.
	rand($min, $max)

	Mô tả: Sinh số nguyên ngẫu nhiên trong khoảng từ $min đến $max.
	Ví dụ: rand(1, 100); trả về một số ngẫu nhiên từ 1 đến 100.
4. Xử Lý Ngày Giờ
	date($format, $timestamp)

	Mô tả: Trả về ngày giờ theo định dạng đã chỉ định.
	Ví dụ: date('Y-m-d', strtotime('2024-07-21')); trả về '2024-07-21'.
	time()

	Mô tả: Trả về thời gian hiện tại tính bằng giây kể từ Epoch (1/1/1970).
	Ví dụ: time(); trả về số giây hiện tại.
	strtotime($time)

	Mô tả: Chuyển đổi một chuỗi ngày giờ thành một timestamp.
	Ví dụ: strtotime('next Monday'); trả về timestamp cho ngày thứ hai tuần tới.
5. Xử Lý Tệp
	file_get_contents($filename)

	Mô tả: Đọc toàn bộ nội dung của tệp vào một chuỗi.
	Ví dụ: file_get_contents('file.txt'); trả về nội dung của file.txt.
	file_put_contents($filename, $data)

	Mô tả: Ghi dữ liệu vào tệp. Nếu tệp không tồn tại, nó sẽ được tạo.
	Ví dụ: file_put_contents('file.txt', 'Hello World'); ghi 'Hello World' vào file.txt.
6. Xử Lý Cơ Sở Dữ Liệu (MySQLi)
	mysqli_connect($host, $user, $password, $database)

	Mô tả: Kết nối đến cơ sở dữ liệu MySQL.
	Ví dụ: mysqli_connect('localhost', 'root', '', 'test');
	mysqli_query($link, $query)

	Mô tả: Thực thi câu lệnh SQL.
	Ví dụ: mysqli_query($link, 'SELECT * FROM users');
	mysqli_fetch_assoc($result)

	Mô tả: Lấy một hàng dữ liệu dưới dạng mảng liên kết từ kết quả truy vấn.
	Ví dụ: mysqli_fetch_assoc($result);
7. Xử Lý Thông Tin Người Dùng
	htmlspecialchars($string)

	Mô tả: Chuyển đổi các ký tự đặc biệt thành các mã HTML.
	Ví dụ: htmlspecialchars('<script>alert("XSS")</script>'); trả về &lt;script&gt;alert("XSS")&lt;/script&gt;.
	strip_tags($string)

	Mô tả: Loại bỏ các thẻ HTML và PHP khỏi chuỗi.
	Ví dụ: strip_tags('<p>Hello</p>'); trả về 'Hello'.
8. Xử Lý Lỗi
	error_log($message)
	Mô tả: Ghi thông báo lỗi vào log.
	Ví dụ: error_log('An error occurred');