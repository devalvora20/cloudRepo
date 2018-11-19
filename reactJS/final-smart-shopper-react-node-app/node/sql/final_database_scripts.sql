# --------------------------------------------------------
# Host:                         127.0.0.1
# Server version:               5.5.44-log
# Server OS:                    Win32
# HeidiSQL version:             6.0.0.3603
# Date/time:                    2018-11-19 16:53:09
# --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

# Dumping database structure for swabhav_db
CREATE DATABASE IF NOT EXISTS `swabhav_db` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `swabhav_db`;


# Dumping structure for table swabhav_db.cart
CREATE TABLE IF NOT EXISTS `cart` (
  `cart_id` varchar(36) NOT NULL DEFAULT '',
  `name` varchar(20) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `totalPrice` double DEFAULT NULL,
  `product_id` varchar(36) DEFAULT NULL,
  `user_id` varchar(36) DEFAULT NULL,
  `date_created` varchar(36) DEFAULT NULL,
  `order_placed` char(1) DEFAULT NULL,
  PRIMARY KEY (`cart_id`),
  KEY `user_id` (`user_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# Dumping data for table swabhav_db.cart: ~1 rows (approximately)
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` (`cart_id`, `name`, `price`, `qty`, `totalPrice`, `product_id`, `user_id`, `date_created`, `order_placed`) VALUES
	('d3f3ad99-cbc2-11e8-9060-001a80497498', 'ipohne x', 50000, 1, 50000, '25dfe351-beec-11e8-89a7-f04da24a75d1', '2efdecf0-bddf-11e8-bd08-0daff47a7110', '10/04/2018', 'N');
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;


# Dumping structure for table swabhav_db.category
CREATE TABLE IF NOT EXISTS `category` (
  `category_id` varchar(36) NOT NULL DEFAULT '',
  `description` varchar(20) DEFAULT NULL,
  `no_of_products` int(11) DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# Dumping data for table swabhav_db.category: ~3 rows (approximately)
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` (`category_id`, `description`, `no_of_products`) VALUES
	('5cad0557-cbc2-11e8-9060-001a80497498', 'mobiles', 3),
	('5cb5df93-cbc2-11e8-9060-001a80497498', 'laptops', 4),
	('5cc104c9-cbc2-11e8-9060-001a80497498', 'bags', 3);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;


# Dumping structure for table swabhav_db.lineitems
CREATE TABLE IF NOT EXISTS `lineitems` (
  `lineItem_id` varchar(36) NOT NULL DEFAULT '',
  `product_id` varchar(36) DEFAULT NULL,
  `order_id` varchar(36) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  PRIMARY KEY (`lineItem_id`),
  KEY `product_id` (`product_id`),
  KEY `order_id` (`order_id`),
  CONSTRAINT `lineitems_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`),
  CONSTRAINT `lineitems_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# Dumping data for table swabhav_db.lineitems: ~17 rows (approximately)
/*!40000 ALTER TABLE `lineitems` DISABLE KEYS */;
INSERT INTO `lineitems` (`lineItem_id`, `product_id`, `order_id`, `quantity`) VALUES
	('057ecae0-e993-11e8-aad2-9fab6e731e8f', '6ffc5b14-cbc2-11e8-9060-001a80497498', '057de080-e993-11e8-aad2-9fab6e731e8f', 1),
	('057ef1f0-e993-11e8-aad2-9fab6e731e8f', '70030a8d-cbc2-11e8-9060-001a80497498', '057de080-e993-11e8-aad2-9fab6e731e8f', 1),
	('057ef1f1-e993-11e8-aad2-9fab6e731e8f', '700d44fe-cbc2-11e8-9060-001a80497498', '057de080-e993-11e8-aad2-9fab6e731e8f', 1),
	('057ef1f2-e993-11e8-aad2-9fab6e731e8f', '701e1d88-cbc2-11e8-9060-001a80497498', '057de080-e993-11e8-aad2-9fab6e731e8f', 3),
	('20671150-e993-11e8-aad2-9fab6e731e8f', '6ffc5b14-cbc2-11e8-9060-001a80497498', '206144f0-e993-11e8-aad2-9fab6e731e8f', 1),
	('355c99f0-ebd6-11e8-a096-f196d3fa9fae', '6ffc5b14-cbc2-11e8-9060-001a80497498', '354d30a0-ebd6-11e8-a096-f196d3fa9fae', 1),
	('355c99f1-ebd6-11e8-a096-f196d3fa9fae', '700d44fe-cbc2-11e8-9060-001a80497498', '354d30a0-ebd6-11e8-a096-f196d3fa9fae', 2),
	('355c99f2-ebd6-11e8-a096-f196d3fa9fae', '7024eb1b-cbc2-11e8-9060-001a80497498', '354d30a0-ebd6-11e8-a096-f196d3fa9fae', 1),
	('355c99f3-ebd6-11e8-a096-f196d3fa9fae', '6fdd7eec-cbc2-11e8-9060-001a80497498', '354d30a0-ebd6-11e8-a096-f196d3fa9fae', 1),
	('4722a9d0-cbc5-11e8-9321-87357825ec49', '701e1d88-cbc2-11e8-9060-001a80497498', '471b2fc0-cbc5-11e8-9321-87357825ec49', 1),
	('49169c10-e989-11e8-b154-bbe513c9af66', '6fdd7eec-cbc2-11e8-9060-001a80497498', '491144e0-e989-11e8-b154-bbe513c9af66', 1),
	('54f75600-e993-11e8-aad2-9fab6e731e8f', '6ffc5b14-cbc2-11e8-9060-001a80497498', '54f1fed0-e993-11e8-aad2-9fab6e731e8f', 1),
	('54f75601-e993-11e8-aad2-9fab6e731e8f', '70030a8d-cbc2-11e8-9060-001a80497498', '54f1fed0-e993-11e8-aad2-9fab6e731e8f', 1),
	('54f75602-e993-11e8-aad2-9fab6e731e8f', '700d44fe-cbc2-11e8-9060-001a80497498', '54f1fed0-e993-11e8-aad2-9fab6e731e8f', 1),
	('6fd0c02a-7760-40bf-a5cf-22c310c2c8da', '6fdd7eec-cbc2-11e8-9060-001a80497498', 'dad07463-a79f-47be-91ec-a9d169b9e906', 1),
	('83908a60-ebc6-11e8-8320-2971f19b4a53', '70030a8d-cbc2-11e8-9060-001a80497498', '83749df0-ebc6-11e8-8320-2971f19b4a53', 1),
	('83908a61-ebc6-11e8-8320-2971f19b4a53', '6ffc5b14-cbc2-11e8-9060-001a80497498', '83749df0-ebc6-11e8-8320-2971f19b4a53', 2),
	('8390b170-ebc6-11e8-8320-2971f19b4a53', '700d44fe-cbc2-11e8-9060-001a80497498', '83749df0-ebc6-11e8-8320-2971f19b4a53', 1),
	('8508f9c0-ebeb-11e8-9b88-912824d4e00e', '6ffc5b14-cbc2-11e8-9060-001a80497498', '84e82b50-ebeb-11e8-9b88-912824d4e00e', 1),
	('978fb5f6-1b5b-4294-8040-93da47d15a13', '6ff011b4-cbc2-11e8-9060-001a80497498', 'dad07463-a79f-47be-91ec-a9d169b9e906', 3),
	('a8c98700-d118-11e8-a74a-757e8a0e499d', '70030a8d-cbc2-11e8-9060-001a80497498', 'a8bb5630-d118-11e8-a74a-757e8a0e499d', 2),
	('a8c98701-d118-11e8-a74a-757e8a0e499d', '700d44fe-cbc2-11e8-9060-001a80497498', 'a8bb5630-d118-11e8-a74a-757e8a0e499d', 1),
	('a8c98702-d118-11e8-a74a-757e8a0e499d', '701e1d88-cbc2-11e8-9060-001a80497498', 'a8bb5630-d118-11e8-a74a-757e8a0e499d', 3),
	('ace7e562-cbc2-11e8-9060-001a80497498', '25dfe351-beec-11e8-89a7-f04da24a75d1', 'f84d347b-bf3e-11e8-89a7-f04da24a75d1', 3),
	('fa42462a-eb28-4076-805b-72ae8aec772f', '6fe910db-cbc2-11e8-9060-001a80497498', 'dad07463-a79f-47be-91ec-a9d169b9e906', 2);
/*!40000 ALTER TABLE `lineitems` ENABLE KEYS */;


# Dumping structure for table swabhav_db.orders
CREATE TABLE IF NOT EXISTS `orders` (
  `order_id` varchar(36) NOT NULL DEFAULT '',
  `user_id` varchar(36) DEFAULT NULL,
  `no_of_items` int(11) DEFAULT NULL,
  `order_date` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# Dumping data for table swabhav_db.orders: ~8 rows (approximately)
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` (`order_id`, `user_id`, `no_of_items`, `order_date`) VALUES
	('057de080-e993-11e8-aad2-9fab6e731e8f', '406142a0-ce0e-11e8-8a4a-7df55a544fa5', 4, '2018-11-16 17:00:29.000'),
	('206144f0-e993-11e8-aad2-9fab6e731e8f', '406142a0-ce0e-11e8-8a4a-7df55a544fa5', 1, '2018-11-16 17:01:14.000'),
	('354d30a0-ebd6-11e8-a096-f196d3fa9fae', 'aa89c1d0-e807-11e8-89a7-0df1adab0bab', 4, '2018-11-19 14:06:28.000'),
	('471b2fc0-cbc5-11e8-9321-87357825ec49', '34c5a730-cbc3-11e8-97b4-0bd4e1125898', 1, '2018-10-09 18:44:39.000'),
	('491144e0-e989-11e8-b154-bbe513c9af66', '406142a0-ce0e-11e8-8a4a-7df55a544fa5', 1, '2018-11-16 15:50:47.000'),
	('54f1fed0-e993-11e8-aad2-9fab6e731e8f', '406142a0-ce0e-11e8-8a4a-7df55a544fa5', 3, '2018-11-16 17:02:42.000'),
	('83749df0-ebc6-11e8-8320-2971f19b4a53', 'aa89c1d0-e807-11e8-89a7-0df1adab0bab', 3, '2018-11-19 12:14:07.000'),
	('84e82b50-ebeb-11e8-9b88-912824d4e00e', '406142a0-ce0e-11e8-8a4a-7df55a544fa5', 1, '2018-11-19 16:39:01.000'),
	('a0a6945c-cbc2-11e8-9060-001a80497498', '2efdecf0-bddf-11e8-bd08-0daff47a7110', 2, '10/10/2010'),
	('a8bb5630-d118-11e8-a74a-757e8a0e499d', '406142a0-ce0e-11e8-8a4a-7df55a544fa5', 3, '2018-10-16 13:24:07.000'),
	('dad07463-a79f-47be-91ec-a9d169b9e906', '406142a0-ce0e-11e8-8a4a-7df55a544fa5', 3, '2018-10-16T08:56:55.589Z');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;


# Dumping structure for table swabhav_db.organization
CREATE TABLE IF NOT EXISTS `organization` (
  `organization_id` varchar(36) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `address` varchar(20) DEFAULT NULL,
  `contact` varchar(20) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# Dumping data for table swabhav_db.organization: ~1 rows (approximately)
/*!40000 ALTER TABLE `organization` DISABLE KEYS */;
INSERT INTO `organization` (`organization_id`, `name`, `address`, `contact`, `email`) VALUES
	('b7a22a07-cbc2-11e8-9060-001a80497498', 'swabhav', 'andheri', '101', 'contact@swabhavtechlabs.com');
/*!40000 ALTER TABLE `organization` ENABLE KEYS */;


# Dumping structure for table swabhav_db.products
CREATE TABLE IF NOT EXISTS `products` (
  `product_id` varchar(36) NOT NULL DEFAULT '',
  `name` varchar(20) DEFAULT NULL,
  `image` varchar(20) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `category_id` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# Dumping data for table swabhav_db.products: ~9 rows (approximately)
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` (`product_id`, `name`, `image`, `description`, `price`, `category_id`) VALUES
	('6fdd7eec-cbc2-11e8-9060-001a80497498', 'iPhone X', 'ix.jpg', 'This is iphones latest version.', 50000, '5cad0557-cbc2-11e8-9060-001a80497498'),
	('6fe910db-cbc2-11e8-9060-001a80497498', 'Samsung S9', 's9.jpg', 'This is samsungs s9 version.', 40000, '5cad0557-cbc2-11e8-9060-001a80497498'),
	('6ff011b4-cbc2-11e8-9060-001a80497498', 'Redmi Note 5', 'rn5.jpg', 'This is redmi note 5.', 30000, '5cad0557-cbc2-11e8-9060-001a80497498'),
	('6ffc5b14-cbc2-11e8-9060-001a80497498', 'Skybag Vault S3', 'skybag.jpeg', 'Built-in headphone cord port. Quick-access, front pocket for frequently needed items.', 900, '5cc104c9-cbc2-11e8-9060-001a80497498'),
	('70030a8d-cbc2-11e8-9060-001a80497498', 'Swiss Gear knought5', 'swiss.jpg', 'Padded, Airflow back panel with mesh fabric for back ventilation and support.', 600, '5cc104c9-cbc2-11e8-9060-001a80497498'),
	('700d44fe-cbc2-11e8-9060-001a80497498', 'Alienware 2.0', 'alien.jpg', 'Highlights a 13 inch-inch LED-illuminated wide screen having a determination of 2560x1600 pixels', 80000, '5cb5df93-cbc2-11e8-9060-001a80497498'),
	('7013fcdc-cbc2-11e8-9060-001a80497498', 'Dell inspiron', 'dell.jpg', '8 GB LPDDR3 memory coupled with 512 GB storage to keep you hooked.', 70000, '5cb5df93-cbc2-11e8-9060-001a80497498'),
	('701e1d88-cbc2-11e8-9060-001a80497498', 'High Sierra profound', 'hs.jpg', 'Ergonomically contoured, padded shoulder straps.', 2000, '5cc104c9-cbc2-11e8-9060-001a80497498'),
	('7024eb1b-cbc2-11e8-9060-001a80497498', 'Mac Book pro', 'mac.jpg', 'Geared for exceptional performance with MacBook comes with Touch Bar with integrated Touch ID.', 90000, '5cb5df93-cbc2-11e8-9060-001a80497498');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;


# Dumping structure for table swabhav_db.users
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` varchar(36) NOT NULL DEFAULT '',
  `firstName` varchar(20) DEFAULT NULL,
  `lastName` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `registrationDate` varchar(40) DEFAULT NULL,
  `role` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# Dumping data for table swabhav_db.users: ~5 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`user_id`, `firstName`, `lastName`, `password`, `email`, `registrationDate`, `role`) VALUES
	('34c5a730-cbc3-11e8-97b4-0bd4e1125898', 'Deval', 'deval', 'deval', 'deval@deval.com', '2018-10-09 18:29:49.000', 'u'),
	('406142a0-ce0e-11e8-8a4a-7df55a544fa5', 'a', 'a', 'aaaaa', 'a@a.com', '2018-10-12 16:32:04.000', 'u'),
	('913f1b40-e806-11e8-89a7-0df1adab0bab', 'd', 'v', 'ddddd', 'd@d.com', '2018-11-14 17:42:33.000', 'u'),
	('aa89c1d0-e807-11e8-89a7-0df1adab0bab', 'pp', 'pp', 'p', 'p@p.p', '2018-11-14 17:50:25.000', 'u'),
	('b481c180-d04a-11e8-b556-9d79152319ff', 'dsa', 'dsad', 'rrrrr', 'rr@r.r', '2018-10-15 12:49:50.000', 'u');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
