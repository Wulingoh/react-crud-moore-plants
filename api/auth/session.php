<?php
include __DIR__ . "/../config.php";
include "json_responses.php";

if(isset($_SESSION['loggedIn']) && $_SESSION['loggedIn'] == true) {
    returnJsonHttpResponse(200, array(
        "userId" => $_SESSION['userId'],
        "email" => $_SESSION['email'],
        "name" => $_SESSION["name"],
        "role" => $_SESSION["role"]
    ));
} else {
    returnJsonHttpResponse(401, "Unauthorised log in!");
}
