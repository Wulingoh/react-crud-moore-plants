<?php
require 'vendor/autoload.php';

$proxyPort = getenv("PROXY_PORT");
if ($proxyPort == "") $proxyPort = "4000";
$config = Ory\Kratos\Client\Configuration::getDefaultConfiguration()->setHost(sprintf("http://localhost:%s/.ory", $proxyPort));
$ory = new Ory\Kratos\Client\Api\V0alpha2Api(new GuzzleHttp\Client(), $config);

function validateSession()
{
    $cookies = "";
    // set the cookies on the ory client
    foreach ($_COOKIE as $key => $value) {
        $cookies .= "$key=$value;";
    }

    try {
        // check if we have a session
        $session = $GLOBALS['ory']->toSession("", $cookies);
        if (!$session["active"]) throw new Exception('Session expired');
    } catch (Exception $e) {
        error_log('Exception when calling V0alpha2Api->toSession: ' . $e->getMessage());
        http_response_code(401);
        die();
    }
}

?>