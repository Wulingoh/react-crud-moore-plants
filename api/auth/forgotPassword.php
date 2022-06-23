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
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, 'https://api.mailgun.net/v3/sandbox91319309c07b4bcfb5f8cec194ead2f5.mailgun.org/messages');
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_POST, 1);
            $post = array(
                'from' => 'Moore Plants <postmaster@sandbox91319309c07b4bcfb5f8cec194ead2f5.mailgun.org>',
                'to' => $data->email,
                'subject' => 'Reset Password',
                'text' => "To Reset the Password, Please Visit: $url"
            );
            curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
            curl_setopt($ch, CURLOPT_USERPWD, 'api' . ':' . '');

            $result = curl_exec($ch);
            if (curl_errno($ch)) {
                returnJsonHttpResponse(500, 'Error:' . curl_error($ch));
            }
            curl_close($ch);
        }
        returnJsonHttpResponse(200, "Please check your email!"); 
    }
       else {
        returnJsonHttpResponse(404, "No account found with that email address!");
    }
}
?>