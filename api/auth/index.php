<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$path = explode('/', $_SERVER['REQUEST_URI']);
$method = $_SERVER['REQUEST_URI'];

$resource = explode('?', $path[3])[0];
switch ($resource) {
    case 'login':
        require __DIR__ . '/login.php';
        break;
    case 'register':
        require __DIR__ . '/register.php';
        break;

    default:
        http_response_code(404);
        echo 'Not Found';
        break;
}
    ?>