<?php
    $link = new DbConnect();
    $db = $link->connect();
    $method = $_SERVER['REQUEST_METHOD'];
    switch($method){
 
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

    }

?>
