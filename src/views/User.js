const {logInUserPass, logInAuth, getPermissions} = require("../controllers/UserController");
const bodyParser = require('body-parser');

class User {
    static baseURI = '/users';

    static activeRoutes(server){
        const jsonParser = bodyParser.json();

        server.app.post(this.baseURI + "/login/", jsonParser,(req, res) => {
            const user = logInUserPass(req, res);
            return user;
        });

        server.app.post(this.baseURI + "/login/auth", jsonParser,(req, res) => {
            const user = logInAuth(req, res);
            return user;
        });


        server.app.post(this.baseURI + "/permissions/get", jsonParser,(req, res) => {
            const permissions = getPermissions(req, res);
            return permissions;
        });
    }
}

module.exports = Object.freeze({User: User});