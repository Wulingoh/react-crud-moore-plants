<?php
    $link = new DbConnect();
    $db = $link->connect();
    $method = $_SERVER['REQUEST_METHOD'];
    switch($method){  
        case 'GET':
            $sql = "SELECT * FROM category";
            $path = explode('/', $_SERVER['REQUEST_URI']);
            if(isset($path[4]) && is_numeric($path[4])) {
                $sql .= " WHERE category_id = :categoryId";
                $stmt = $db->prepare($sql);
                $stmt->bindParam(':categoryId', $path[4]);
                $stmt->execute();
                $category = $stmt->fetch(PDO::FETCH_ASSOC);
            } else {
                $stmt = $db->prepare($sql);
                $stmt->execute();
                $category = $stmt->fetchAll(PDO::FETCH_ASSOC);
            }
            echo json_encode($category);
            break;
    }

?>
