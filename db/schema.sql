DROP DATABASE IF EXITS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INTEGER NOT NULL AUTO_INCREMENT primary key,
    burger_name VARCHAR (25) NOT NULL,
    devoured BOOLEAN NOT NULL
);