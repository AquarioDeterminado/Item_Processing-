const {sequelize} = require('../configs/DBO');
const {DataTypes, Model} = require("sequelize");

class UntrackedItem extends Model{
}

UntrackedItem.init({
    unt_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    model: {
        type: DataTypes.STRING,
        allowNull: true
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