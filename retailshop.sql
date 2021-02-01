DROP DATABASE IF EXISTS retailshop;   
CREATE DATABASE IF NOT EXISTS retailshop; 
USE retailshop;

DROP TABLE IF EXISTS Order; 
CREATE TABLE Order (
  
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    order_price  DECIMAL(20, 2),
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    category_id INT NOT NULL,
    discount DECIMAL(20,2),
    CONSTRAINT `FK_Orders_Users` FOREIGN KEY (`UserID`) REFERENCES `Users` (`UserID`) ON DELETE CASCADE
     CONSTRAINT `FK_Orders_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE CASCADE
          CONSTRAINT `FK_Orders_category` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE CASCADE
    );
DROP TABLE IF EXISTS Users; 
CREATE TABLE IF NOT EXISTS Users (
  UserID        INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  FullName     VARCHAR(50)  NOT NULL,
  address       VARCHAR(255) NOT NULL,
  Country       VARCHAR(28)  NOT NULL,
  Phone        VARCHAR(12)  NOT NULL,
  Email         VARCHAR(50)  NOT NULL,
  Username      VARCHAR(28),
  password      VARCHAR(158),
  role       VARCHAR(28)      NOT NULL,
  duration      DATETIME
);


CREATE TABLE IF NOT EXISTS products (
  product_id        INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  product_name     VARCHAR(50)  NOT NULL,
  price       DECIMAL NOT NULL,
  quantity       INT(50)  NOT NULL,
  category_id      INT  NOT NULL
  CONSTRAINT `FK_Orders_category` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS category (
  category_id        INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  categpry_name     VARCHAR(50)  NOT NULL,
);

INSERT INTO Users
VALUES (1, 'dalia', 'bolkly', 'egypt', '0123453456', 'd@live.com','dalia', '$2a$10$mpJCYlSr762SwQVzdLwxR.KgRuWEHA2NzUanxxG/nxEStDRcRBbB6', 'employee');
INSERT INTO Users
VALUES (2, 'hana', 'sanstefano', 'egypt', '012343233453456', 'hana@live.com','hana', '$2a$10$TsD7IW0m1g/57C931nC7R.FjwXw9i0tAbJZk7u4Uk0gDoneR9yBim', 'affiliate');
INSERT INTO Users
VALUES (3, 'Aly', 'roshdy', 'egypt', '0123433456', 'aly@live.com','aly', '$2a$10$TsD7IW0m1g/57C931nC7R.FjwXw9i0tAbJZk7u4Uk0gDoneR9yBim', 'customer');

INSERT INTO `products` (`product_id`,`category`, `price`, `quantity`, `product_name`) VALUES (1,'drink', '2', '40', 'espresso'), (2,'drink', '3', '40', 'soda'),(3,'cucumber', '20', '40', 'grocery'), (4,'tomato', '15', '40', 'grocery');