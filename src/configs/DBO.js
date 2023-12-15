require('dotenv').config({path: './../../.env'});
const mysql2= require('mysql2');
const {Sequelize} = require("sequelize");

class DBO {
    static makePool() {
        this.pool = mysql2.createPool({
        host: process.env.DBO_HOST,
        user: process.env.DBO_USER,
        password: process.env.DBO_PASSWORD,
        database: process.env.DBO_DATABASE,
        });
    }
}
DBO.makePool();

if (DBO.pool != null) {
    console.log("Connected to database");
} else {
    console.log("Error connecting to database");
}

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DBO_HOST,
    port: process.env.DBO_PORT,
    username: process.env.DBO_USER,
    password: process.env.DBO_PASSWORD,
    database: process.env.DBO_DATABASE
});

module.exports = Object.freeze({pool: DBO.pool, sequelize: sequelize});