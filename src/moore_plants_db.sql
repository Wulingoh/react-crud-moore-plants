-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 11, 2022 at 04:06 AM
-- Server version: 8.0.28
-- PHP Version: 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `moore_plants_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `authentication`
--

CREATE TABLE `authentication` (
  `auth_id` int NOT NULL,
  `provider` varchar(100) NOT NULL,
  `unique_id` varchar(100) NOT NULL,
  `user_id` int NOT NULL,
  `access_token` text NOT NULL,
  `secret` text NOT NULL,
  `expires` int NOT NULL,
  `refresh_token` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `care_level`
--

CREATE TABLE `care_level` (
  `care_level_id` int NOT NULL,
  `name` varchar(80) NOT NULL,
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `care_level`
--

INSERT INTO `care_level` (`care_level_id`, `name`, `content`) VALUES
(1, 'Unkillable', ''),
(2, 'Easy to care', ''),
(3, 'Need some love', ''),
(7, 'Test Care ', 'testhl lhalthoei lnlah lhpehlhalhf. oiayoih roihoih oyohlh oyohohtrl oy a ihoyo. yo outo growqg i i gig k. ');

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `cart_id` int NOT NULL,
  `session_id` int NOT NULL,
  `user_id` int NOT NULL,
  `status` int NOT NULL,
  `quantity` int NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cart_products`
--

CREATE TABLE `cart_products` (
  `cart_product_id` int NOT NULL,
  `product_id` int NOT NULL,
  `cart_id` int NOT NULL,
  `price` float NOT NULL,
  `quantity` int NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int NOT NULL,
  `type` varchar(80) NOT NULL,
  `name` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `type`, `name`) VALUES
(1, 'Flowering', 'Flowering Plants'),
(2, 'Ferns', 'Ferns'),
(9, 'Cacti & Succulent', 'Cacti & Succulent'),
(11, 'Hanging & Climbing', 'Hanging & Climbing'),
(12, 'Palm & Trees', 'Palm & Trees'),
(13, 'Bulb', 'Bulb');

-- --------------------------------------------------------

--
-- Table structure for table `gallery_img`
--

CREATE TABLE `gallery_img` (
  `gallery_img_id` int NOT NULL,
  `product_id` int NOT NULL,
  `img` varchar(900) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `title` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `gallery_img`
--

INSERT INTO `gallery_img` (`gallery_img_id`, `product_id`, `img`, `title`, `created_at`, `updated_at`) VALUES
(6, 8, '627b15d57f746.png', NULL, '2022-05-11 01:48:05', '2022-05-11 01:48:05'),
(10, 1, '6296e54b6f4a0.webp', NULL, '2022-06-01 04:04:27', '2022-06-01 04:04:27'),
(11, 1, '6296e550b3272.webp', NULL, '2022-06-01 04:04:32', '2022-06-01 04:04:32'),
(12, 1, '6296e5584f542.webp', NULL, '2022-06-01 04:04:40', '2022-06-01 04:04:40'),
(13, 9, '6296eae04f802.webp', NULL, '2022-06-01 04:28:16', '2022-06-01 04:28:16'),
(14, 9, '6296eae555c4a.webp', NULL, '2022-06-01 04:28:21', '2022-06-01 04:28:21'),
(15, 10, '6296ef071f096.jpeg', NULL, '2022-06-01 04:45:59', '2022-06-01 04:45:59'),
(16, 10, '6296ef0b5d255.jpeg', NULL, '2022-06-01 04:46:03', '2022-06-01 04:46:03'),
(17, 10, '6296ef10382cd.jpeg', NULL, '2022-06-01 04:46:08', '2022-06-01 04:46:08'),
(18, 11, '6296f29005e72.jpeg', NULL, '2022-06-01 05:01:04', '2022-06-01 05:01:04'),
(19, 11, '6296f294344cb.jpeg', NULL, '2022-06-01 05:01:08', '2022-06-01 05:01:08');

-- --------------------------------------------------------

--
-- Table structure for table `humidity`
--

CREATE TABLE `humidity` (
  `humidity_id` int NOT NULL,
  `name` varchar(80) NOT NULL,
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `humidity`
--

INSERT INTO `humidity` (`humidity_id`, `name`, `content`) VALUES
(1, 'Low Humidity - Spray Mist', ''),
(2, 'Humidity - on Gravel ', 'test'),
(3, 'Mild Humidity - use of Bathroom', ''),
(4, 'High Humidity - Glass Container', ''),
(8, 'test', 'test');

-- --------------------------------------------------------

--
-- Table structure for table `lighting_care`
--

CREATE TABLE `lighting_care` (
  `lighting_id` int NOT NULL,
  `name` varchar(80) NOT NULL,
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `lighting_care`
--

INSERT INTO `lighting_care` (`lighting_id`, `name`, `content`) VALUES
(1, 'High Light ', ''),
(2, 'Medium Light ', ''),
(3, 'Low Light', ''),
(5, 'Test Ligting care ', 'tgis hs hflslkflafldh fldshlfhsdfhlihelhfslhlskh flsdhflds '),
(6, 'test2', 'test');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `token` varchar(100) NOT NULL,
  `status` varchar(80) NOT NULL,
  `subtotal` int NOT NULL,
  `tax` int NOT NULL,
  `shipping` int NOT NULL,
  `total` int NOT NULL,
  `name` varchar(80) NOT NULL,
  `email` varchar(80) NOT NULL,
  `mobile` varchar(80) DEFAULT NULL,
  `line_1` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `line_2` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `city` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `postcode` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `country` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `comment` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `user_id`, `token`, `status`, `subtotal`, `tax`, `shipping`, `total`, `name`, `email`, `mobile`, `line_1`, `line_2`, `city`, `postcode`, `country`, `comment`, `created_at`, `updated_at`) VALUES
(1, NULL, '5ece4797eaf5e', 'paid', 38, 6, 5, 49, 'Test Order', 'testOrders@example.com', NULL, 'This is test', 'This is a test 2', 'Nelson', 'Able Tasman', 'New Zealand', 'Send it to me', '2022-05-13 00:04:08', '2022-05-13 04:17:23'),
(2, NULL, '62a32f079a41b', 'Paid', 12, 0, 5, 17, 'John Doe', 'sb-aqbky17060809@personal.example.com', NULL, '123 Sample St', NULL, 'Wellington', 'NZ_zip = 6004', 'NZ', NULL, '2022-06-10 11:46:15', '2022-06-10 11:46:15'),
(3, NULL, '62a3c41f70541', 'Paid', 24, 0, 5, 29, 'John Doe', 'sb-aqbky17060809@personal.example.com', NULL, '123 Sample St', NULL, 'Wellington', 'NZ_zip = 6004', 'NZ', NULL, '2022-06-10 22:22:23', '2022-06-10 22:22:23'),
(4, NULL, '62a3c5d59dd87', 'Paid', 24, 0, 5, 29, 'John Doe', 'sb-aqbky17060809@personal.example.com', NULL, '123 Sample St', NULL, 'Wellington', 'NZ_zip = 6004', 'NZ', NULL, '2022-06-10 22:29:41', '2022-06-10 22:29:41'),
(5, NULL, '62a3cac1326c8', 'Paid', 24, 0, 5, 29, 'John Doe', 'sb-aqbky17060809@personal.example.com', NULL, '123 Sample St', NULL, 'Wellington', 'NZ_zip = 6004', 'NZ', NULL, '2022-06-10 22:50:41', '2022-06-10 22:50:41'),
(6, NULL, '62a3cb1268784', 'Paid', 24, 0, 5, 29, 'John Doe', 'sb-aqbky17060809@personal.example.com', NULL, '123 Sample St', NULL, 'Wellington', 'NZ_zip = 6004', 'NZ', NULL, '2022-06-10 22:52:02', '2022-06-10 22:52:02'),
(7, NULL, '62a3cb9178b03', 'Paid', 24, 0, 5, 29, 'John Doe', 'sb-aqbky17060809@personal.example.com', NULL, '123 Sample St', NULL, 'Wellington', 'NZ_zip = 6004', 'NZ', NULL, '2022-06-10 22:54:09', '2022-06-10 22:54:09'),
(8, NULL, '62a3cbc8d335e', 'Paid', 24, 0, 5, 29, 'John Doe', 'sb-aqbky17060809@personal.example.com', NULL, '123 Sample St', NULL, 'Wellington', '6004', 'NZ', NULL, '2022-06-10 22:55:04', '2022-06-11 03:27:31');

-- --------------------------------------------------------

--
-- Table structure for table `order_products`
--

CREATE TABLE `order_products` (
  `order_product_id` int NOT NULL,
  `product_id` int NOT NULL,
  `order_id` int NOT NULL,
  `price` float DEFAULT NULL,
  `quantity` int NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `order_products`
--

INSERT INTO `order_products` (`order_product_id`, `product_id`, `order_id`, `price`, `quantity`, `created_at`, `updated_at`) VALUES
(1, 1, 8, 12, 1, '2022-06-10 22:55:04', '2022-06-10 22:55:04'),
(2, 3, 8, 12, 1, '2022-06-10 22:55:05', '2022-06-10 22:55:05');

-- --------------------------------------------------------

--
-- Table structure for table `payment_info`
--

CREATE TABLE `payment_info` (
  `payment_info_id` int NOT NULL,
  `order_id` int NOT NULL,
  `payment_type` smallint NOT NULL DEFAULT '0',
  `payment_amount` decimal(10,0) NOT NULL,
  `payment_status` smallint NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int NOT NULL,
  `category_id` int NOT NULL,
  `type` varchar(80) NOT NULL,
  `img` varchar(80) NOT NULL,
  `title` varchar(80) NOT NULL,
  `name` varchar(80) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `quantity` int NOT NULL,
  `color` varchar(80) NOT NULL,
  `height` int NOT NULL,
  `latin_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `lighting_care_id` int NOT NULL,
  `care_level_id` int NOT NULL,
  `watering_id` int NOT NULL,
  `humidity_id` int NOT NULL,
  `room_type` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `size` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `pot_material` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `facts` json DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `category_id`, `type`, `img`, `title`, `name`, `price`, `quantity`, `color`, `height`, `latin_name`, `lighting_care_id`, `care_level_id`, `watering_id`, `humidity_id`, `room_type`, `size`, `pot_material`, `content`, `created_at`, `updated_at`, `facts`) VALUES
(1, 1, 'Plant', '6296e329b01fb.webp', 'Flamingo flower', 'Flamingo flower', '12', 2, 'test', 25, 'Anthurium', 2, 2, 3, 3, 'Bathroom', '', '', 'Generally found in the wild across the warmest parts of South America and the Caribbean, the anthurium is one of the most striking houseplants. The vivid red part is not actually its flower, but a spathe. We won’t overdo the science bit, but essentially a spathe is a brightly-colored leaf that attracts insects. The flowers are tiny little things on the spike in the middle of the spathe. \n\nA useful way to think about how to care for your plant is to consider where it comes from. Anthurium adreanum lives in rainforests, either in the branches of larger trees or on the ground beneath them. That means it’s used to getting dappled light, rather than direct sun, and regularly getting soaked by rainfall.\n\nIn a home, that means giving it indirect light and making sure its soil is kept lightly moist. You\'ll help it grow, and encourage flowers, by feeding it with liquid fertilizer once per month in spring and summer.', '2022-05-02 04:58:37', '2022-06-07 21:57:52', '[]'),
(3, 1, 'Plant', '6293ff4b833fa.png', 'test', 'test', '12', 21, 'bleu', 12, NULL, 2, 2, 2, 2, NULL, NULL, NULL, NULL, '2022-05-07 21:42:32', '2022-05-30 11:18:35', NULL),
(8, 9, 'Pot', '627a039714397.png', 'fsddsfsd', 'sfdsfsdf', '112', 23, 'dasd', 12, NULL, 3, 3, 1, 2, NULL, NULL, NULL, NULL, '2022-05-10 18:17:59', '2022-05-10 18:17:59', NULL),
(9, 1, 'Plant', '6296ead17a4da.webp', 'Dianthus', 'Dianthus ', '20', 3, 'Red', 10, 'Dianthus', 1, 3, 1, 4, 'Sunny Spot', NULL, NULL, 'Diana might be a familiar face - this super popular flower is an English garden classic, renowned for her pretty, ruffled flowers and delicious clove-like scent. She was also adored by the ancient Greeks and Romans, who used her as decor in their homes; in fact, her botanical name - \'dianthus\' - means \'flower of love\' or \'flower of the gods\' in ancient Greek.\n\nAccording to the Christians, though, her history stretches even further back - they believe that Diana first bloomed when Mary wept for Jesus. True or not, she clearly occupies a special place in our hearts - and with her happy little pink-ombre blooms, it\'s not hard to see why.', '2022-06-01 16:28:01', '2022-06-01 16:28:01', NULL),
(10, 1, 'Plant', '6296eefc88ae2.jpeg', 'Poison Primrose', 'Poison Primrose', '12', 3, 'Red', 25, 'Primula Obconica', 2, 2, 2, 3, 'Kitchen', NULL, NULL, 'It\'s easy to see why this species and others within the primula genus have become popular plants to display during winter and early spring. While many other plants are taking their winter rest, the obconica is in full bloom and bringing color in to homes.\n\nFairly cool conditions and the need for light, but not direct sunlight - makes them easy enough to grow indoors during winter. This tender perennial can be kept in a cool place after flowers have faded to encourage a bloom for the following year or they can be cut back and placed outside in a shaded spot then returned inside before winter (they may or may not survive or flower again).', '2022-06-01 16:45:48', '2022-06-01 16:45:48', NULL),
(11, 1, 'Plant', '6296f2867b72d.jpeg', 'Corsage Orchid', 'Corsage Orchid', '25', 3, 'Yellow', 20, 'Cattleya Orchid', 2, 3, 3, 4, 'Kitchen', NULL, NULL, 'This attractive species is native to Central and South America. It likes warm temperatures and medium light. At home it will be best kept on a windowsill on either southern, eastern or western side.\n\nFlowering: The corsage orchid has the largest flowers of up to 5 inches across. They also come in all colors and will make your home not only look more alive, but thanks to its strong fragrance it will make it smell wonderful.\n\nCattleya Orchid tends to bloom once a year and the flowers last 2-3 weeks. However, nowadays some of the hybrids last 5-6 weeks.\n\nIn order for them to bloom they need direct sun (filtered) and cool evenings. Temperature of 55 degrees usually starts off the flowering cycle.', '2022-06-01 17:00:54', '2022-06-08 11:31:25', '[{\"title\": \"Botanical name\", \"description\": \"Sansevieria trifasciata\"}, {\"title\": \"Pet/baby safe?\", \"description\": \"Mildly toxic if ingested\"}, {\"title\": \"Air purifying?\", \"description\": \"Yes\"}]'),
(12, 2, 'Plant', '62a26dfa20051.webp', 'Test Quick', 'Test Quick', '23', 3, 'Blue', 10, 'Test Quick', 2, 1, 2, 1, 'Kitchen', NULL, NULL, 'Test Quick Fact', '2022-06-10 10:02:34', '2022-06-10 10:02:34', '[{\"title\": \"Test Fact\", \"description\": \"Test Fact\"}, {\"title\": \"Test Again\", \"description\": \"Test fact description\"}]');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int NOT NULL,
  `name` varchar(80) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password_hash` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `role` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `name`, `email`, `password_hash`, `role`) VALUES
(1, 'Lin Tillman', 'taifen_g@yahoo.com', NULL, 'Admin'),
(9, 'testSignUP', 'signup@example.com', '$2y$10$jLUUQo/xQGMucnFxo6oPUeiuIXwuUdoT5Exdz/8B/zaipYcvAGKYy', 'Admin'),
(16, 'TestName', 'testName@example.com', '$2y$10$ZOaW7OlfgWO7Dvay3w6qoeDHOWHfERTjjJLLYXwV49uprtAFPm/WS', 'customer');

-- --------------------------------------------------------

--
-- Table structure for table `watering`
--

CREATE TABLE `watering` (
  `watering_id` int NOT NULL,
  `name` varchar(80) NOT NULL,
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `watering`
--

INSERT INTO `watering` (`watering_id`, `name`, `content`) VALUES
(1, 'Frequent Watering', ''),
(2, 'Regular Watering', ''),
(3, 'Light Watering', ''),
(4, 'Test Watering ', 'Watering content update');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `authentication`
--
ALTER TABLE `authentication`
  ADD PRIMARY KEY (`auth_id`),
  ADD UNIQUE KEY `idx_auth_user_provider_id` (`user_id`,`provider`);

--
-- Indexes for table `care_level`
--
ALTER TABLE `care_level`
  ADD PRIMARY KEY (`care_level_id`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`cart_id`),
  ADD UNIQUE KEY `unique_cart_user_id` (`user_id`) USING BTREE;

--
-- Indexes for table `cart_products`
--
ALTER TABLE `cart_products`
  ADD PRIMARY KEY (`cart_product_id`),
  ADD UNIQUE KEY `idx_cart_product_id` (`cart_product_id`,`product_id`),
  ADD KEY `fk_cart_product_product_id` (`product_id`),
  ADD KEY `fk_cart_product_cart_id` (`cart_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`),
  ADD UNIQUE KEY `unique_category_name` (`name`);

--
-- Indexes for table `gallery_img`
--
ALTER TABLE `gallery_img`
  ADD PRIMARY KEY (`gallery_img_id`),
  ADD KEY `product_id_gallery_fk` (`product_id`);

--
-- Indexes for table `humidity`
--
ALTER TABLE `humidity`
  ADD PRIMARY KEY (`humidity_id`);

--
-- Indexes for table `lighting_care`
--
ALTER TABLE `lighting_care`
  ADD PRIMARY KEY (`lighting_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `fk_user_id_orders` (`user_id`);

--
-- Indexes for table `order_products`
--
ALTER TABLE `order_products`
  ADD PRIMARY KEY (`order_product_id`),
  ADD UNIQUE KEY `idx_order_id_and_product_id` (`order_id`,`product_id`) USING BTREE,
  ADD KEY `fk_order_product_products` (`product_id`);

--
-- Indexes for table `payment_info`
--
ALTER TABLE `payment_info`
  ADD PRIMARY KEY (`payment_info_id`),
  ADD UNIQUE KEY `idx_payment_order` (`order_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD UNIQUE KEY `unique_product_name` (`name`),
  ADD KEY `fk_product_category` (`category_id`),
  ADD KEY `fk_product_humidity` (`humidity_id`),
  ADD KEY `fk_product_lighting` (`lighting_care_id`),
  ADD KEY `fk_product_care` (`care_level_id`),
  ADD KEY `fk_product_watering` (`watering_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `uq_email` (`email`);

--
-- Indexes for table `watering`
--
ALTER TABLE `watering`
  ADD PRIMARY KEY (`watering_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `authentication`
--
ALTER TABLE `authentication`
  MODIFY `auth_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `care_level`
--
ALTER TABLE `care_level`
  MODIFY `care_level_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `cart_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cart_products`
--
ALTER TABLE `cart_products`
  MODIFY `cart_product_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `gallery_img`
--
ALTER TABLE `gallery_img`
  MODIFY `gallery_img_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `humidity`
--
ALTER TABLE `humidity`
  MODIFY `humidity_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `lighting_care`
--
ALTER TABLE `lighting_care`
  MODIFY `lighting_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `order_products`
--
ALTER TABLE `order_products`
  MODIFY `order_product_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `payment_info`
--
ALTER TABLE `payment_info`
  MODIFY `payment_info_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `watering`
--
ALTER TABLE `watering`
  MODIFY `watering_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `authentication`
--
ALTER TABLE `authentication`
  ADD CONSTRAINT `fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `fk_cart_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `cart_products`
--
ALTER TABLE `cart_products`
  ADD CONSTRAINT `fk_cart_product_cart_id` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`cart_id`),
  ADD CONSTRAINT `fk_cart_product_product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Constraints for table `gallery_img`
--
ALTER TABLE `gallery_img`
  ADD CONSTRAINT `product_id_gallery_fk` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `fk_user_id_orders` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `order_products`
--
ALTER TABLE `order_products`
  ADD CONSTRAINT `fk_order_product_order` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  ADD CONSTRAINT `fk_order_product_products` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `payment_info`
--
ALTER TABLE `payment_info`
  ADD CONSTRAINT `fk_order_payment_info` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_product_care` FOREIGN KEY (`care_level_id`) REFERENCES `care_level` (`care_level_id`),
  ADD CONSTRAINT `fk_product_category` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`),
  ADD CONSTRAINT `fk_product_humidity` FOREIGN KEY (`humidity_id`) REFERENCES `humidity` (`humidity_id`),
  ADD CONSTRAINT `fk_product_lighting` FOREIGN KEY (`lighting_care_id`) REFERENCES `lighting_care` (`lighting_id`),
  ADD CONSTRAINT `fk_product_watering` FOREIGN KEY (`watering_id`) REFERENCES `watering` (`watering_id`);
COMMIT;
