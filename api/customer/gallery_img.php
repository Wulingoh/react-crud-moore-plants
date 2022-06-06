<?php
    $link = new DbConnect();
    $db = $link->connect();
    $method = $_SERVER['REQUEST_METHOD'];
    switch($method){
        case 'GET':
            $sql = "SELECT gallery_img.*, products.name as product_name FROM gallery_img INNER JOIN products ON gallery_img.product_id = products.product_id";
            $path = explode('/', $_SERVER['REQUEST_URI']);
            if(isset($path[4]) && is_numeric($path[4])) {
                $sql .= " WHERE gallery_img_id = :galleryImgId";
                $stmt = $db->prepare($sql);
                $stmt->bindParam(':galleryImgId', $path[4]);
                $stmt->execute();
                $products = $stmt->fetch(PDO::FETCH_ASSOC);
            } elseif ($_GET['product_id']) {
                $sql .= " WHERE gallery_img.product_id = :productId";
                $stmt = $db->prepare($sql);
                $stmt->bindParam(':productId', $_GET['product_id']);
                $stmt->execute();
                $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
            } else {
                $stmt = $db->prepare($sql);
                $stmt->execute();
                $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
            }
            echo json_encode($products);
            break;

    }

?>
