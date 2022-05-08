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
            $category = json_decode(file_get_contents('php://input'));
            $sql = "INSERT INTO category(type, name) values(:type, :name) ";
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':type', $category->type);
            $stmt->bindParam(':name', $category->name);

            if($stmt->execute()) {
                $data = ['status' => 1, 'message' => "Category successfully created"];
                

            } else {
                $data = ['status' => 0, 'message' => "Failed to create record."];
            } 
            echo json_encode($data);
            break;
        
        case 'GET':
            $sql = "SELECT * FROM category";
            $path = explode('/', $_SERVER['REQUEST_URI']);
            if(isset($path[3]) && is_numeric($path[3])) {
                $sql .= " WHERE category_id = :categoryId";
                $stmt = $db->prepare($sql);
                $stmt->bindParam(':categoryId', $path[3]);
                $stmt->execute();
                $category = $stmt->fetch(PDO::FETCH_ASSOC);
            } else {
                $stmt = $db->prepare($sql);
                $stmt->execute();
                $category = $stmt->fetchAll(PDO::FETCH_ASSOC);
            }
            echo json_encode($category);
            break;
        
        case "PUT":
            $category = json_decode( file_get_contents('php://input'));
            $sql = "UPDATE category SET category_id =:categoryId, type =:type, name =:name WHERE category_id =:categoryId";
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':categoryId', $category->category_id);
            $stmt->bindParam(':type', $category->type);
            $stmt->bindParam(':name', $category->name);

            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Product updated successfully.'];   
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
            break;

        case "DELETE":
            $sql = "DELETE FROM category WHERE category_id =:categoryId";
            $path = explode('/', $_SERVER['REQUEST_URI']);
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':categoryId', $path[3]);
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Category deleted successfully.'];   
             } else {
                $response = ['status' => 0, 'message' => 'Failed to delete record.'];
             }
            echo json_encode($response);
            break;
    }

?>
