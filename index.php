<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include __DIR__ . "/api/config.php";

$path = explode('/', $_SERVER['REQUEST_URI']);

if ($path[1] == 'api') {
    $resource = explode('?', $path[2])[0];
    switch ($resource) {
        case 'admin' :
            require __DIR__ . '/api/admin/index.php';
            break;
        case 'auth':
            require __DIR__ . '/api/auth/index.php';
            break;
        case 'customer':
            require __DIR__ . '/api/customer/index.php';
            break;
        default:
            http_response_code(404);
            echo 'Not Found';
            break;
        }
} elseif ($path[1] == 'public' || $path[1] == 'build') {
    return false;
} else {
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="/build/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="/build/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="/build/manifest.json" />
    <link rel="stylesheet" href="/build/static/css/main.b74e6aaf.css" />
    <title>Moore Plants</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
    <script src="/build/static/js/main.b86388f7.js"></script>
  </body>
</html>
<?php } ?>