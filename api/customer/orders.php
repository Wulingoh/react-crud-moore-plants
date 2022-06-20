<?php
$link = new DbConnect();
$db = $link->connect();
$method = $_SERVER['REQUEST_METHOD'];
switch($method){
    case 'POST':
        $order = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO orders(token, user_id, status, subtotal, tax, shipping, total, name, email, line_1, line_2, city, postcode, country, comment, created_at, updated_at) values(:token, :userId, :status, :subtotal, :tax, :shipping, :total, :name, :email, :line1, :line2, :city, :postcode, :country, :comment, NOW(), NOW())";
        $token = uniqid();
        $userId = $_SESSION['userId'];
        $stmt = $db->prepare($sql);
        $stmt->bindParam(':token', $token);
        $stmt->bindParam(':userId', $userId);
        $stmt->bindParam(':status', $order->status);
        $stmt->bindParam(':subtotal', $order->subtotal);
        $stmt->bindParam(':tax', $order->tax);
        $stmt->bindParam(':shipping', $order->shipping);
        $stmt->bindParam(':total', $order->total);
        $stmt->bindParam(':name', $order->name);
        $stmt->bindParam(':email', $order->email);
        $stmt->bindParam(':line1', $order->line_1);
        $stmt->bindParam(':line2', $order->line_2);
        $stmt->bindParam(':city', $order->city);
        $stmt->bindParam(':postcode', $order->postcode);
        $stmt->bindParam(':country', $order->country);
        $stmt->bindParam(':comment', $order->comment);

        if($stmt->execute()) {
            $order_id = $db->lastInsertId();
            foreach($order->items as $orderProduct) {
                $sql = "UPDATE products SET quantity = (quantity - :quantity) WHERE product_id = :product_id";
                $stmt = $db->prepare($sql);
                $stmt->bindParam(':product_id', $orderProduct-> product_id);
                $stmt->bindParam(':quantity', $orderProduct->quantity);
                $stmt->execute();

                $sql = "INSERT INTO order_products(order_id, product_id, quantity, price, created_at, updated_at) VALUES (:order_id, :product_id, :quantity, :price, NOW(), NOW())";
                $stmt = $db->prepare($sql);
                $stmt->bindParam(':order_id', $order_id);
                $stmt->bindParam(':product_id', $orderProduct-> product_id);
                $stmt->bindParam(':quantity', $orderProduct->quantity);
                $stmt->bindParam(':price', $orderProduct->price);
                $stmt->execute();

            }
            $data = ['status' => 1, 'message' => "Orders successfully created"];
        } else {
            $data = ['status' => 0, 'message' => "Failed to create record."];
        }
        echo json_encode($data);
        break;
}
?>
