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
            $user = json_decode(file_get_contents('php://input'));
            // $hashedPassword = password_hash($user->password, PASSWORD_BCRYPT);
            $sql = "INSERT INTO users(user_id, name, email, role) values(null, :name, :email, :role) ";
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':name', $user->name);
            $stmt->bindParam(':email', $user->email);
            $stmt->bindParam(':role', $user->role);
            // $stmt->bindParam(':password', $hashedPassword);
            if($stmt->execute()) {
                $data = ['status' => 1, 'message' => "Record successfully created"];
                

            } else {
                $data = ['status' => 0, 'message' => "Failed to create record."];
            } 
            echo json_encode($data);
            break;
        
        case 'GET':
            $sql = "SELECT * FROM users";
            $path = explode('/', $_SERVER['REQUEST_URI']);
            if(isset($path[3]) && is_numeric($path[3])) {
                $sql .= " WHERE user_id = :userId";
                $stmt = $db->prepare($sql);
                $stmt->bindParam(':userId', $path[3]);
                $stmt->execute();
                $users = $stmt->fetch(PDO::FETCH_ASSOC);
            } else {
                $stmt = $db->prepare($sql);
                $stmt->execute();
                $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
            }
            echo json_encode($users);
            break;
        
        case "PUT":
           $user = json_decode( file_get_contents('php://input'));
           $sql = "UPDATE users SET name= :name, email  =:email, role =:role WHERE user_id =:userId";
           $stmt = $db->prepare($sql);
           $stmt->bindParam(':userId', $user->user_id);
           $stmt->bindParam(':name', $user->name);
           $stmt->bindParam(':email', $user->email);
           $stmt->bindParam(':role', $user->role);
           if($stmt->execute()) {
             $response = ['status' => 1, 'message' => 'Record updated successfully.'];   
            } else {
             $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
            break;

        case "DELETE":
            $sql = "DELETE FROM users WHERE user_id =:userId";
            $path = explode('/', $_SERVER['REQUEST_URI']);
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':userId', $path[3]);
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record deleted successfully.'];   
             } else {
                $response = ['status' => 0, 'message' => 'Failed to delete record.'];
             }
            echo json_encode($response);
            break;
    }

?>
