const {sequelize} = require('../configs/DBO');
const {DataTypes, Model, INTEGER, HasOne} = require("sequelize");
const {Item} = require("./Item");

class UntrackedItem extends Model{
}

UntrackedItem.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize,
    tableName: 'untracked_Item'
});

UntrackedItem.sync({ force: false, match: process.env.DBO_DATABASE})

module.exports = Object.freeze({UntrackedItem: UntrackedItem});