const {UntrackedItem} = require('../models/Items/UntrackedItem');
class UntrackedController {
    static async createUntrackedItem(req, res) {
        try {
            const {quantity, item_id} = req.body;
            const untrackedItem = await UntrackedItem.create({quantity, item_id});
            res.status(201).json({message: "Untracked item created", untrackedItem: untrackedItem});
        } catch (error) {
            res.status(500).json({message: "Error creating untracked item", error: error});
        }
    }

    static async updateUntrackedItem(req, res) {
        try {
            const {quantity, item_id} = req.body;
            const {id} = req.params;
            const untrackedItem = await UntrackedItem.update({quantity, item_id}, {where: {id: id}});
            res.status(200).json({message: "Untracked item updated", untrackedItem: untrackedItem});
        } catch (error) {
            res.status(500).json({message: "Error updating untracked item", error: error});
        }
    }

    static async deleteUntrackedItem(req, res) {
        try {
            const {id} = req.params;
            const untrackedItem = await UntrackedItem.destroy({where: {id: id}});
            res.status(200).json({message: "Untracked item deleted", untrackedItem: untrackedItem});
        } catch (error) {
            res.status(500).json({message: "Error deleting untracked item", error: error});
        }
    }

    static async getUntrackedItem(req, res) {
        try {
            const {id} = req.params;
            const untrackedItem = await UntrackedItem.findOne({where: {id: id}});
            res.status(200).json({message: "Untracked item found", untrackedItem: untrackedItem});
        } catch (error) {
            res.status(500).json({message: "Error finding untracked item", error: error});
        }
    }

    static async getAllUntrackedItems(req, res) {
        try {
            const untrackedItems = await UntrackedItem.findAll();
            res.status(200).json({message: "Untracked items found", untrackedItems: untrackedItems});
        } catch (error) {
            res.status(500).json({message: "Error finding untracked items", error: error});
        }
    }
}

module.exports = {UntrackedController: UntrackedController};