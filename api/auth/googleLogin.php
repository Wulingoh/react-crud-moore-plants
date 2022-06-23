<?php
include "json_responses.php";
$link = new DbConnect();
$db = $link->Connect();
$token = json_decode(file_get_contents('php://input'));
$data = json_decode(file_get_contents('https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=' . $token->access_token));
$sql = 'SELECT user_id, name, email, role FROM users WHERE email = :email';

if ($stmt = $db->prepare($sql)) {
    // Bind parameters (s = string, i = int, b = blob, etc), in our case the username is a string so we use "s"
    $stmt->bindParam(':email', $data->email);
    $stmt->execute();
    // Store the result so we can check if the account exists in the database.

    if ($stmt->rowCount() > 0) {
        if($row = $stmt->fetch()){
            session_regenerate_id();
            $_SESSION['loggedIn'] = true;
            $_SESSION['userId'] = $row["user_id"];
            $_SESSION['email'] = $row["email"];
            $_SESSION['name'] = $row["name"];
            $_SESSION['role'] = $row["role"];
        }

        returnJsonHttpResponse(200, array('role' => $row["role"]));
    } else {
        error_log(json_encode($data));
        $sql = "INSERT INTO users(name, email, role) values (:name, :email, 'Customer')";
        $stmt = $db->prepare($sql);
        $stmt->bindParam(':name', $data->full_name);
        $stmt->bindParam(':email', $data->email);
        $stmt->execute();

        session_regenerate_id();
        $_SESSION['loggedIn'] = true;
        $_SESSION['userId'] = $db->lastInsertId();
        $_SESSION['email'] = $data->email;
        $_SESSION['name'] = $data->name;
        $_SESSION['role'] = "Customer";

        returnJsonHttpResponse(200, array('role' => "Customer"));
    }
}
?>
