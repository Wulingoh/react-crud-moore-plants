<?php
    include("config.php");
    $link = new DbConnect();
    $db = $link->connect();
    $method = $_SERVER['REQUEST_METHOD'];
    switch($method){
        case 'POST' :
            $watering = json_decode(file_get_contents('php://input'));
            $sql = "INSERT INTO watering(name, content) values(:name, :content) ";
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':name', $watering->name);
            $stmt->bindParam(':content', $watering->content);

            if($stmt->execute()) {
                $data = ['status' => 1, 'message' => "Watering successfully created"];
                

            } else {
                $data = ['status' => 0, 'message' => "Failed to create record."];
            } 
            echo json_encode($data);
            break;
        
        case 'GET':
            $sql = "SELECT * FROM watering";
            $path = explode('/', $_SERVER['REQUEST_URI']);
            if(isset($path[3]) && is_numeric($path[3])) {
                $sql .= " WHERE watering_id = :wateringId";
                $stmt = $db->prepare($sql);
                $stmt->bindParam(':wateringId', $path[3]);
                $stmt->execute();
                $watering = $stmt->fetch(PDO::FETCH_ASSOC);
            } else {
                $stmt = $db->prepare($sql);
                $stmt->execute();
                $watering = $stmt->fetchAll(PDO::FETCH_ASSOC);
            }
            echo json_encode($watering);
            break;
        
        case "PUT":
            $watering = json_decode( file_get_contents('php://input'));
            $sql = "UPDATE watering SET watering_id =:wateringId, name =:name , content =:content WHERE watering_id =:wateringId";
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':wateringId', $watering->watering_id);
            $stmt->bindParam(':name', $watering->name);
            $stmt->bindParam(':content', $watering->content);

            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Watering updated successfully.'];   
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
            break;

        case "DELETE":
            $sql = "DELETE FROM watering WHERE watering_id =:wateringId";
            $path = explode('/', $_SERVER['REQUEST_URI']);
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':wateringId', $path[3]);
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Watering deleted successfully.'];   
             } else {
                $response = ['status' => 0, 'message' => 'Failed to delete record.'];
             }
            echo json_encode($response);
            break;
    }

?>
