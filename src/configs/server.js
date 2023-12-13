const express = require('express');

class Server {
    constructor() {
        this.app = express();
        this.port = 3000;

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.get('/', (req, res) => {
            res.send('Hello World!');
        });

        this.app.get('/items', (req, res) => {
            res.send(JSON.stringify(Item.getAll()));
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${this.port}`);
        });
    }
}

module.exports = Server;