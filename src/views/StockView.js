const {server} = require('./../configs/server');
const {UntrackedController} = require('./../controllers/UntrackedController');

let baseURI = '/untracked-items';


server.app.get(baseURI + "/get/list", (req, res) => {
    var itemList = UntrackedController.getAllUntrackedItems(req, res);
    return itemList;
});

server.app.get(baseURI + "/get/:id", (req, res) => {
    var item = UntrackedController.getUntrackedItem(req, res);
    return item;
});

server.app.post(baseURI + "/create", (req, res) => {
    var item = UntrackedController.createUntrackedItem(req, res);
    return item;
});

server.app.put(baseURI + "/update/:id", (req, res) => {
    var item = UntrackedController.updateUntrackedItem(req, res);
    return item;
});

server.app.delete(baseURI + "/delete/:id", (req, res) => {
    var item = UntrackedController.deleteUntrackedItem(req, res);
    return item;
});