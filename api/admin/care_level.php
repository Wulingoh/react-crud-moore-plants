<?php
    $link = new DbConnect();
    $db = $link->connect();
    $method = $_SERVER['REQUEST_METHOD'];
    switch($method){
        case 'POST' :
            $careLevel = json_decode(file_get_contents('php://input'));
            $sql = "INSERT INTO care_level(name, content) values(:name, :content) ";
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':name', $careLevel->name);
            $stmt->bindParam(':content', $careLevel->content);

            if($stmt->execute()) {
                $data = ['status' => 1, 'message' => "Care Level successfully created"];
                

            } else {
                $data = ['status' => 0, 'message' => "Failed to create record."];
            } 
            echo json_encode($data);
            break;
        
        case 'GET':
            $sql = "SELECT * FROM care_level";
            $path = explode('/', $_SERVER['REQUEST_URI']);
            if(isset($path[4]) && is_numeric($path[4])) {
                $sql .= " WHERE care_level_id = :careLevelId";
                $stmt = $db->prepare($sql);
                $stmt->bindParam(':careLevelId', $path[4]);
                $stmt->execute();
                $careLevel = $stmt->fetch(PDO::FETCH_ASSOC);
            } else {
                $stmt = $db->prepare($sql);
                $stmt->execute();
                $careLevel = $stmt->fetchAll(PDO::FETCH_ASSOC);
            }
            echo json_encode($careLevel);
            break;
        
        case "PUT":
            $careLevel = json_decode( file_get_contents('php://input'));
            $sql = "UPDATE care_level SET care_level_id =:careLevelId, name =:name , content =:content WHERE care_level_id =:careLevelId";
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':careLevelId', $careLevel->care_level_id);
            $stmt->bindParam(':name', $careLevel->name);
            $stmt->bindParam(':content', $careLevel->content);

            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Care Level updated successfully.'];   
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
            break;

        case "DELETE":
            $sql = "DELETE FROM care_level WHERE care_level_id =:careLevelId";
            $path = explode('/', $_SERVER['REQUEST_URI']);
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':careLevelId', $path[4]);
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Care Level deleted successfully.'];   
             } else {
                $response = ['status' => 0, 'message' => 'Failed to delete record.'];
             }
            echo json_encode($response);
            break;
    }

?>
