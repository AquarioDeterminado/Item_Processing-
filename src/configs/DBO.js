const mariadb= require('mariadb');

var pool = mariadb.createConnection({
    host: process.env.DBO_HOST,
    user: process.env.DBO_USER,
    password: process.env.DBO_PASSWORD,
    database: process.env.DBO_DATABASE,
    }
)

module.exports = Object.freeze({pool: pool});