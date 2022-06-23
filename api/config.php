<?php
// set to NZ time zone
date_default_timezone_set('Pacific/Auckland');
// start session
session_start();

class DbConnect {
    private $server = "localhost"; // here the database server is localhost. Variables created for easy changing
    private $dbname = "moore_plants_db";
    private $user = "root";
    private $password = "";

    public function connect() {
        try {
            $link = new PDO('mysql:host=' .$this->server .';dbname=' .$this->dbname .';charset=utf8mb4', $this->user, $this->password);
            $link->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $link;
        } catch (\Exception $e) {
            echo "Database Error: " . $e->getMessage();
        }
    }

}
define('PRODUCT_IMG_DIR', '/Users/wulingoh/code/react-crud/public/images/');

// width is scale on the fly
define('PRODUCT_IMG_WIDTH', 500);
?>