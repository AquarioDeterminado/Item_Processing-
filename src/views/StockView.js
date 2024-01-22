const {UntrackedController} = require('./../controllers/UntrackedController');
const {json} = require("express");

class StockView {

    static baseURI = '/untracked-items';

    static activeRoutes(server){

        server.app.get(this.baseURI + "/get/list/", (req, res) => {
            var itemList = UntrackedController.getAllUntrackedItems(req, res);
            return itemList;
        });

        server.app.get(this.baseURI + "/get/:id", json, (req, res) => {
            var item = UntrackedController.getUntrackedItem(req, res);
            return item;
        });

        server.app.post(this.baseURI + "/create", (req, res) => {
            var item = UntrackedController.createUntrackedItem(req, res);
            return item;
        });

        server.app.put(this.baseURI + "/update/:id", (req, res) => {
            var item = UntrackedController.updateUntrackedItem(req, res);
            return item;
        });

        server.app.delete(this.baseURI + "/delete/:id", (req, res) => {
            var item = UntrackedController.deleteUntrackedItem(req, res);
            return item;
        });
    }
}


module.exports = Object.freeze({StockView, stockView: StockView});