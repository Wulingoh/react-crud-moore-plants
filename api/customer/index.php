<?php
include "../auth/json_responses.php";


$path = explode('/', $_SERVER['REQUEST_URI']);

$resource = explode('?', $path[3])[0];
switch ($resource) {
    case 'orders':
        require __DIR__ . '/orders.php';
        break;
    case 'products':
        require __DIR__ . '/products.php';
        break;
    case 'lighting':
        require __DIR__ . '/lighting.php';
        break;
    case 'care_level':
        require __DIR__ . '/care_level.php';
        break;
    case 'category':
        require __DIR__ . '/category.php';
        break;

    default:
        http_response_code(404);
        echo 'Not Found';
        break;
}
