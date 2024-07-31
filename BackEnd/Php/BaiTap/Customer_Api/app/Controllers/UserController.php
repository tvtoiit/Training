<?php
// app/Controllers/UserController.php

class UserController {
    public function create() {
        $data = json_decode(file_get_contents('php://input'), true);
        // Xử lý logic tạo người dùng ở đây
        echo json_encode(['message' => 'User created successfully']);
    }

    public function update() {
        $data = json_decode(file_get_contents('php://input'), true);
        // Xử lý logic cập nhật người dùng ở đây
        echo json_encode(['message' => 'User updated successfully']);
    }

    public function delete() {
        $data = json_decode(file_get_contents('php://input'), true);
        // Xử lý logic xóa người dùng ở đây
        echo json_encode(['message' => 'User deleted successfully']);
    }

    public function list() {
        // Lấy danh sách người dùng từ cơ sở dữ liệu
        $users = []; // Giả sử đây là danh sách người dùng từ cơ sở dữ liệu
        echo json_encode(['users' => $users]);
    }
}
