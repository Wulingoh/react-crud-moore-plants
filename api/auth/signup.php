<?php
include "json_responses.php";
$link = new DbConnect();
$db = $link->Connect();

$data = json_decode(file_get_contents('php://input'));

if (empty($data->name)) {
    returnJsonHttpResponse(422, "Please your full name!");
}
if (empty($data->password)) {
    returnJsonHttpResponse(422, "Please enter your password!");
}

if (empty($data->email)) {
    returnJsonHttpResponse(422, "Please enter your email!");
} elseif (!filter_var($data->email, FILTER_VALIDATE_EMAIL)) {
    returnJsonHttpResponse(422, "Please enter a validate email!");
}

$sql = "SELECT * FROM users WHERE email = :email";
$stmt = $db->prepare($sql);
$stmt->bindParam(':email', $data->email);

$stmt->execute();

if ($stmt->rowCount() > 0) {
    returnJsonHttpResponse(422, "This email already exists!");
} else {
    $sql = "INSERT INTO users(name, email, password_hash, role) values (:name, :email, :passwordHash, 'customer')";
    $passwordHash = password_hash($data->password, PASSWORD_DEFAULT);
    $stmt = $db->prepare($sql);
    $stmt->bindParam(':name', $data->name);
    $stmt->bindParam(':email', $data->email);
    $stmt->bindParam(':passwordHash', $passwordHash);
    

    $stmt->execute();

    returnJsonHttpResponse(200, "You have successfully registered.");
}
