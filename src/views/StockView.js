const {UntrackedController} = require('./../controllers/UntrackedController');
const {ItemTypeController} = require("../controllers/ItemTypeController");
const bodyParser = require("body-parser");

class StockView {

    static baseURI = '/untracked-items';

    static activeRoutes(server){
        const jsonParser = bodyParser.json();

        server.app.get(this.baseURI + "/get/list/", (req, res) => {
            var itemList = UntrackedController.getAllUntrackedItems(req, res);
            return itemList;
        });

        server.app.get(this.baseURI + "/get/types/", (req, res) => {
            var types = ItemTypeController.index(req, res);
            return types;
        });

        server.app.get(this.baseURI + "/get/:id/", (req, res) => {
            var item = UntrackedController.getUntrackedItem(req, res);
            return item;
        });

        server.app.post(this.baseURI + "/create", (req, res) => {
            var item = UntrackedController.createUntrackedItem(req, res);
            return item;
        });

        server.app.put(this.baseURI + "/update/:id", jsonParser, (req, res) => {
            const {authKey} = req.body;
            if (authUser(authKey) !== null){
                var item = UntrackedController.updateUntrackedItem(req, res);
                return item;
            }
            return res.status(401).json({message: "Unauthorized"});
        });

        server.app.delete(this.baseURI + "/delete/:id", (req, res) => {
            var item = UntrackedController.deleteUntrackedItem(req, res);
            return item;
        });
    }
}


module.exports = Object.freeze({StockView, stockView: StockView});