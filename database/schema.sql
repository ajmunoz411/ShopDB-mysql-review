-- Double check if database already exists, deletes it if so
DROP DATABASE IF EXISTS ShopDB;
-- create new database
CREATE DATABASE ShopDB;
-- start using this database
USE ShopDB;
-- create table in the shopDB database
CREATE TABLE inventory(
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL UNIQUE,
  price INT NOT NULL,
  quantity INT NOT NULL
);

-- RUN this file with mySQL using this command:
-- mysql -u root -p < database/schema.sql