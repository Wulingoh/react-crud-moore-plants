<?php
include "json_responses.php";
$link = new DbConnect();
$db = $link->Connect();
$data = json_decode(file_get_contents('php://input'));

if (empty($data->token)) {
    returnJsonHttpResponse(422, "Please enter your password reset token!");
}

if (empty($data->password)) {
    returnJsonHttpResponse(422, "Please enter your password!");
}

$passwordHash = password_hash(
    $data->password,
    PASSWORD_DEFAULT
);
// Password Hashing is used here.

$sql = "UPDATE `users` SET `password_hash` = :password_hash, `password_reset_token` = NULL WHERE `password_reset_token` = :token";

$stmt = $db->prepare($sql);
$stmt->bindParam(':password_hash', $passwordHash);
$stmt->bindParam(':token', $token);
$stmt->execute();

returnJsonHttpResponse(200, "Your password has been reset!"); 

?>
