-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 26, 2024 at 03:34 PM
-- Server version: 8.0.31
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `customersystem`
--

-- --------------------------------------------------------

--
-- Table structure for table `mstcustomer`
--

DROP TABLE IF EXISTS `mstcustomer`;
CREATE TABLE IF NOT EXISTS `mstcustomer` (
  `CUSTOMER_ID` bigint NOT NULL AUTO_INCREMENT,
  `CUSTOMER_NAME` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `SEX` varchar(1) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `BIRTHDAY` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `EMAIL` varchar(40) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `ADDRESS` varchar(256) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `DELETE_YMD` timestamp NULL DEFAULT NULL,
  `INSERT_YMD` timestamp NULL DEFAULT NULL,
  `INSERT_PSN_CD` decimal(5,0) DEFAULT NULL,
  `UPDATE_YMD` timestamp NULL DEFAULT NULL,
  `UPDATE_PSN_CD` decimal(5,0) DEFAULT NULL,
  PRIMARY KEY (`CUSTOMER_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=80 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `mstcustomer`
--

INSERT INTO `mstcustomer` (`CUSTOMER_ID`, `CUSTOMER_NAME`, `SEX`, `BIRTHDAY`, `EMAIL`, `ADDRESS`, `DELETE_YMD`, `INSERT_YMD`, `INSERT_PSN_CD`, `UPDATE_YMD`, `UPDATE_PSN_CD`) VALUES
(4, 'Dao Ba Chuong', '1', '1992/01/01', 'bachuong@gmail.com', 'Binh Dinh', '2023-11-12 10:32:28', NULL, NULL, NULL, NULL),
(5, 'Dao Ba Sang', '1', '1992/01/01', 'bachuong@gmail.com', 'Binh Dinh', '2023-11-12 10:32:28', NULL, NULL, NULL, NULL),
(6, 'Dao Ba Ling', '1', '1992/01/01', 'bachuong@gmail.com', 'Binh Dinh', '2023-11-12 10:32:28', NULL, NULL, NULL, NULL),
(7, 'Dao Ba Tinh', '1', '1992/01/01', 'bachuong@gmail.com', 'Binh Dinh', '2023-11-12 10:32:28', NULL, NULL, NULL, NULL),
(8, 'Dao Ba Cuc', '0', '1992/09/07', 'bacuc@gmail.com', 'BinhDinh', '2023-11-12 10:32:28', NULL, NULL, NULL, NULL),
(9, 'Dao Ba Lanh', '0', '1992/09/07', 'balanh@gmail.com', 'BinhDinh', '2023-11-12 10:32:28', NULL, NULL, NULL, NULL),
(10, 'Dao Ba Binh', '1', '1992/09/07', 'babinh@gmail.com', 'BinhDinh', '2023-11-12 10:32:28', NULL, NULL, NULL, NULL),
(11, 'Dao Ba Lam Dang', '0', '1992/09/07', 'bacuc@gmail.com', 'BinhDinh', '2023-11-12 10:32:28', NULL, NULL, NULL, NULL),
(12, 'Dao Ba Con', '0', '1992/09/07', 'bacuc@gmail.com', 'BinhDinh', '2023-11-12 10:32:28', NULL, NULL, NULL, NULL),
(13, 'Dao Ba 1', '0', '1992/09/07', 'bacuc@gmail.com', 'BinhDinh', '2023-11-12 10:32:28', NULL, NULL, NULL, NULL),
(14, 'Dao Ba 2', '0', '1992/09/07', 'balanh@gmail.com', 'BinhDinh', '2023-11-12 10:32:28', NULL, NULL, NULL, NULL),
(15, 'Dao Ba 3', '1', '1992/09/07', 'babinh@gmail.com', 'BinhDinh', '2023-11-12 10:32:28', NULL, NULL, NULL, NULL),
(16, 'Dao Ba 4 5', '0', '1992/09/07', 'bacuc@gmail.com', 'BinhDinh', '2023-11-12 10:34:24', NULL, NULL, NULL, NULL),
(17, 'Dao Ba 5', '0', '1992/09/07', 'bacuc@gmail.com', 'BinhDinh', '2023-11-12 10:34:24', NULL, NULL, NULL, NULL),
(18, 'Dao Ba 6', '0', '1992/09/07', 'bacuc@gmail.com', 'BinhDinh', '2023-11-12 10:34:24', NULL, NULL, NULL, NULL),
(19, 'Dao Ba 7', '0', '1992/09/07', 'balanh@gmail.com', 'BinhDinh', '2023-11-12 10:34:24', NULL, NULL, NULL, NULL),
(20, 'Dao Ba 8', '1', '1992/09/07', 'babinh@gmail.com', 'BinhDinh', '2023-11-12 10:34:24', NULL, NULL, NULL, NULL),
(21, 'Dao Ba 4 9', '0', '1992/09/07', 'bacuc@gmail.com', 'BinhDinh', '2023-11-12 10:34:24', NULL, NULL, NULL, NULL),
(22, 'Dao Ba 10', '0', '1992/09/07', 'bacuc@gmail.com', 'BinhDinh', '2023-11-12 10:34:24', NULL, NULL, NULL, NULL),
(23, 'nguyen van a', '0', '2001/01/02', 'vana@gmail.com', 'BinhDinh', '2023-11-12 10:34:24', NULL, NULL, NULL, NULL),
(24, 'nguyen van a', '0', '2001/01/02', 'vana@gmail.com', 'BinhDinh', '2023-11-12 10:34:24', NULL, NULL, NULL, NULL),
(25, 'nguyen van b', '0', '2001/01/02', 'vana@gmail.com', 'BinhDinh', '2023-11-12 10:34:24', NULL, NULL, NULL, NULL),
(26, 'nguyen van c', '0', '2001/01/02', 'vana@gmail.com', 'BinhDinh', '2023-11-12 10:34:24', NULL, NULL, NULL, NULL),
(27, 'nguyen van d', '0', '2001/01/02', 'vana@gmail.com', 'BinhDinh', '2023-11-12 10:34:24', NULL, NULL, NULL, NULL),
(28, 'nguyen van e', '0', '2001/01/02', 'vana@gmail.com', 'BinhDinh', '2023-11-12 10:34:24', NULL, NULL, NULL, NULL),
(29, 'nguyen van f', '0', '2001/01/02', 'vana@gmail.com', 'BinhDinh', '2023-11-12 10:34:24', NULL, NULL, NULL, NULL),
(30, 'nguyen van g', '0', '2001/01/02', 'vana@gmail.com', 'BinhDinh', '2023-11-12 10:34:24', NULL, NULL, NULL, NULL),
(31, 'nguyen van h', '0', '2001/01/02', 'vana@gmail.com', 'BinhDinh', NULL, NULL, NULL, NULL, NULL),
(32, 'nguyen van j', '0', '2001/01/02', 'vana@gmail.com', 'BinhDinh', NULL, NULL, NULL, NULL, NULL),
(33, 'nguyen van k', '0', '2001/01/02', 'vana@gmail.com', 'BinhDinh', NULL, NULL, NULL, NULL, NULL),
(34, 'nguyen van l', '0', '2001/01/02', 'vana@gmail.com', 'BinhDinh', NULL, NULL, NULL, NULL, NULL),
(35, 'nguyen van m', '0', '2001/01/02', 'vana@gmail.com', 'BinhDinh', NULL, NULL, NULL, NULL, NULL),
(36, 'Dao Ba Lam', '1', '1999/02/09', 'balam@gmail.com', 'BInh Dinh', NULL, NULL, NULL, NULL, NULL),
(37, 'Dao Ba Hien', '1', '1999/02/09', 'bahien@gmail.com', 'BinhDinh', NULL, NULL, NULL, NULL, NULL),
(38, 'Dao Ba Tung', '0', '2001/02/01', 'batung@gmail.com', 'BinhDinh', NULL, NULL, NULL, NULL, NULL),
(39, 'Dao Ba Chuong', '1', '1992/01/01', 'bachuong@gmail.com', 'Binh Dinh', NULL, NULL, NULL, NULL, NULL),
(40, 'Dao Ba Sang', '1', '1992/01/01', 'bachuong@gmail.com', 'Binh Dinh', NULL, NULL, NULL, NULL, NULL),
(41, 'Dao Ba Ling', '1', '1992/01/01', 'bachuong@gmail.com', 'Binh Dinh', NULL, NULL, NULL, NULL, NULL),
(42, 'Dao Ba Tinh', '1', '1992/01/01', 'bachuong@gmail.com', 'Binh Dinh', NULL, NULL, NULL, NULL, NULL),
(43, 'Dao Ba Cuc', '0', '1992/09/07', 'bacuc@gmail.com', 'BinhDinh', NULL, NULL, NULL, NULL, NULL),
(44, 'Dao Ba Lanh', '0', '1992/09/07', 'balanh@gmail.com', 'BinhDinh', NULL, NULL, NULL, NULL, NULL),
(45, 'Dao Ba Binh', '1', '1992/09/07', 'babinh@gmail.com', 'BinhDinh', NULL, NULL, NULL, NULL, NULL),
(46, 'Dao Ba Lam Dang', '0', '1992/09/07', 'bacuc@gmail.com', 'BinhDinh', NULL, NULL, NULL, NULL, NULL),
(47, 'Dao Ba Con', '0', '1992/09/07', 'bacuc@gmail.com', 'BinhDinh', NULL, NULL, NULL, NULL, NULL),
(48, 'Dao Ba 1', '0', '1992/09/07', 'bacuc@gmail.com', 'BinhDinh', NULL, NULL, NULL, NULL, NULL),
(49, 'Dao Ba 2', '0', '1992/09/07', 'balanh@gmail.com', 'BinhDinh', NULL, NULL, NULL, NULL, NULL),
(50, 'Dao Ba 3', '1', '1992/09/07', 'babinh@gmail.com', 'BinhDinh', NULL, NULL, NULL, NULL, NULL),
(51, 'Nguyen Thi Thu Hong', '1', '2001/01/02', 'vantoicntt06@gmail.com', 'BinhDinh', NULL, NULL, NULL, '2023-11-26 18:40:52', NULL),
(52, 'Tran Van Toi', '1', '2001/01/02', 'vantoicntt06@gmail.com', 'BinhDinh', NULL, NULL, NULL, '2023-11-26 18:38:55', NULL),
(53, 'Tran Van Toi', '1', '2001/01/02', 'vantoicntt06@gmail.com', 'BinhDinh', NULL, NULL, NULL, '2023-11-26 18:40:45', NULL),
(54, 'Dao Ba 7', '0', '1992/09/07', 'balanh@gmail.com', 'BinhDinh', NULL, NULL, NULL, NULL, NULL),
(55, 'Dao Ba 8', '1', '1992/09/07', 'babinh@gmail.com', 'BinhDinh', NULL, NULL, NULL, NULL, NULL),
(56, 'Dao Ba 4 9', '0', '1992/09/07', 'bacuc@gmail.com', 'BinhDinh', NULL, NULL, NULL, NULL, NULL),
(57, 'Dao Ba 10', '0', '1992/09/07', 'bacuc@gmail.com', 'BinhDinh', NULL, NULL, NULL, NULL, NULL),
(58, 'nguyen van a', '0', '2001/01/02', 'vana@gmail.com', 'BinhDinh', NULL, NULL, NULL, NULL, NULL),
(59, 'nguyen van a', '0', '2001/01/02', 'vana@gmail.com', 'BinhDinh', NULL, NULL, NULL, NULL, NULL),
(60, 'nguyen van b', '0', '2001/01/02', 'vana@gmail.com', 'BinhDinh', NULL, NULL, NULL, NULL, NULL),
(61, 'nguyen van c', '0', '2001/01/02', 'vana@gmail.com', 'BinhDinh', NULL, NULL, NULL, NULL, NULL),
(62, 'nguyen van d', '0', '2001/01/02', 'vana@gmail.com', 'BinhDinh', NULL, NULL, NULL, NULL, NULL),
(63, 'nguyen van e', '0', '2001/01/02', 'vana@gmail.com', 'BinhDinh', NULL, NULL, NULL, NULL, NULL),
(64, 'nguyen van f', '0', '2001/01/02', 'vana@gmail.com', 'BinhDinh', NULL, NULL, NULL, NULL, NULL),
(65, 'nguyen van g', '0', '2001/01/02', 'vana@gmail.com', 'BinhDinh', NULL, NULL, NULL, NULL, NULL),
(66, 'Tá»i Tráº§n%', '1', '1999/02/02', 'vantoicntt06@gmail.com', 'PhÃº trung cÃ¡t thÃ nh', NULL, '2023-11-20 20:05:17', '1', '2023-11-20 20:05:17', '1'),
(67, '%%%%', '1', '1999/02/01', 'vantoicntt06@gmail.com', 'PhÃº trung cÃ¡t thÃ nh', NULL, '2023-11-20 20:06:04', '1', '2023-11-20 20:06:04', '1'),
(68, 'nguyen van h', '1', '2001/01/02', 'vantoicntt06@gmail.com', 'BinhDinh', NULL, '2023-11-26 13:45:29', '1', '2023-11-26 13:45:29', '1'),
(69, 'nguyen van binh', '1', '2001/01/02', 'vantoicntt06@gmail.com', 'BinhDinh', NULL, '2023-11-26 13:45:54', '1', '2023-11-26 13:45:54', '1'),
(70, 'Nguyen Van Tuan', '1', '2001/01/02', 'vantoicntt06@gmail.com', 'BinhDinh', NULL, '2023-11-26 13:47:44', '1', '2023-11-26 13:47:44', '1'),
(71, 'Nguyen Thi Thu Hong', '0', '2001/01/02', 'vantoicntt06@gmail.com', 'BinhDinh', NULL, '2023-11-26 13:47:48', '1', '2023-11-26 13:47:48', '1'),
(72, 'Nguyen Van Tuan', '1', '2001/01/02', 'vantoicntt06@gmail.com', 'BinhDinh', NULL, '2023-11-26 16:59:04', '1', '2023-11-26 16:59:04', '1'),
(73, 'Nguyen Van Tuan', '1', '2001/01/02', 'vantoicntt06@gmail.com', 'BinhDinh', NULL, '2023-11-26 16:59:33', '1', '2023-11-26 16:59:33', '1'),
(74, 'Nguyen Van Tuan', '1', '2001/01/02', 'vantoicntt06@gmail.com', 'BinhDinh', NULL, '2023-11-26 17:00:59', '1', '2023-11-26 17:00:59', '1'),
(75, 'Nguyen Thi Thu Hong', '0', '2001/01/02', 'vantoicntt06@gmail.com', 'BinhDinh', NULL, '2023-11-26 17:01:24', '1', '2023-11-26 17:01:24', '1'),
(76, 'Nguyen Thi Thu Hong', '1', '2001/01/02', 'vantoicntt06@gmail.com', 'BinhDinh', NULL, '2023-11-26 18:31:58', '1', '2023-11-26 18:31:58', '1'),
(77, 'Nguyen Thi Thu Huong', '1', '2001/01/02', 'vantoicntt06@gmail.com', 'BinhDinh', NULL, '2023-11-26 18:38:58', '1', '2023-11-26 18:38:58', '1'),
(78, 'Nguyen Thi Thu Hong', '1', '2001/01/02', 'vantoicntt06@gmail.com', 'BinhDinh', NULL, '2023-11-26 18:40:47', '1', '2023-11-26 18:40:47', '1'),
(79, 'Nguyen Thi Thu Hong', '1', '2001/01/02', 'vantoicntt06@gmail.com', 'BinhDinh', NULL, '2023-11-26 18:40:54', '1', '2023-11-26 18:40:54', '1');

-- --------------------------------------------------------

--
-- Table structure for table `mstuser`
--

DROP TABLE IF EXISTS `mstuser`;
CREATE TABLE IF NOT EXISTS `mstuser` (
  `PSN_CD` bigint NOT NULL AUTO_INCREMENT,
  `USERID` varchar(8) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `PASSWORD` varchar(8) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `USERNAME` varchar(40) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `DELETE_YMD` timestamp NULL DEFAULT NULL,
  `INSERT_YMD` timestamp NULL DEFAULT NULL,
  `INSERT_PSN_CD` decimal(5,0) DEFAULT NULL,
  `UPDATE_YMD` timestamp NULL DEFAULT NULL,
  `UPDATE_PSN_CD` decimal(5,0) DEFAULT NULL,
  PRIMARY KEY (`PSN_CD`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `mstuser`
--

INSERT INTO `mstuser` (`PSN_CD`, `USERID`, `PASSWORD`, `USERNAME`, `DELETE_YMD`, `INSERT_YMD`, `INSERT_PSN_CD`, `UPDATE_YMD`, `UPDATE_PSN_CD`) VALUES
(1, 'nguyenva', 'nguyenva', 'nguyenvana', NULL, NULL, NULL, NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
