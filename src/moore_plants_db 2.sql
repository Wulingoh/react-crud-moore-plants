-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 22, 2022 at 08:51 AM
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `care_level`
--

CREATE TABLE `care_level` (
  `care_level_id` int NOT NULL,
  `name` varchar(80) NOT NULL,
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `care_level`
--

INSERT INTO `care_level` (`care_level_id`, `name`, `content`) VALUES
(1, 'Unkillable', ''),
(2, 'Easy to care', ''),
(3, 'Need some love', '');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int NOT NULL,
  `type` varchar(80) NOT NULL,
  `name` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
  `img` varchar(900) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `gallery_img`
--

INSERT INTO `gallery_img` (`gallery_img_id`, `product_id`, `img`, `title`, `created_at`, `updated_at`) VALUES
(10, 1, '6296e54b6f4a0.webp', NULL, '2022-06-01 04:04:27', '2022-06-01 04:04:27'),
(11, 1, '6296e550b3272.webp', NULL, '2022-06-01 04:04:32', '2022-06-01 04:04:32'),
(12, 1, '6296e5584f542.webp', NULL, '2022-06-01 04:04:40', '2022-06-01 04:04:40'),
(20, 13, '62a6646be3c77.webp', NULL, '2022-06-12 22:10:51', '2022-06-12 22:10:51'),
(21, 13, '62a6647031312.webp', NULL, '2022-06-12 22:10:56', '2022-06-12 22:10:56'),
(22, 13, '62a66475b1f01.webp', NULL, '2022-06-12 22:11:01', '2022-06-12 22:11:01'),
(23, 11, '62a66971e2aa9.png', NULL, '2022-06-12 22:32:17', '2022-06-12 22:32:17'),
(24, 11, '62a669761bd17.png', NULL, '2022-06-12 22:32:22', '2022-06-12 22:32:22'),
(25, 11, '62a6697a55bb9.png', NULL, '2022-06-12 22:32:26', '2022-06-12 22:32:26'),
(26, 11, '62a6697dcd683.png', NULL, '2022-06-12 22:32:29', '2022-06-12 22:32:29'),
(27, 9, '62a66c69eecd2.png', NULL, '2022-06-12 22:44:57', '2022-06-12 22:44:57'),
(28, 9, '62a66c7436d60.png', NULL, '2022-06-12 22:45:08', '2022-06-12 22:45:08'),
(29, 9, '62a66c78c2bf0.png', NULL, '2022-06-12 22:45:12', '2022-06-12 22:45:12'),
(30, 10, '62a6785f6ba61.png', NULL, '2022-06-12 23:35:59', '2022-06-12 23:35:59'),
(31, 10, '62a678642edd4.png', NULL, '2022-06-12 23:36:04', '2022-06-12 23:36:04'),
(32, 10, '62a67868e2c78.png', NULL, '2022-06-12 23:36:08', '2022-06-12 23:36:08'),
(33, 14, '62a67b3c0c738.webp', NULL, '2022-06-12 23:48:12', '2022-06-12 23:48:12'),
(34, 14, '62a67b414237b.webp', NULL, '2022-06-12 23:48:17', '2022-06-12 23:48:17'),
(35, 14, '62a67b44bdd5a.webp', NULL, '2022-06-12 23:48:20', '2022-06-12 23:48:20'),
(36, 14, '62a67b48681e5.webp', NULL, '2022-06-12 23:48:24', '2022-06-12 23:48:24'),
(37, 15, '62a693acdec2b.png', NULL, '2022-06-13 01:32:28', '2022-06-13 01:32:28'),
(38, 15, '62a693b1c1186.png', NULL, '2022-06-13 01:32:33', '2022-06-13 01:32:33'),
(39, 15, '62a693b73713b.png', NULL, '2022-06-13 01:32:39', '2022-06-13 01:32:39'),
(40, 15, '62a693bcef431.png', NULL, '2022-06-13 01:32:45', '2022-06-13 01:32:45'),
(41, 15, '62a693c224543.png', NULL, '2022-06-13 01:32:50', '2022-06-13 01:32:50'),
(42, 16, '62a69849814e9.png', NULL, '2022-06-13 01:52:09', '2022-06-13 01:52:09'),
(43, 16, '62a6984eb0440.png', NULL, '2022-06-13 01:52:14', '2022-06-13 01:52:14'),
(44, 16, '62a69860c56ae.png', NULL, '2022-06-13 01:52:32', '2022-06-13 01:52:32'),
(45, 16, '62a69866b43cf.png', NULL, '2022-06-13 01:52:38', '2022-06-13 01:52:38'),
(46, 16, '62a698893276c.png', NULL, '2022-06-13 01:53:13', '2022-06-13 01:53:13'),
(47, 16, '62a6988e1f47b.png', NULL, '2022-06-13 01:53:18', '2022-06-13 01:53:18'),
(48, 17, '62a69b983a6aa.png', NULL, '2022-06-13 02:06:16', '2022-06-13 02:06:16'),
(49, 17, '62a69b9c3af21.png', NULL, '2022-06-13 02:06:20', '2022-06-13 02:06:20'),
(50, 17, '62a69ba131c15.png', NULL, '2022-06-13 02:06:25', '2022-06-13 02:06:25'),
(51, 17, '62a69ba5c0b35.png', NULL, '2022-06-13 02:06:29', '2022-06-13 02:06:29'),
(52, 17, '62a69ba99dc1e.png', NULL, '2022-06-13 02:06:33', '2022-06-13 02:06:33'),
(53, 17, '62a69bad8ffad.png', NULL, '2022-06-13 02:06:37', '2022-06-13 02:06:37'),
(54, 18, '62a69e35961f0.webp', NULL, '2022-06-13 02:17:25', '2022-06-13 02:17:25'),
(55, 18, '62a69e3a3cc93.webp', NULL, '2022-06-13 02:17:30', '2022-06-13 02:17:30'),
(56, 18, '62a69e3e45183.webp', NULL, '2022-06-13 02:17:34', '2022-06-13 02:17:34'),
(57, 18, '62a69e41b7150.webp', NULL, '2022-06-13 02:17:37', '2022-06-13 02:17:37'),
(58, 19, '62a6a28a3105d.png', NULL, '2022-06-13 02:35:54', '2022-06-13 02:35:54'),
(59, 19, '62a6a290a5c31.png', NULL, '2022-06-13 02:36:00', '2022-06-13 02:36:00'),
(60, 19, '62a6a294c4539.png', NULL, '2022-06-13 02:36:04', '2022-06-13 02:36:04'),
(61, 19, '62a6a2990c8dc.png', NULL, '2022-06-13 02:36:09', '2022-06-13 02:36:09'),
(62, 19, '62a6a29cec519.png', NULL, '2022-06-13 02:36:12', '2022-06-13 02:36:12'),
(63, 19, '62a6a2a0ed711.png', NULL, '2022-06-13 02:36:16', '2022-06-13 02:36:16'),
(64, 20, '62a6a5fac770c.png', NULL, '2022-06-13 02:50:34', '2022-06-13 02:50:34'),
(65, 20, '62a6a5ff76d13.png', NULL, '2022-06-13 02:50:39', '2022-06-13 02:50:39'),
(66, 20, '62a6a60395a54.png', NULL, '2022-06-13 02:50:43', '2022-06-13 02:50:43'),
(67, 20, '62a6a60d2ac04.png', NULL, '2022-06-13 02:50:53', '2022-06-13 02:50:53'),
(68, 20, '62a6a611600d9.png', NULL, '2022-06-13 02:50:57', '2022-06-13 02:50:57'),
(69, 20, '62a6a61668363.png', NULL, '2022-06-13 02:51:02', '2022-06-13 02:51:02'),
(70, 21, '62a6c3404fec2.png', NULL, '2022-06-13 04:55:28', '2022-06-13 04:55:28'),
(71, 21, '62a6c34404033.png', NULL, '2022-06-13 04:55:32', '2022-06-13 04:55:32'),
(72, 21, '62a6c347d7eca.png', NULL, '2022-06-13 04:55:35', '2022-06-13 04:55:35'),
(73, 21, '62a6c34b6dec5.png', NULL, '2022-06-13 04:55:39', '2022-06-13 04:55:39'),
(74, 21, '62a6c34ef07a6.png', NULL, '2022-06-13 04:55:43', '2022-06-13 04:55:43'),
(75, 21, '62a6c3527bcf5.png', NULL, '2022-06-13 04:55:46', '2022-06-13 04:55:46'),
(76, 22, '62a6d17764a07.png', NULL, '2022-06-13 05:56:07', '2022-06-13 05:56:07'),
(77, 22, '62a6d17ba2aff.png', NULL, '2022-06-13 05:56:11', '2022-06-13 05:56:11'),
(78, 22, '62a6d180488a8.png', NULL, '2022-06-13 05:56:16', '2022-06-13 05:56:16'),
(79, 22, '62a6d185b852a.png', NULL, '2022-06-13 05:56:21', '2022-06-13 05:56:21'),
(80, 22, '62a6d18cdfbde.png', NULL, '2022-06-13 05:56:28', '2022-06-13 05:56:28'),
(81, 22, '62a6d190f0526.png', NULL, '2022-06-13 05:56:32', '2022-06-13 05:56:32'),
(82, 23, '62a6d54ce6eb4.png', NULL, '2022-06-13 06:12:28', '2022-06-13 06:12:28'),
(83, 23, '62a6d55244249.png', NULL, '2022-06-13 06:12:34', '2022-06-13 06:12:34'),
(84, 23, '62a6d556ba29d.png', NULL, '2022-06-13 06:12:38', '2022-06-13 06:12:38'),
(85, 23, '62a6d55c74353.png', NULL, '2022-06-13 06:12:44', '2022-06-13 06:12:44'),
(86, 23, '62a6d56075e3b.png', NULL, '2022-06-13 06:12:48', '2022-06-13 06:12:48'),
(87, 24, '62a6d8901f794.png', NULL, '2022-06-13 06:26:24', '2022-06-13 06:26:24'),
(88, 24, '62a6d8952aea3.png', NULL, '2022-06-13 06:26:29', '2022-06-13 06:26:29'),
(89, 24, '62a6d89c3222c.png', NULL, '2022-06-13 06:26:36', '2022-06-13 06:26:36'),
(90, 24, '62a6d8a1ccbdf.png', NULL, '2022-06-13 06:26:41', '2022-06-13 06:26:41'),
(91, 24, '62a6d8a61f8e5.png', NULL, '2022-06-13 06:26:46', '2022-06-13 06:26:46'),
(92, 24, '62a6d8a9d74cb.png', NULL, '2022-06-13 06:26:49', '2022-06-13 06:26:49'),
(93, 26, '62a715c0ab382.png', NULL, '2022-06-13 10:47:28', '2022-06-13 10:47:28'),
(94, 26, '62a715c5ce1a1.png', NULL, '2022-06-13 10:47:33', '2022-06-13 10:47:33'),
(95, 26, '62a715cbeb851.png', NULL, '2022-06-13 10:47:39', '2022-06-13 10:47:39'),
(96, 26, '62a715d1843de.png', NULL, '2022-06-13 10:47:45', '2022-06-13 10:47:45'),
(97, 26, '62a715d606e93.png', NULL, '2022-06-13 10:47:50', '2022-06-13 10:47:50'),
(98, 27, '62a71f65b1577.png', NULL, '2022-06-13 11:28:37', '2022-06-13 11:28:37'),
(99, 27, '62a71f697b28b.png', NULL, '2022-06-13 11:28:41', '2022-06-13 11:28:41'),
(100, 27, '62a71f6d69291.png', NULL, '2022-06-13 11:28:45', '2022-06-13 11:28:45'),
(101, 27, '62a71f70c7e77.png', NULL, '2022-06-13 11:28:48', '2022-06-13 11:28:48'),
(102, 27, '62a71f7477694.png', NULL, '2022-06-13 11:28:52', '2022-06-13 11:28:52'),
(103, 27, '62a71f7864d79.png', NULL, '2022-06-13 11:28:56', '2022-06-13 11:28:56'),
(104, 28, '62a7af723d0b0.png', NULL, '2022-06-13 21:43:14', '2022-06-13 21:43:14'),
(105, 28, '62a7af763de07.png', NULL, '2022-06-13 21:43:18', '2022-06-13 21:43:18'),
(106, 28, '62a7af7f8ec65.png', NULL, '2022-06-13 21:43:27', '2022-06-13 21:43:27'),
(107, 28, '62a7af83ad06a.png', NULL, '2022-06-13 21:43:31', '2022-06-13 21:43:31'),
(108, 28, '62a7af8726ae5.png', NULL, '2022-06-13 21:43:35', '2022-06-13 21:43:35'),
(109, 28, '62a7af8b4c88c.png', NULL, '2022-06-13 21:43:39', '2022-06-13 21:43:39'),
(110, 29, '62a7b1e376349.png', NULL, '2022-06-13 21:53:39', '2022-06-13 21:53:39'),
(111, 29, '62a7b1e7ad18f.png', NULL, '2022-06-13 21:53:43', '2022-06-13 21:53:43'),
(112, 29, '62a7b1eb64736.png', NULL, '2022-06-13 21:53:47', '2022-06-13 21:53:47'),
(113, 29, '62a7b1ef5d9e7.png', NULL, '2022-06-13 21:53:51', '2022-06-13 21:53:51'),
(114, 29, '62a7b1f2cd0bb.png', NULL, '2022-06-13 21:53:54', '2022-06-13 21:53:54');

-- --------------------------------------------------------

--
-- Table structure for table `humidity`
--

CREATE TABLE `humidity` (
  `humidity_id` int NOT NULL,
  `name` varchar(80) NOT NULL,
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `humidity`
--

INSERT INTO `humidity` (`humidity_id`, `name`, `content`) VALUES
(1, 'Low Humidity - Spray Mist', ''),
(2, 'Humidity - on Gravel ', 'test'),
(3, 'Mild Humidity - use of Bathroom', ''),
(4, 'High Humidity - Glass Container', '');

-- --------------------------------------------------------

--
-- Table structure for table `lighting_care`
--

CREATE TABLE `lighting_care` (
  `lighting_id` int NOT NULL,
  `name` varchar(80) NOT NULL,
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
  `line_1` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `line_2` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `postcode` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `comment` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `user_id`, `token`, `status`, `subtotal`, `tax`, `shipping`, `total`, `name`, `email`, `mobile`, `line_1`, `line_2`, `city`, `postcode`, `country`, `comment`, `created_at`, `updated_at`) VALUES
(11, NULL, '62a4619cd3663', 'Paid', 25, 0, 5, 30, 'John Doe', 'sb-aqbky17060809@personal.example.com', NULL, '123 Sample St', NULL, 'Wellington', NULL, 'NZ', NULL, '2022-06-11 09:34:20', '2022-06-11 09:34:20'),
(12, NULL, '62a82c2f7750a', 'Paid', 40, 0, 5, 45, 'John Doe', 'sb-aqbky17060809@personal.example.com', NULL, '123 Sample St', NULL, 'Wellington', NULL, 'NZ', NULL, '2022-06-14 06:35:27', '2022-06-14 06:35:27'),
(13, NULL, '62a82ca27a041', 'Paid', 30, 0, 5, 35, 'John Doe', 'sb-aqbky17060809@personal.example.com', NULL, '123 Sample St', NULL, 'Wellington', NULL, 'NZ', NULL, '2022-06-14 06:37:22', '2022-06-14 06:37:22'),
(14, NULL, '62a82e4f109cb', 'Paid', 60, 0, 5, 65, 'John Doe', 'sb-aqbky17060809@personal.example.com', NULL, '123 Sample St', NULL, 'Wellington', NULL, 'NZ', NULL, '2022-06-14 06:44:31', '2022-06-14 06:44:31'),
(15, NULL, '62a82ea830415', 'Paid', 30, 0, 5, 35, 'John Doe', 'sb-aqbky17060809@personal.example.com', NULL, '123 Sample St', NULL, 'Wellington', NULL, 'NZ', NULL, '2022-06-14 06:46:00', '2022-06-14 06:46:00'),
(16, NULL, '62a835df24b27', 'Paid', 60, 0, 5, 65, 'John Doe', 'sb-aqbky17060809@personal.example.com', NULL, '123 Sample St', NULL, 'Wellington', NULL, 'NZ', NULL, '2022-06-14 07:16:47', '2022-06-14 07:16:47'),
(17, NULL, '62abb4aa3d236', 'Cash on Pick Up', 20, 0, 5, 25, 'testSignUP', 'signup@example.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-06-16 22:54:34', '2022-06-16 22:54:34'),
(18, NULL, '62abb62b05de2', 'Cash', 20, 0, 5, 25, 'testSignUP', 'signup@example.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-06-16 23:00:59', '2022-06-16 23:00:59'),
(19, NULL, '62abb69825139', 'Cash', 40, 0, 0, 45, 'testSignUP', 'signup@example.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-06-16 23:02:48', '2022-06-16 23:02:48'),
(20, NULL, '62abdf379cd6f', 'Cash', 10, 0, 0, 10, 'testSignUP', 'signup@example.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-06-17 01:56:07', '2022-06-17 01:56:07'),
(21, NULL, '62abe474e9717', 'Cash', 20, 0, 0, 20, 'testSignUP', 'signup@example.com', NULL, NULL, NULL, NULL, NULL, NULL, 'werw\nwer\nw\ner\nw\ner\nwe\nrwer', '2022-06-17 02:18:28', '2022-06-19 10:58:56'),
(22, NULL, '62abeb8144248', 'Paid', 40, 0, 5, 45, 'John Doe', 'sb-aqbky17060809@personal.example.com', NULL, '123 Sample St', NULL, 'Wellington', NULL, 'NZ', NULL, '2022-06-17 02:48:33', '2022-06-19 10:56:07'),
(23, 9, '62af9cf67c9a7', 'Paid', 20, 0, 0, 20, 'John Doe', 'sb-aqbky17060809@personal.example.com', NULL, '123 Sample St', NULL, 'Wellington', NULL, 'NZ', NULL, '2022-06-19 22:02:30', '2022-06-19 22:02:30'),
(24, 9, '62af9d3603830', 'Paid', 25, 0, 0, 25, 'testSignUP', 'signup@example.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-06-19 22:03:34', '2022-06-19 22:04:29'),
(25, 16, '62b2c9c67c8da', 'Paid', 85, 0, 5, 90, 'John Doe', 'sb-aqbky17060809@personal.example.com', NULL, '123 Sample St', NULL, 'Wellington', NULL, 'NZ', NULL, '2022-06-22 07:50:30', '2022-06-22 07:50:30');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_products`
--

INSERT INTO `order_products` (`order_product_id`, `product_id`, `order_id`, `price`, `quantity`, `created_at`, `updated_at`) VALUES
(9, 11, 11, 25, 1, '2022-06-11 09:34:20', '2022-06-11 09:34:20'),
(10, 17, 12, 30, 1, '2022-06-14 06:35:27', '2022-06-14 06:35:27'),
(11, 13, 12, 10, 1, '2022-06-14 06:35:27', '2022-06-14 06:35:27'),
(12, 17, 13, 30, 1, '2022-06-14 06:37:22', '2022-06-14 06:37:22'),
(13, 17, 14, 30, 2, '2022-06-14 06:44:31', '2022-06-14 06:44:31'),
(14, 17, 15, 30, 1, '2022-06-14 06:46:00', '2022-06-14 06:46:00'),
(15, 17, 16, 30, 2, '2022-06-14 07:16:47', '2022-06-14 07:16:47'),
(16, 28, 17, 20, 1, '2022-06-16 22:54:34', '2022-06-16 22:54:34'),
(17, 28, 18, 20, 1, '2022-06-16 23:00:59', '2022-06-16 23:00:59'),
(18, 24, 19, 40, 1, '2022-06-16 23:02:48', '2022-06-16 23:02:48'),
(19, 13, 20, 10, 1, '2022-06-17 01:56:07', '2022-06-17 01:56:07'),
(20, 9, 21, 20, 1, '2022-06-17 02:18:29', '2022-06-17 02:18:29'),
(21, 24, 22, 40, 1, '2022-06-17 02:48:33', '2022-06-17 02:48:33'),
(22, 19, 23, 20, 1, '2022-06-19 22:02:30', '2022-06-19 22:02:30'),
(23, 11, 24, 25, 1, '2022-06-19 22:03:34', '2022-06-19 22:03:34'),
(24, 24, 25, 40, 1, '2022-06-22 07:50:30', '2022-06-22 07:50:30'),
(25, 13, 25, 10, 1, '2022-06-22 07:50:30', '2022-06-22 07:50:30'),
(26, 27, 25, 35, 1, '2022-06-22 07:50:30', '2022-06-22 07:50:30');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int NOT NULL,
  `category_id` int DEFAULT NULL,
  `type` varchar(80) NOT NULL,
  `img` varchar(80) NOT NULL,
  `title` varchar(80) NOT NULL,
  `name` varchar(80) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `quantity` int NOT NULL,
  `color` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `height` int DEFAULT NULL,
  `latin_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lighting_care_id` int DEFAULT NULL,
  `care_level_id` int DEFAULT NULL,
  `watering_id` int DEFAULT NULL,
  `humidity_id` int DEFAULT NULL,
  `room_type` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `size` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pot_material` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `facts` json DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `category_id`, `type`, `img`, `title`, `name`, `price`, `quantity`, `color`, `height`, `latin_name`, `lighting_care_id`, `care_level_id`, `watering_id`, `humidity_id`, `room_type`, `size`, `pot_material`, `content`, `created_at`, `updated_at`, `facts`, `deleted_at`) VALUES
(1, 1, 'Plant', '6296e329b01fb.webp', 'Flamingo flower', 'Flamingo flower', '12', 2, 'test', 25, 'Anthurium', 2, 2, 3, 3, 'Bathroom', '', '', 'Generally found in the wild across the warmest parts of South America and the Caribbean, the anthurium is one of the most striking houseplants. The vivid red part is not actually its flower, but a spathe. We won’t overdo the science bit, but essentially a spathe is a brightly-colored leaf that attracts insects. The flowers are tiny little things on the spike in the middle of the spathe. \n\nA useful way to think about how to care for your plant is to consider where it comes from. Anthurium adreanum lives in rainforests, either in the branches of larger trees or on the ground beneath them. That means it’s used to getting dappled light, rather than direct sun, and regularly getting soaked by rainfall.\n\nIn a home, that means giving it indirect light and making sure its soil is kept lightly moist. You\'ll help it grow, and encourage flowers, by feeding it with liquid fertilizer once per month in spring and summer.', '2022-05-02 04:58:37', '2022-06-07 21:57:52', '[]', NULL),
(3, 1, 'Plant', '6293ff4b833fa.png', 'test', 'test', '12', 21, 'bleu', 12, NULL, 2, 2, 2, 2, NULL, NULL, NULL, NULL, '2022-05-07 21:42:32', '2022-05-30 11:18:35', NULL, '2022-06-13 11:14:39'),
(9, 1, 'Plant', '62a66c50b7333.png', 'Dianthus', 'Dianthus ', '20', 2, 'Red', 10, 'Dianthus', 1, 3, 1, 4, 'Sunny Spot', NULL, NULL, 'Diana might be a familiar face - this super popular flower is an English garden classic, renowned for her pretty, ruffled flowers and delicious clove-like scent. She was also adored by the ancient Greeks and Romans, who used her as decor in their homes; in fact, her botanical name - \'dianthus\' - means \'flower of love\' or \'flower of the gods\' in ancient Greek.\n\nAccording to the Christians, though, her history stretches even further back - they believe that Diana first bloomed when Mary wept for Jesus. True or not, she clearly occupies a special place in our hearts - and with her happy little pink-ombre blooms, it\'s not hard to see why.', '2022-06-01 16:28:01', '2022-06-13 10:44:32', '[{\"title\": \"Toxicity\", \"description\": \"Toxic to pets\"}, {\"title\": \"Plant type\", \"description\": \"Evergreen Perennial\"}, {\"title\": \"Nickname\", \"description\": \"Sweet William\"}]', NULL),
(10, 1, 'Plant', '62a6784f864ef.png', 'Poison Primrose', 'Poison Primrose', '12', 3, 'Red', 25, 'Primula Obconica', 2, 2, 2, 3, 'Kitchen', NULL, NULL, 'It\'s easy to see why this species and others within the primula genus have become popular plants to display during winter and early spring. While many other plants are taking their winter rest, the obconica is in full bloom and bringing color in to homes.\n\nFairly cool conditions and the need for light, but not direct sunlight - makes them easy enough to grow indoors during winter. This tender perennial can be kept in a cool place after flowers have faded to encourage a bloom for the following year or they can be cut back and placed outside in a shaded spot then returned inside before winter (they may or may not survive or flower again).', '2022-06-01 16:45:48', '2022-06-13 11:35:43', '[{\"title\": \"Origin\", \"description\": \"China\"}, {\"title\": \"Toxicity\", \"description\": \"Toxic to cats and dogs\"}, {\"title\": \"Max-Growth\", \"description\": \"30cm\"}]', NULL),
(11, 1, 'Plant', '62a6717d0c901.png', 'Corsage Orchid', 'Corsage Orchid', '25', 2, 'Yellow', 20, 'Cattleya Orchid', 2, 3, 3, 4, 'Kitchen', NULL, NULL, 'This attractive species is native to Central and South America. It likes warm temperatures and medium light. At home it will be best kept on a windowsill on either southern, eastern or western side.\n\nFlowering: The corsage orchid has the largest flowers of up to 5 inches across. They also come in all colors and will make your home not only look more alive, but thanks to its strong fragrance it will make it smell wonderful.\n\nCattleya Orchid tends to bloom once a year and the flowers last 2-3 weeks. However, nowadays some of the hybrids last 5-6 weeks.\n\nIn order for them to bloom they need direct sun (filtered) and cool evenings. Temperature of 55 degrees usually starts off the flowering cycle.', '2022-06-01 17:00:54', '2022-06-13 11:06:37', '[{\"title\": \"Botanical name\", \"description\": \"Sansevieria trifasciata\"}, {\"title\": \"Pet/baby safe?\", \"description\": \"Mildly toxic if ingested\"}, {\"title\": \"Air purifying?\", \"description\": \"Yes\"}]', NULL),
(13, 9, 'Plant', '62a6644293651.webp', 'Bunny Ear Cactus', 'Bunny Ear Cactus', '10', 0, 'N/A', 7, 'Opuntia Microdasys', 2, 2, 3, 1, 'Lounge', NULL, NULL, 'Bunny Ears Cactus, aka Opuntia Microdasys or Polka-Dot Cactus, originated in Mexico and is a denizen of arid, desert-like areas. The pads of this cactus can resemble bunny ears and its hair-like spines (glochids) look like fur, which is where it gets its name from. They are not poisonous but watch out for their spines because they easily latch onto your skin or clothes.', '2022-06-13 10:10:10', '2022-06-13 10:10:10', '[{\"title\": \"Pet Cauton\", \"description\": \"This plant is moderately toxic and can cause some adverse reactions when ingested so it is best to not let your pets eat it, which we advise for all plants in general. \"}, {\"title\": \"Origin\", \"description\": \"Mexico\"}, {\"title\": \"Max-Growth\", \"description\": \"30cm\"}]', NULL),
(14, 9, 'Plant', '62a67b31af4ca.webp', 'Jade Coral', 'Jade Coral', '8', 5, 'N/A', 20, 'Crassula Ovata ‘Gollum’', 1, 2, 3, 1, 'Kitchen', NULL, NULL, 'Coral Jade Plant or Gollum Jade, is a succulent plant with thick, upright, tube-like leaves. With bright enough light, they will develop a beautiful hue of red on the tips of these tubes. Their thick stems leaves and stems are how they store water – a necessary resource in hot desert plains.', '2022-06-13 11:48:01', '2022-06-13 11:48:01', '[{\"title\": \"Pet Caution\", \"description\": \"Moderately toxic and can cause some adverse reactions when ingested so it is best to not let your pets eat it.\"}, {\"title\": \"Max-Growth\", \"description\": \"30cm\"}, {\"title\": \"Indoor Plant\", \"description\": \"Live to 100years\"}]', NULL),
(15, 9, 'Plant', '62a693a2acd3e.png', 'Tiger Jaw', 'Tiger Jaw', '14', 5, 'N/A', 16, 'Faucaria Tigrina', 2, 2, 3, 1, 'Kitchen', NULL, NULL, 'Tiger Jaws Succulent, aka Shark Jaws, is a slow-growing succulent native to the subtropical deserts of South Africa. These little cuties produce low rosettes of fleshy, triangular leaves lined with soft, spiny \"teeth,\" which evolved to help the plant direct rainwater and dew down to its roots. If you have grown and Aloe or Haworthia before, a Tiger Jaw will be a breeze for you.', '2022-06-13 13:32:18', '2022-06-13 13:32:18', '[{\"title\": \"Pet Friendly\", \"description\": \"You can feel comfortable having this plant around your home in the potential case where your pet feels like nibbling on it.\"}, {\"title\": \"Origin\", \"description\": \"South Africa\"}, {\"title\": \"Bloom Time\", \"description\": \"Fall, early winder\"}]', NULL),
(16, 9, 'Plant', '62a6983a1a071.png', 'Sweetheart Valentine Hoya', 'Sweetheart Valentine Hoya', '20', 10, 'N/A', 15, 'Hoya Kerrii', 1, 1, 3, 1, 'Lounge', NULL, NULL, 'Hoya come in many different shapes, sizes, and colors, but hoya kerrii are truly a unique variety. Their thick, heart-shaped leaves have earned them common nicknames including sweetheart vine, hoya hearts, lucky heart plant, and Valentine’s hoya, which is especially fitting considering these hoyas become extremely popular each year around Valentine’s Day. Not only are they adorable to look at, but these tropical succulent vines are delightfully easy to grow as well', '2022-06-13 13:51:54', '2022-06-13 13:51:54', '[{\"title\": \"Origin\", \"description\": \"Asia\"}, {\"title\": \"Nickname\", \"description\": \"Lucky Heart Hoya\"}, {\"title\": \"Max-growth\", \"description\": \"Will grow as vine\"}]', NULL),
(17, 2, 'Plant', '62a69b8ce3607.png', 'Boston Fern', 'Boston Fern', '30', -2, 'N/A', 30, 'Nephrolepis Exaltata', 1, 3, 1, 4, 'Bathroom', NULL, NULL, 'You’ll find Boston Ferns in the wild in humid, shady areas, like swamps and forests, in South and Central America, the West Indies and Africa. They love anywhere wet, hot and not too bright. As a houseplant, they really became popular with the Victorians - those guys absolutely loved an exotic houseplant - thriving in the poorly lit, likely damp homes of the 1800s.\n\nWhen looking after one at home, the rule is to never let a Boston fern dry out. Make sure to keep the soil moist and humidity level high. Although it\'s very tempting, try to resist touching their fronds as they really don\'t like it and it might turn them brown.\n\nTo encourage lots of healthy growth, give it a feed with liquid fertiliser once per month in spring and summer.', '2022-06-13 14:06:04', '2022-06-13 14:06:04', '[{\"title\": \"Nickname\", \"description\": \"Sword Fern\"}, {\"title\": \"Air Purifying\", \"description\": \"Yes\"}, {\"title\": \"Pet and Baby Safe\", \"description\": \"Yes\"}]', NULL),
(18, 2, 'Plant', '62a69e2654527.webp', 'Staghorn Fern', 'Staghorn Fern', '12', 4, 'N/A', 30, 'Platycerium Bifurcatum', 3, 3, 3, 4, 'Bathroom', NULL, NULL, 'A native to the rainforests of Java, New Guinea and southeastern Australia. In its natural environment of tropical forests, it grows on tree trunks or rocks, absorbing moisture from the humid air and collecting nutrients from the falling leaves of overhead trees.', '2022-06-13 14:17:10', '2022-06-13 14:17:10', '[{\"title\": \"Origin\", \"description\": \"Asia, Australia\"}, {\"title\": \"Nickname\", \"description\": \"Elkhorn Fern\"}, {\"title\": \"Pet Friendly\", \"description\": \"You can feel comfortable having this plant around your home in the potential case where your pet feels like nibbling on it.\"}]', NULL),
(19, 2, 'Plant', '62a6a2796aca1.png', 'Heart Fern', 'Heart Fern', '20', 3, 'N/A', 25, 'Hemionitis Arifolia', 3, 3, 2, 4, NULL, NULL, NULL, 'Now here is a plant with a sweet heart. Learn how to care for heart leaf fern, one of the loveliest ferns out there.\nIt’s not hard to guess why Hemionitis arifolia got its common name, heart leaf fern. The heart-shaped foliage is a dead giveaway.\nBesides the wonderful leaf shape, this fern has another thing that sets it apart from most. Its leaves start as black string-like stems covered in thin hair that eventually protrude to reveal a small leaf. Unlike other ferns that grow from a crozier that uncoils, the leaf continuously grows into a matured form', '2022-06-13 14:35:37', '2022-06-13 14:35:37', '[{\"title\": \"Origin\", \"description\": \"South East Asia\"}, {\"title\": \"Nickname\", \"description\": \"Tongue Fern\"}, {\"title\": \"Pet or Baby Safe\", \"description\": \"Toxic if ingested\"}]', NULL),
(20, 2, 'Plant', '62a6a5f013a26.png', 'Snake Plant', 'Snake Plant', '30', 5, 'N/A', 75, 'Sansevieria Fernwood Mikado', 2, 2, 3, 1, 'Bedroom', NULL, NULL, 'Sansevieria Fernwood Mikado is a compact hybrid Snake Plant, aka Mother-in-Law\'s Tongue, with tiger-striping on its spiked leaves, which are in an interesting fountain-like shape. Known as some of the toughest houseplants, they store carbon dioxide acquired at night to use during the day, then release oxygen at night, via photosynthesis, when their pores open. This helps it to maximize efficiency in cleansing the air, as found in a study conducted by NASA.', '2022-06-13 14:50:24', '2022-06-13 14:50:24', '[{\"title\": \"Air Purifying \", \"description\": \"Yes\"}, {\"title\": \"Nickname\", \"description\": \"Mother\'s in Law Tongue\"}, {\"title\": \"Pet Caution\", \"description\": \"Mildly toxic if ingested\"}]', NULL),
(21, 11, 'Plant', '62a6c32d3c154.png', 'Satin Pothos', 'Satin Pothos', '40', 4, 'N/A', 40, 'Scindapsus Pictus', 1, 1, 3, 3, 'Kitchen', NULL, NULL, 'It’s found in the wild in countries like Borneo, Thailand and the Philippines, where it can grow up to three-metres tall, winding its way up larger trees. If there’s not a tree handy, it will spread along the ground.\n\nDespite being traditionally accustomed to warmer climes, it copes well in British homes. It hangs rather than climbs as an indoor plant, so give it a high spot where it can dangle. That said, there’s nothing to stop you training it up a wall. ', '2022-06-13 16:55:09', '2022-06-13 16:55:09', '[{\"title\": \"Nickname\", \"description\": \"Silver vine\"}, {\"title\": \"Air Purifiying\", \"description\": \"Yes\"}, {\"title\": \"Pet or Baby Safe\", \"description\": \"Toxic if ingested\"}]', NULL),
(22, 11, 'Plant', '62a6d16bbbf0c.png', 'String of Pearls', 'String of Pearls', '15', 3, 'N/A', 100, 'Senecio Rowleyanus ', 1, 1, 3, 1, 'Any', NULL, NULL, 'String of Beads or Rosary, is a flowering plant in the daisy family Asteraceae. It is an all-time favourite for the way its bead-like leaves can cascade several feet. Its small green bubbles grow along a slender stem, just like a beautiful pearl necklace.', '2022-06-13 17:55:55', '2022-06-13 17:55:55', '[{\"title\": \"Origin\", \"description\": \"Africa\"}, {\"title\": \"Pet or Baby Safe\", \"description\": \"Toxic to pets\"}, {\"title\": \"Nickname\", \"description\": \"Rosary\"}]', NULL),
(23, 12, 'Plant', '62a6d53fd87c6.png', 'Musa', 'Dwarf Cavendish', '60', 2, 'N/A', 90, 'Banana \'Dwarf Cavendish\'', 1, 2, 2, 4, 'Any', NULL, NULL, 'The plant that became known as the Cavendish banana was first brought to the UK in 1834, by the chaplain of Alton Towers, a stately home now better known as a theme park. The plants were gifted to William Cavendish, 6th Duke of Devonshire, who had them cultivated in his greenhouses and then named them after himself. ', '2022-06-13 18:12:15', '2022-06-13 18:12:15', '[{\"title\": \"Nickname\", \"description\": \"Banana Plant\"}, {\"title\": \"Air Purifying\", \"description\": \"Yes\"}, {\"title\": \"Pet or Baby Safe\", \"description\": \"Yes\"}]', NULL),
(24, 12, 'Plant', '62a6d880f002f.png', 'Canary Island Date Palm', 'Canary Island Date Palm', '40', 0, 'N/a', 200, 'Phoenix Canariensis ', 1, 2, 2, 1, 'Lounge', NULL, NULL, 'Phoenix canariensis is an exotic, feather type palm, with a stout trunk and straight, narrow, spiky leaves that grow upwards from a single crown, spreading and arching into elegant fan shapes. It is also known as Slender Date Palm.\n\nWith their architectural and tropical profile, Canary Island Date Palms add dramatic impact wherever you put them, from the corner of a room to an outdoor terrace.', '2022-06-13 18:26:09', '2022-06-13 22:45:55', '[{\"title\": \"Origin\", \"description\": \"Canary Islands\"}, {\"title\": \"Evergreen\", \"description\": \"Always in leaf throughout the year. It won\'t lose all its leaves at any one time.\"}, {\"title\": \"Air Purifying\", \"description\": \"Yes\"}]', NULL),
(26, NULL, 'Pot', '62a713e6ed80c.png', 'Emmy Plant Pot - Camel', 'Emmy Plant Pot - Camel', '25', 5, 'Brown', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'm', 'ceramic', 'Smart casual for the plant gang. The Emmy plant pot collection is a contemporary classic with warm caramel tones and handmade textures for interiors in the town or country.', '2022-06-13 22:39:34', '2022-06-13 23:16:33', '[{\"title\": \"Material\", \"description\": \"Matt-satin finish ceramic\"}, {\"title\": \"Usage\", \"description\": \"Indoor use only. No drainage hole\"}, {\"title\": \"Features\", \"description\": \"Handmade - every one is unique\"}]', NULL),
(27, NULL, 'Pot', '62a71f5a6fdf2.png', 'Clay hanging pot', 'Clay hanging pot', '35', 4, 'Neutral', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 's', 'clay', 'Made with neutral, rustic materials, these hanging pots give your hanging plants somewhere safe and beautiful to live.', '2022-06-13 23:28:26', '2022-06-13 23:28:26', '[{\"title\": \"Usage\", \"description\": \"Indoor use\"}, {\"title\": \"Latin Name\", \"description\": \"Baked Earth\"}, {\"title\": \"Pot Width Internal\", \"description\": \"13cm\"}]', NULL),
(28, NULL, 'Pot', '62a7af6688125.png', 'Ease Cylinder Planter', 'Ease Cylinder Planter', '20', 3, 'Creme', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'l', 'concrete', 'Contemporary cylindrical shapes in a smooth matt finish. The Ease planter collection provides an uncomplicated and uniform canvas for indoor greenery.\nMade from a durable blend of cement, concrete and glass fibres, the wide range of sizes allow a consistent theme across shelf, table and floor standing greenery.', '2022-06-14 09:43:02', '2022-06-14 09:43:02', '[{\"title\": \"Material\", \"description\": \"Fiberclay; a combination of cement, concrete and glass fibres.\"}, {\"title\": \"Usage\", \"description\": \"Indoor use only. No drainage hole\"}, {\"title\": \"Features\", \"description\": \" Fiberclay has a natural, heavy feeling; durable; low maintenance.\"}]', NULL),
(29, NULL, 'Pot', '62a7b1d79264b.png', 'Curved edged pot', 'Curved edged pot', '8', 14, 'Black', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'xs', 'recycled', 'An elegant classic that works with any indoor plant and in any decor, the curved edge pot comes in a range of colours and sizes to suit your entire urban jungle.\nWe aim to minimise the use of plastic all across our business, and these plastic pots is one of sustainability and responsibility. ', '2022-06-14 09:53:27', '2022-06-14 09:53:27', '[{\"title\": \"Manufacturer\", \"description\": \"Elho - powered by wind energy\"}, {\"title\": \"Material\", \"description\": \"More than 85% recycled plastic and recyclable too\"}, {\"title\": \"Usage\", \"description\": \"Indoor use\"}]', NULL),
(31, 2, 'Plant', '62af998e8d4a5.png', 'testte', 'testy', '1232', 123, NULL, 3424, 'safadfe', 2, 1, 2, 2, 'Living Room', NULL, NULL, NULL, '2022-06-20 09:47:58', '2022-06-20 09:48:10', '[]', '2022-06-20 09:48:13');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int NOT NULL,
  `name` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password_hash` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` varchar(60) NOT NULL,
  `password_reset_token` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `newsletter` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `name`, `email`, `password_hash`, `role`, `password_reset_token`, `newsletter`) VALUES
(9, 'testSignUP', 'signup@example.com', '$2y$10$jLUUQo/xQGMucnFxo6oPUeiuIXwuUdoT5Exdz/8B/zaipYcvAGKYy', 'Admin', '', NULL),
(16, 'TestName', 'testName@example.com', '$2y$10$ZOaW7OlfgWO7Dvay3w6qoeDHOWHfERTjjJLLYXwV49uprtAFPm/WS', 'Customer', '', NULL),
(17, NULL, 'ben.tillman@gmail.com', NULL, 'Customer', NULL, NULL),
(25, 'Jeffrey Hong', 'jeffrey@gmail.com', '$2y$10$jjQQ5csvHRs/w7CxyVbBW.Pld9N8jikpMlmroivDmmyn5h2Z1u4Hi', 'Admin', NULL, 0),
(26, 'Test Select', 'testSelect@example.com', NULL, 'Customer', NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `watering`
--

CREATE TABLE `watering` (
  `watering_id` int NOT NULL,
  `name` varchar(80) NOT NULL,
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
  MODIFY `care_level_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

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
  MODIFY `category_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `gallery_img`
--
ALTER TABLE `gallery_img`
  MODIFY `gallery_img_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;

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
  MODIFY `order_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `order_products`
--
ALTER TABLE `order_products`
  MODIFY `order_product_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `payment_info`
--
ALTER TABLE `payment_info`
  MODIFY `payment_info_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `watering`
--
ALTER TABLE `watering`
  MODIFY `watering_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

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
  ADD CONSTRAINT `fk_order_product_order` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE CASCADE ON UPDATE RESTRICT,
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
