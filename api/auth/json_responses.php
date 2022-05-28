<?php
function returnJsonHttpResponse($status, $data)
{
    // remove any string that could create an invalid JSON 
    // such as PHP Notice, Warning, logs...
    ob_clean();

    // Set the content type to JSON and charset 
    // (charset can be set to something else)
    header("Content-type: application/json; charset=utf-8");

    // Set your HTTP response code, 2xx = SUCCESS, 
    // anything else will be error, refer to HTTP documentation
    http_response_code($status);

    // encode your PHP Object or Array into a JSON string.
    // stdClass or array
    echo json_encode($data);

    // making sure nothing is added
    exit();
}
?>
