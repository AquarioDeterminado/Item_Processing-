const express = require('express');
const cors = require('cors');
const {StockView} = require("../views/StockView");
const {User} = require("../views/User");

class Server {
    constructor() {
        this.app = express();
        this.port = 3000;

        this.cors();
        this.routes();
        this.middlewares();
    }

    middlewares() {
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.get('/', (req, res) => {
            res.send('Hello World!');
        });

        StockView.activeRoutes(this);
        User.activeRoutes(this);
    }

    cors() {
        this.app.use(cors({
            origin: 'http://localhost:8080',
            methods: ['GET', 'POST', 'PUT', 'DELETE']
        }));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Item_Processing app listening at http://localhost:${this.port}`);
        });
    }
}

const server = new Server();

module.exports = Object.freeze({Server, server: server});