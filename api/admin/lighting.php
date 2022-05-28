<?php
    $link = new DbConnect();
    $db = $link->connect();
    $method = $_SERVER['REQUEST_METHOD'];
    switch($method){
        case 'POST' :
            $lighting = json_decode(file_get_contents('php://input'));
            $sql = "INSERT INTO lighting_care(name, content) values(:name, :content) ";
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':name', $lighting->name);
            $stmt->bindParam(':content', $lighting->content);

            if($stmt->execute()) {
                $data = ['status' => 1, 'message' => "Lighting Care successfully created"];
                

            } else {
                $data = ['status' => 0, 'message' => "Failed to create record."];
            } 
            echo json_encode($data);
            break;
        
        case 'GET':
            $sql = "SELECT * FROM lighting_care";
            $path = explode('/', $_SERVER['REQUEST_URI']);
            if(isset($path[4]) && is_numeric($path[4])) {
                $sql .= " WHERE lighting_id = :lightingId";
                $stmt = $db->prepare($sql);
                $stmt->bindParam(':lightingId', $path[4]);
                $stmt->execute();
                $lighting = $stmt->fetch(PDO::FETCH_ASSOC);
            } else {
                $stmt = $db->prepare($sql);
                $stmt->execute();
                $lighting = $stmt->fetchAll(PDO::FETCH_ASSOC);
            }
            echo json_encode($lighting);
            break;
        
        case "PUT":
            $lighting = json_decode( file_get_contents('php://input'));
            $sql = "UPDATE lighting_care SET lighting_id =:lightingId, name =:name , content =:content WHERE lighting_id =:lightingId";
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':lightingId', $lighting->lighting_id);
            $stmt->bindParam(':name', $lighting->name);
            $stmt->bindParam(':content', $lighting->content);

            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Lighting Care updated successfully.'];   
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
            break;

        case "DELETE":
            $sql = "DELETE FROM lighting_care WHERE lighting_id =:lightingId";
            $path = explode('/', $_SERVER['REQUEST_URI']);
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':lightingId', $path[4]);
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Lighting Care deleted successfully.'];   
             } else {
                $response = ['status' => 0, 'message' => 'Failed to delete record.'];
             }
            echo json_encode($response);
            break;
    }

?>
