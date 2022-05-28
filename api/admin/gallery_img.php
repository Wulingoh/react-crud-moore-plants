<?php
    $link = new DbConnect();
    $db = $link->connect();
    $method = $_SERVER['REQUEST_METHOD'];
    switch($method){
        case 'POST' :
            $galleryImg = json_decode(file_get_contents('php://input'));
            $fileChunks = explode(";base64,", $galleryImg->img);
            $fileType = explode("image/", $fileChunks[0]);
            $imageType = $fileType[1];
            $imageData = base64_decode($fileChunks[1]);
            $imagePath = uniqid() . '.' . $imageType;
            file_put_contents(PRODUCT_IMG_DIR . $imagePath, $imageData);

            $sql = "INSERT INTO gallery_img(product_id, img, title, created_at, updated_at) values(:productId, :img, :title, NOW(), NOW())";

            $stmt = $db->prepare($sql);
            $stmt->bindParam(':productId', $galleryImg->product_id);
            $stmt->bindParam(':img', $imagePath);
            $stmt->bindParam(':title', $galleryImg->title);

            if($stmt->execute()) {
                $data = ['status' => 1, 'message' => "Product successfully created"];
                

            } else {
                $data = ['status' => 0, 'message' => "Failed to create record."];
            } 
            echo json_encode($data);
            break;
        
        case 'GET':
            $sql = "SELECT gallery_img.*, products.name as product_name FROM gallery_img INNER JOIN products ON gallery_img.product_id = products.product_id";
            $path = explode('/', $_SERVER['REQUEST_URI']);
            if(isset($path[3]) && is_numeric($path[4])) {
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
        
        case "PUT":
            $galleryImg = json_decode(file_get_contents('php://input'));
            $imagePath = $galleryImg->img;
            if (isset($galleryImg->updated_gallery_img)) {
                $fileChunks = explode(";base64,", $galleryImg->updated_gallery_img);
                $fileType = explode("image/", $fileChunks[0]);
                $imageType = $fileType[1];
                $imageData = base64_decode($fileChunks[1]);
                $imagePath = uniqid() . '.' . $imageType;
                file_put_contents(PRODUCT_IMG_DIR . $imagePath, $imageData);
            }

            $sql = "UPDATE gallery_img SET product_id =:productId, img =:img title =:title, updated_at=NOW() WHERE gallery_img_id =:galleryImgId";
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':productId', $product->product_id);
            $stmt->bindParam(':img', $imagePath);
            $stmt->bindParam(':title', $product->title);
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Product updated successfully.'];   
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
            break;

        case "DELETE":
            $sql = "DELETE FROM gallery_img WHERE gallery_img_id =:galleryImgId";
            $path = explode('/', $_SERVER['REQUEST_URI']);
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':galleryImgId', $path[4]);
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Product deleted successfully.'];   
             } else {
                $response = ['status' => 0, 'message' => 'Failed to delete record.'];
             }
            echo json_encode($response);
            break;
    }

?>
