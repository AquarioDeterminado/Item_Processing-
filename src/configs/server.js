const express = require('express');

class Server {
    constructor() {
        this._app = express();
        this.port = 3000;

        this.middlewares();
        this.routes();
    }

    get app() { return this._app; }

    middlewares() {
        this._app.use(express.static('public'));
    }

    routes() {
        this._app.get('/', (req, res) => {
            res.send('Hello World!');
        });

        this._app.get('/items', (req, res) => {
            res.send(JSON.stringify(Item.getAll()));
        });
    }

    listen() {
        this._app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${this.port}`);
        });
    }
}

const server = new Server();
server.listen();

module.exports = Object.freeze({Server, server: server});