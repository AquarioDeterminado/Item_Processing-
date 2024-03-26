const {ItemType} = require("../models/ItemType");

class ItemTypeController {

    static async index(req, res) {
        try {
            const itemTypes = await ItemType.findAll({
                attributes: ['id', 'type']
            });
            res.status(200).json({message: "Item types found", itemTypes: itemTypes});
        } catch (error) {
            res.status(500).json({message: "Error finding item types", error: error});
        }
    }
}

module.exports = Object.freeze({ItemTypeController: ItemTypeController});