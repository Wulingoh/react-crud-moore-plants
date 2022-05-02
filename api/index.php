<?php

$path = explode('/', $_SERVER['REQUEST_URI']);

switch ($path[2]) {
    case 'users' :
        require __DIR__ . '/users.php';
        break;
    case 'products' :
        require __DIR__ . '/products.php';
        break;
    default:
        http_response_code(404);
        echo 'Not Found';
        break;
        
       
}
?>