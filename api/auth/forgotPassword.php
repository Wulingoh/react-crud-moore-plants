<?php
include "json_responses.php";
$link = new DbConnect();
$db = $link->Connect();
$data = json_decode(file_get_contents('php://input'));

if($data->email) {
    $sql = 'SELECT * FROM users WHERE email = :email';
    $stmt = $db->prepare($sql);
    $stmt->bindParam(':email', $data->email);
    $stmt->execute();

    if($stmt->rowCount() > 0){
        //Generate a random string.
        $token = openssl_random_pseudo_bytes(16);
        //Convert the binary data into hexadecimal representation.
        $token = bin2hex($token);
        $url = "http://localhost:3000/resetPassword/$token";

        $sql = "UPDATE users SET password_reset_token= :token WHERE email = :email";
        $stmt = $db->prepare($sql);
        $stmt->bindParam(':email', $data->email);
        $stmt->bindParam(':token', $token);
        $stmt->execute();
        if($stmt->execute()) {
            mail($data->email, "Reset Password", "To Reset the Password, Please Visit: $url", "From: support@domain.com\r\n");
        } 
        returnJsonHttpResponse(200, "Please check your email!"); 
    }
       else {
        returnJsonHttpResponse(404, "No account found with that email address!");
    }
}
?>