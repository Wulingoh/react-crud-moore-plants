<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$path = explode('/', $_SERVER['REQUEST_URI']);

$resource = explode('?', $path[3])[0];
switch ($resource) {
    case 'login':
        require __DIR__ . '/login.php';
        break;
    case 'googleLogin':
        require __DIR__ . '/googleLogin.php';
        break;
    case 'signup':
        require __DIR__ . '/signup.php';
        break;
    case 'logout':
        require __DIR__ . '/logout.php';
        break;
    case 'session':
        require __DIR__ . '/session.php';
        break;
    case 'forgotPassword':
        require __DIR__ . '/forgotPassword.php';
        break;
    case 'resetPassword':
        require __DIR__ . '/resetPassword.php';
        break;
    

    default:
        http_response_code(404);
        echo 'Not Found';
        break;
}
