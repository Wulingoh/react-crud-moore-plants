<?php
    $link = new DbConnect();
    $db = $link->connect();
    $method = $_SERVER['REQUEST_METHOD'];
    switch($method){  
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
    }

?>
