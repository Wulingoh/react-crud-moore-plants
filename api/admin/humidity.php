<?php
    $link = new DbConnect();
    $db = $link->connect();
    $method = $_SERVER['REQUEST_METHOD'];
    switch($method){
        case 'POST' :
            $humidity = json_decode(file_get_contents('php://input'));
            $sql = "INSERT INTO humidity(name, content) values(:name, :content) ";
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':name', $humidity->name);
            $stmt->bindParam(':content', $humidity->content);

            if($stmt->execute()) {
                $data = ['status' => 1, 'message' => "Humidity successfully created"];
                

            } else {
                $data = ['status' => 0, 'message' => "Failed to create record."];
            } 
            echo json_encode($data);
            break;
        
        case 'GET':
            $sql = "SELECT * FROM humidity";
            $path = explode('/', $_SERVER['REQUEST_URI']);
            if(isset($path[3]) && is_numeric($path[4])) {
                $sql .= " WHERE humidity_id = :humidityId";
                $stmt = $db->prepare($sql);
                $stmt->bindParam(':humidityId', $path[4]);
                $stmt->execute();
                $humidity = $stmt->fetch(PDO::FETCH_ASSOC);
            } else {
                $stmt = $db->prepare($sql);
                $stmt->execute();
                $humidity = $stmt->fetchAll(PDO::FETCH_ASSOC);
            }
            echo json_encode($humidity);
            break;
        
        case "PUT":
            $humidity = json_decode( file_get_contents('php://input'));
            $sql = "UPDATE humidity SET humidity_id =:humidityId, name =:name , content =:content WHERE humidity_id =:humidityId";
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':humidityId', $humidity->humidity_id);
            $stmt->bindParam(':name', $humidity->name);
            $stmt->bindParam(':content', $humidity->content);

            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Humidity updated successfully.'];   
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
            break;

        case "DELETE":
            $sql = "DELETE FROM humidity WHERE humidity_id =:humidityId";
            $path = explode('/', $_SERVER['REQUEST_URI']);
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':humidityId', $path[4]);
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Humidity deleted successfully.'];   
             } else {
                $response = ['status' => 0, 'message' => 'Failed to delete record.'];
             }
            echo json_encode($response);
            break;
    }

?>
