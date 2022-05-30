<?php
    $link = new DbConnect();
    $db = $link->connect();
    $method = $_SERVER['REQUEST_METHOD'];
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
                $stmt = $db->prepare($sql);
                $stmt->execute();
                $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
            }
            echo json_encode($products);
            break;
    }

?>
