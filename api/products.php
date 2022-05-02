<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    header("Access-Control-Allow-Methods: *");

    include("config.php");
    $link = new DbConnect();
    $db = $link->connect();
    $method = $_SERVER['REQUEST_METHOD'];
    switch($method){
        case 'POST' :
            if ($_FILES['img']['tmp_name'] != "") {
                $imgName = $_FILES['img']['name'];
                $ext = strrchr($imgName, ".");
                $newName = md5(rand() * time()) . $ext;
                $imgPath = PRODUCT_IMG_DIR . $newName;
                $tmpName = $_FILES['img']['tmp_name'];
                createThumbnail($tmpName, $imgPath, PRODUCT_IMG_WIDTH);
              } else {
                $newName = "";
              }
            $product = json_decode(file_get_contents('php://input'));
            $sql = "INSERT INTO products(category_id, type, title, name, price, quantity, color, height, latin_name, lighting_care_id, care_level_id, watering_id, humidity_id, room_type, size, pot_material, content, created_at) values(:categoryId, :type, :title, :name, :price, :quantity, :color, :height, :latinName, :lightingCareId, :careLevelId, :wateringId, :humidityId, :roomType, :size, :potMaterial, :content) ";
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':categoryId', $product->category_id);
            $stmt->bindParam(':type', $product->type);
            $stmt->bindParam(':newName', $product->img);
            $stmt->bindParam(':title', $product->title);
            $stmt->bindParam(':name', $product->name);
            $stmt->bindParam(':price', $product->price);
            $stmt->bindParam(':quantity', $product->quantity);
            $stmt->bindParam(':color', $product->color);
            $stmt->bindParam(':height', $product->height);
            $stmt->bindParam(':latinName', $product->latin_name);
            $stmt->bindParam(':lightingCareId', $product->lighting_care_id);
            $stmt->bindParam(':careLevelId', $product->care_level_id);
            $stmt->bindParam(':humidityId', $product->humidity_id);
            $stmt->bindParam(':roomType', $product->room_type);
            $stmt->bindParam(':size', $product->size);
            $stmt->bindParam(':potMaterial', $product->pot_material);
            $stmt->bindParam(':content', $product->content);
            if($stmt->execute()) {
                $data = ['status' => 1, 'message' => "Product successfully created"];
                

            } else {
                $data = ['status' => 0, 'message' => "Failed to create record."];
            } 
            echo json_encode($data);
            break;
        
        case 'GET':
            $sql = "SELECT products.product_id, category.name as categoryName, products.type, products.img, products.title, products.name, products.slug, products.price, products.quantity, products.color, products.height, products.latin_name, lighting_care.name as lightingName, care_level.name as careLevelName, watering.name as wateringName, humidity.name as humidityName, products.room_type, products.size, products.pot_material, products.content 
            FROM products
            INNER JOIN category on products.category_id = category.category_id 
            INNER JOIN lighting_care on products.lighting_care_id = lighting_care.lighting_id 
            INNER JOIN care_level on products.care_level_id = care_level.care_level_id 
            INNER JOIN watering on products.watering_id = watering.watering_id 
            INNER JOIN humidity on products.humidity_id = humidity.humidity_id ";
            $path = explode('/', $_SERVER['REQUEST_URI']);
            if(isset($path[3]) && is_numeric($path[3])) {
                $sql .= " WHERE product_id = :productId";
                $stmt = $db->prepare($sql);
                $stmt->bindParam(':productId', $path[3]);
                $stmt->execute();
                $products = $stmt->fetch(PDO::FETCH_ASSOC);
            } else {
                $stmt = $db->prepare($sql);
                $stmt->execute();
                $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
            }
            echo json_encode($products);
            break;
        
        case "PUT":
            if ($_FILES['img']['tmp_name'] != "") {
                $imgName = $_FILES['img']['name'];
                $ext = strrchr($imgName, ".");
                $newName = md5(rand() * time()) . $ext;
                $imgPath = PRODUCT_IMG_DIR . $newName;
                $tmpName = $_FILES['img']['tmp_name'];
                createThumbnail($tmpName, $imgPath, PRODUCT_IMG_WIDTH);
              } else {
                $newName = "";
              }
            $product = json_decode( file_get_contents('php://input'));
            $sql = "UPDATE products SET category_id =:categoryId, type =:type, name =:name, img =:newName, title =:title, price =:price, quantity =:quantity, color =:color, height =:height, latin_name =:latinName, lighting_care_id =:lightingCareId, care_level_id =:careLevelId, watering_id =:wateringId, humidity_id =:humidityId, room_type =:roomType, size =:size, pot_material =:potMaterial, content =:content WHERE product_id =:productId";
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':productId', $product->product_id);
            $stmt->bindParam(':categoryId', $product->category_id);
            $stmt->bindParam(':type', $product->category_id);
            $stmt->bindParam(':newName', $product->img);
            $stmt->bindParam(':title', $product->title);
            $stmt->bindParam(':name', $product->name);
            $stmt->bindParam(':price', $product->price);
            $stmt->bindParam(':quantity', $product->quantity);
            $stmt->bindParam(':color', $product->color);
            $stmt->bindParam(':height', $product->height);
            $stmt->bindParam(':latinName', $product->latin_name);
            $stmt->bindParam(':lightingCareId', $product->lighting_care_id);
            $stmt->bindParam(':careLevelId', $product->care_level_id);
            $stmt->bindParam(':humidityId', $product->humidity_id);
            $stmt->bindParam(':roomType', $product->room_type);
            $stmt->bindParam(':size', $product->size);
            $stmt->bindParam(':potMaterial', $product->pot_material);
            $stmt->bindParam(':content', $product->content);
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Product updated successfully.'];   
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
            break;

        case "DELETE":
            $sql = "DELETE FROM products WHERE product_id =:productId";
            $path = explode('/', $_SERVER['REQUEST_URI']);
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':productId', $path[3]);
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Product deleted successfully.'];   
             } else {
                $response = ['status' => 0, 'message' => 'Failed to delete record.'];
             }
            echo json_encode($response);
            break;
    }

?>
