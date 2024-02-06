const {Model, DataTypes} = require("sequelize");
const {sequelize} = require("../configs/DBO");

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

ItemType.sync({force: false, match: process.env.DBO_DATABASE})

module.exports = ItemType;