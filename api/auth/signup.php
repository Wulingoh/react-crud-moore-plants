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
    $sql = "INSERT INTO users(name, email, password_hash, role, newsletter) values (:name, :email, :passwordHash, 'customer', :newsletter)";
    $passwordHash = password_hash($data->password, PASSWORD_DEFAULT);
    $newsletter = $data->newsletter ? 1 : 0;
    $stmt = $db->prepare($sql);
    $stmt->bindParam(':name', $data->name);
    $stmt->bindParam(':email', $data->email);
    $stmt->bindParam(':passwordHash', $passwordHash);
    $stmt->bindParam(':newsletter', $newsletter);
    

    $stmt->execute();

    session_regenerate_id();
    $_SESSION['loggedIn'] = TRUE;
    $_SESSION['userId'] = $db->lastInsertId();
    $_SESSION['email'] = $data->email;
    $_SESSION['name'] = $data->name;
    $_SESSION['role'] = "Customer";



    returnJsonHttpResponse(200, "You have successfully registered and logged in.");
}
