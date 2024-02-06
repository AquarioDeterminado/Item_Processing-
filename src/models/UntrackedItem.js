const {sequelize} = require('../configs/DBO');
const {DataTypes, Model, INTEGER} = require("sequelize");

class UntrackedItem extends Model {

}

UntrackedItem.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    item_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Item',
            key: 'id'
        }
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