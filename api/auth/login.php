<?php

include __DIR__ . "/../config.php";
include "json_responses.php";
$link = new DbConnect();
$db = $link->Connect();
$data = json_decode(file_get_contents('php://input'));
$sql = 'SELECT user_id, name, email, password_hash, role FROM users WHERE email = :email';

if ($stmt = $db->prepare($sql)) {
    // Bind parameters (s = string, i = int, b = blob, etc), in our case the username is a string so we use "s"
    $stmt->bindParam(':email', $data->email);
    $stmt->execute();
    // Store the result so we can check if the account exists in the database.

    if ($stmt->rowCount() > 0) {
        if($row = $stmt->fetch()){
            $userId = $row["user_id"];
            $name = $row["name"];
            $email = $row["email"];
            $passwordHash =$row["password_hash"];
            $role = $row["role"];

            if (password_verify($data->password, $passwordHash)) {
                // Verification success! User has logged-in!
                // Create sessions, so we know the user is logged in, they basically act like cookies but remember the data on the server.
                session_regenerate_id();
                $_SESSION['loggedin'] = TRUE;
                $_SESSION['id'] = $userId;
                $_SESSION['email'] = $email;
                $_SESSION['name'] = $name;
                $_SESSION['role'] = $role;

                // if($role == "admin") {
                //     header('Location: admin/index.php');
                // }

                returnJsonHttpResponse(true, "You have successfully logged in!"); 
            } else {
                returnJsonHttpResponse(false, "The password you entered was not valid!");
            }
        }
    } 
    else {
        returnJsonHttpResponse(false, "No account found with that email address!");
    }
}
?>
