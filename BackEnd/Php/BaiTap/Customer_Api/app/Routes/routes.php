<?php

require_once '../app/Controllers/UserController.php';

function handleRequest($route) {
    switch ($route) {
        case 'user/create':
            $controller = new UserController();
            $controller->create();
            break;
        case 'user/update':
            $controller = new UserController();
            $controller->update();
            break;
        case 'user/delete':
            $controller = new UserController();
            $controller->delete();
            break;
        case 'user/list':
            $controller = new UserController();
            $controller->list();
            break;
        default:
            http_response_code(404);
            echo json_encode(['message' => 'Route not found']);
            break;
    }
}
