<?php
    $link = new DbConnect();
    $db = $link->connect();
    $method = $_SERVER['REQUEST_METHOD'];
    switch($method){
        case 'GET':
            $sql = "SELECT * FROM orders";
            $path = explode('/', $_SERVER['REQUEST_URI']);
            if(isset($path[4]) && is_numeric($path[4])) {
                $sql .= " WHERE order_id = :orderId";
                $stmt = $db->prepare($sql);
                $stmt->bindParam(':orderId', $path[4]);
                $stmt->execute();
                $orders = $stmt->fetch(PDO::FETCH_ASSOC);
                $sqlOrderProduct = "SELECT * FROM order_products WHERE order_products.order_id = :orderId";
                $stmt = $db->prepare($sqlOrderProduct);
                $stmt->bindParam(':orderId',  $path[4]);
                $stmt->execute();
                $orders["items"] = $stmt->fetch(PDO::FETCH_ASSOC);
            } else {
                $stmt = $db->prepare($sql);
                $stmt->execute();
                $orders = $stmt->fetchAll(PDO::FETCH_ASSOC);
            }
            echo json_encode($orders);
            break;
        
        case "PUT":
            $orders = json_decode( file_get_contents('php://input'));
            $sql = "UPDATE orders SET status =:status, subtotal =:subtotal, tax =:tax, shipping =:shipping, total =:total, name =:name , email =:email, mobile =:mobile, line_1 =:line1, line_2 =:line2, city =:city, postcode =:postcode, country =:country, comment =:comment, updated_at=NOW() WHERE order_id =:orderId";
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':orderId', $orders->order_id);
            $stmt->bindParam(':status', $orders->status);
            $stmt->bindParam(':subtotal', $orders->subtotal);
            $stmt->bindParam(':tax', $orders->tax);
            $stmt->bindParam(':shipping', $orders->shipping);
            $stmt->bindParam(':total', $orders->total);
            $stmt->bindParam(':name', $orders->name);
            $stmt->bindParam(':email', $orders->email);
            $stmt->bindParam(':mobile', $orders->mobile);
            $stmt->bindParam(':line1', $orders->line_1);
            $stmt->bindParam(':line2', $orders->line_2);
            $stmt->bindParam(':city', $orders->city);
            $stmt->bindParam(':postcode', $orders->postcode);
            $stmt->bindParam(':country', $orders->country);
            $stmt->bindParam(':comment', $orders->comment);

            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Orders updated successfully.'];   
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
            break;

        case "DELETE":
            $sql = "DELETE FROM orders WHERE order_id =:orderId";
            $path = explode('/', $_SERVER['REQUEST_URI']);
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':orderId', $path[4]);
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Orders deleted successfully.'];   
             } else {
                $response = ['status' => 0, 'message' => 'Failed to delete record.'];
             }
            echo json_encode($response);
            break;
    }

?>
