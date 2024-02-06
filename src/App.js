require('dotenv').config({path:__dirname+'/./../.env'});
const {server} = require('./configs/server');
const {sequelize} = require("./configs/DBO");

server.listen();

