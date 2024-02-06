require('dotenv').config({path:__dirname+'/./../.env'});
const {server} = require('./configs/server');

server.listen();
