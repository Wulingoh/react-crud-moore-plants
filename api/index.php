<?php
error_reporting(E_STRICT);
ini_set('display_errors', 1);

include __DIR__ . "/config.php";

$path = explode('/', $_SERVER['REQUEST_URI']);

if ($path[1] == 'api') {
    $resource = explode('?', $path[2])[0];
    switch ($resource) {
        case 'admin' :
            require __DIR__ . '/admin/index.php';
            break;
        case 'auth':
            require __DIR__ . '/auth/index.php';
            break;
        case 'customer':
            require __DIR__ . '/customer/index.php';
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