const {Sequelize} = require("sequelize");

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DBO_HOST,
    username: process.env.DBO_USER,
    password: process.env.DBO_PASS,
    database: process.env.DBO_DATABASE,
    port: process.env.DBO_PORT
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
});

module.exports = Object.freeze({sequelize: sequelize});