const {DataTypes, Model} = require("sequelize");
const {sequelize} = require("../configs/DBO");

class Item extends Model {
}

Item.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
}, {
    sequelize,
    tableName: 'item'
});

Item.sync({force: false})

module.exports = Object.freeze({Item: Item});
