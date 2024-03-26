const {models} = require('../models/InitModels');
require('dotenv').config({path: './../../.env'});

class UntrackedController {
    static async createUntrackedItem(req, res) {
        try {
            const {quantity, item_id} = req.body;
            const untrackedItem = await models.UntrackedItem.create({quantity, item_id});
            res.status(201).json({message: "Untracked item created", untrackedItem: untrackedItem});
        } catch (error) {
            res.status(500).json({message: "Error creating untracked item", error: error});
        }
    }



    static async updateUntrackedItem(req, res) {
        const {untrackedItem} = req.body;
        const {id} = req.params;

        if (untrackedItem.unt_id)
            res.status(400).json({message: "ID not matching"});
        else
            try {
                const response = await models.UntrackedItem.update({quantity: untrackedItem.quantity, model: untrackedItem.model}, {where: {unt_id: id}});
                res.status(200).json({message: "Untracked item updated", untrackedItem: response});
            } catch (error) {
                res.status(500).json({message: "Error updating untracked item", error: error});
            }
    }

    static async deleteUntrackedItem(req, res) {
        try {
            const {id} = req.params;
            const untrackedItem = await models.UntrackedItem.destroy({where: {id: id}});
            res.status(200).json({message: "Untracked item deleted", untrackedItem: untrackedItem});
        } catch (error) {
            res.status(500).json({message: "Error deleting untracked item", error: error});
        }
    }

    static async getUntrackedItem(req, res) {
        try {
            const id = req.params.id;
            const untrackedItem = await models.UntrackedItem.findOne({where: {unt_id: id}, include: {model: models.Item, include: models.ItemType}});
            res.status(200).json({message: "Untracked item found", untrackedItem: untrackedItem});
        } catch (error) {
            res.status(500).json({message: "Error finding untracked item", error: error});
        }
    }

    static async getAllUntrackedItems(req, res) {
        try {
            const untrackedItems = await models.UntrackedItem.findAll({include: {model: models.Item, include: models.ItemType}});
            res.status(200).json({message: "Untracked items found", untrackedItems: untrackedItems});
        } catch (error) {
            res.status(500).json({message: "Error finding untracked items", error: error});
        }
    }
}

module.exports = {UntrackedController: UntrackedController};