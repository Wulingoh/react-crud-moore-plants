<?php
include "json_responses.php";

unset($_SESSION["loggedIn"]);
unset($_SESSION["userId"]);
unset($_SESSION["email"]);
unset($_SESSION['name']);
unset($_SESSION['role']);

returnJsonHttpResponse(200, "You have successfully logged out!");
?>