<?php

include __DIR__ . "/../config.php";

$link = new DbConnect();
$db = $link->Connect();
$method = $_SERVER['REQUEST_METHOD'] == "POST";
$data = json_decode(file_get_contents('php://input'));
$sql = 'SELECT user_id, name, role, password_hash FROM users WHERE email = ?';

if ($stmt = $db->prepare($sql)) {
    // Bind parameters (s = string, i = int, b = blob, etc), in our case the username is a string so we use "s"
    $stmt->bindParam('s', $_POST['email']);
    $stmt->execute();
    // Store the result so we can check if the account exists in the database.

    if ($stmt->rowCount() > 0) {
        $stmt->bindValue($userId, $name, $passwordHash, $role);
        $stmt->fetch();
        // Account exists, now we verify the password.
        // Note: remember to use password_hash in your registration file to store the hashed passwords.
        if (password_verify($_POST['password'], $passwordHash)) {
            // Verification success! User has logged-in!
            // Create sessions, so we know the user is logged in, they basically act like cookies but remember the data on the server.
            session_regenerate_id();
            $_SESSION['loggedin'] = TRUE;
            $_SESSION['email'] = $_POST['email'];
            $_SESSION['name'] = $userId;
            $_SESSION['role'] = $role;

            $stmt->null;
        }
    } 
    else {
        $data = ['status' => 0, 'message' => "Failed to log in."];
    }
}
?>
