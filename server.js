const express = require("express");

const orm = require("./config/orm.js");

orm.selectAll("burgers_db","burgers");

orm.insertOne("burgers_db", "burgers", "burger_name", "devoured")