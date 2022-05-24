<?php
include "config.php";

$link = new DbConnect();
$db = $link->connect();


$data = json_decode(file_get_contents("php://input"));
$validCredential = isset($data->email) && isset($data->password);
$sql = 'SELECT user_id, password_hash, role, name FROM users WHERE email = ?';
$stmt = $db->prepare($sql);
$stmt->bindParam('s', $_POST['email']);
$stmt->execute();
    // Store the result so we can check if the account exists in the database.
$stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($userId, $password_hash, $userRole, $email);
        $stmt->fetch();
        // Account exists, now we verify the password.
        // Note: remember to use password_hash in your registration file to store the hashed passwords.
        if (password_verify(json_decode(file_get_contents((['password'], $password_hash)))) {

        } else {
            // Incorrect password
            $errorMessages[] = 'Incorrect email and/or password!';
        }
    } else {
        // Incorrect username
        $errorMessages[] = 'Incorrect email and/or password!';
    }
    $stmt->close();
