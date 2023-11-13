const sequelize = require('sequelize');
const mysql = require("mysql2/promise");


const connection = new sequelize('mundialdb', 'root', '4205613fa', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;