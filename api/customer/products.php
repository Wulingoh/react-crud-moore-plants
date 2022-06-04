<?php
    $link = new DbConnect();
    $db = $link->connect();
    $method = $_SERVER['REQUEST_METHOD'];

    function escape_string($value) {
        return $GLOBALS['db']->quote($value, PDO::PARAM_STR);
    }

    function escape_array($db, $value) {
        return implode(',', array_map("escape_string", explode(',', $value)));
    }

    switch($method){
        case 'GET':
            $sql = "SELECT products.product_id, products.category_id, category.name as categoryName, products.type, products.img, products.title, products.name, products.price, products.quantity, products.color, products.height, products.latin_name, products.lighting_care_id,lighting_care.name as lightingName, products.care_level_id, care_level.name as careLevelName, products.watering_id,watering.name as wateringName, products.humidity_id,humidity.name as humidityName, products.room_type, products.size, products.pot_material, products.content 
            FROM products
            INNER JOIN category on products.category_id = category.category_id 
            INNER JOIN lighting_care on products.lighting_care_id = lighting_care.lighting_id 
            INNER JOIN care_level on products.care_level_id = care_level.care_level_id 
            INNER JOIN watering on products.watering_id = watering.watering_id 
            INNER JOIN humidity on products.humidity_id = humidity.humidity_id ";
            $path = explode('/', $_SERVER['REQUEST_URI']);
            if(isset($path[4]) && is_numeric($path[4])) {
                $sql .= " WHERE product_id = :productId";
                $stmt = $db->prepare($sql);
                $stmt->bindParam(':productId', $path[4]);
                $stmt->execute();
                $products = $stmt->fetch(PDO::FETCH_ASSOC);
            } else {
                // $orderBy = "vehicles.price ASC";
                // if (isset($_GET["orderBy"])) {
                //     $orderByOption = array("vehicles.price ASC", "vehicles.price DESC", "vehicles.created_at DESC", "vehicles.mileage DESC", "vehicles.mileage ASC");
                //     $orderByKey = array_search($_GET["orderBy"], $orderByOption);
                //     $orderBy = $orderByOption[$orderByKey];
                // }
                $sql .= " WHERE 1";
                if(isset($_GET["lightingCareId"]) && $_GET["lightingCareId"]){
                    $sql .= " AND products.lighting_care_id IN (".escape_array($db, $_GET["lightingCareId"]).")";
                }
                if(isset($_GET["careLevelId"]) && $_GET["careLevelId"]){
                    $sql .= " AND products.care_level_id IN (".escape_array($db, $_GET["careLevelId"]).")";
                }
                if(isset($_GET["categoryId"]) && $_GET["categoryId"]){
                    $sql .= " AND products.category_id IN (".escape_array($db, $_GET["categoryId"]).")";
                }
                if(isset($_GET["roomType"]) && $_GET["roomType"]){
                    $sql .= " AND products.room_type IN (".escape_array($db, $_GET["roomType"]).")";
                }
                if(isset($_GET["priceGte"]) && $_GET["priceGte"]){
                    $sql .= " AND products.price >= :priceGte";
                }
                if(isset($_GET["priceLt"]) && $_GET["priceLt"]){
                    $sql .= " AND products.price < :priceLt";
                }
                if(isset($_GET["heightGte"]) && $_GET["heightGte"]){
                    $sql .= " AND products.height >= :heightGte";
                }
                if(isset($_GET["heightLt"]) && $_GET["heightLt"]){
                    $sql .= " AND products.height < :heightLt";
                }
                $stmt = $db->prepare($sql);
                if(isset($_GET["priceGte"]) && $_GET["priceGte"]){
                    $stmt->bindParam(':priceGte', $_GET['priceGte']);
                }
                if(isset($_GET["priceLt"]) && $_GET["priceLt"]){
                    $stmt->bindParam(':priceLt', $_GET['priceLt']);
                }
                if(isset($_GET["heightGte"]) && $_GET["heightGte"]){
                    $stmt->bindParam(':heightGte', $_GET['heightGte']);
                }
                if(isset($_GET["heightLt"]) && $_GET["heightLt"]){
                    $stmt->bindParam(':heightLt', $_GET['heightLt']);
                }
                $stmt->execute();
                $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
            }
            echo json_encode($products);
            break;
    }

?>
