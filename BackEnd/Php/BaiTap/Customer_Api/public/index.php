<?php
// public/index.php

require_once '../config/config.php';
require_once '../app/Routes/routes.php';

// Cài đặt CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Xử lý request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Điều hướng request tới router
$route = $_GET['route'] ?? '';

handleRequest($route);
