<?php
error_reporting(E_STRICT);
ini_set('display_errors', true);

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: *');
header("Access-Control-Allow-Methods: *");

include "auth.php";
validateSession();

$path = explode('/', $_SERVER['REQUEST_URI']);

if ($path[1] == 'api') {
    $resource = explode('?', $path[2])[0];
    switch ($resource) {
        case 'orders' :
            require __DIR__ . '/orders.php';
            break;
        case 'users' :
            require __DIR__ . '/users.php';
            break;
        case 'products' :
            require __DIR__ . '/products.php';
            break;
        case 'category' :
            require __DIR__ . '/category.php';
            break;
        case 'lighting' :
            require __DIR__ . '/lighting.php';
            break;
        case 'care_level' :
            require __DIR__ . '/care_level.php';
            break;
        case 'watering' :
            require __DIR__ . '/watering.php';
            break;
        case 'humidity' :
            require __DIR__ . '/humidity.php';
            break;
        case 'gallery_img' :
            require __DIR__ . '/gallery_img.php';
            break;
        case 'auth':
            require __DIR__ . '/auth.php';
            break;
                
        default:
            http_response_code(404);
            echo 'Not Found';
            break;
        }
} elseif ($path[1] == 'public') {
    return false;
} else {
    http_response_code(404);
    echo 'Not Found';
}
?>