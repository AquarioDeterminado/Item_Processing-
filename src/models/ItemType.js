const {Model, DataTypes} = require("sequelize");
const {sequelize} = require("../configs/DBO");
const {Item} = require("./Item");

class ItemType extends Model{

}

ItemType.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'item_type'
});

//ItemType.hasMany(Item);

ItemType.sync({force: false, match: process.env.DBO_DATABASE})

module.exports = Object.freeze({ItemType: ItemType});