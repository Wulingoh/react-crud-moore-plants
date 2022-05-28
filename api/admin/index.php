<?php
include "../auth/json_responses.php";

if(!isset($_SESSION['role']) || $_SESSION['role'] != 'Admin'){
    returnJsonHttpResponse(401, "Unauthorised logged in");
} else {
    $path = explode('/', $_SERVER['REQUEST_URI']);

    $resource = explode('?', $path[3])[0];
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

        default:
            http_response_code(404);
            echo 'Not Found';
            break;
    }
    
}

?>