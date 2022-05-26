<?php

include __DIR__ . "/../config.php";
include "json_responses.php";
$link = new DbConnect();
$db = $link->Connect();

$data = json_decode(file_get_contents('php://input'));

if (empty($data->name)) {
    returnJsonHttpResponse(false, "Please your full name!");
}
if (empty($data->password)) {
    returnJsonHttpResponse(false, "Please enter your password!");
}

if (empty($data->email)) {
    returnJsonHttpResponse(false, "Please enter your email!");
} elseif (!filter_var($data->email, FILTER_VALIDATE_EMAIL)) {
    returnJsonHttpResponse(false, "Please enter a validate email!");
}

$sql = "SELECT * FROM users WHERE email = :email";
$stmt = $db->prepare($sql);
$stmt->bindParam(':email', $data->email);

$stmt->execute();

if ($stmt->rowCount() > 0) {
    returnJsonHttpResponse(false, "This email already exists!");
} else {
    $sql = "INSERT INTO users(name, email, password_hash, role) values (:name, :email, :passwordHash, 'customer')";
    $passwordHash = password_hash($data->password, PASSWORD_DEFAULT);
    $stmt = $db->prepare($sql);
    $stmt->bindParam(':name', $data->name);
    $stmt->bindParam(':email', $data->email);
    $stmt->bindParam(':passwordHash', $passwordHash);
    

    $stmt->execute();

    returnJsonHttpResponse(true, "You have successfully registered.");
}
