const {sequelize} = require('./../../configs/DBO');
const {DataTypes, Model} = require("sequelize");

class UntrackedItem extends Model {
    static associate(models) {
        UntrackedItem.belongsTo(models.Item, {foreignKey: 'item_id'});
    }
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
    item_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Item',
            key: 'id'
        }
    }
}, {
    sequelize,
    tableName: 'untracked_Item'
});

UntrackedItem.sync({ force: false, match: process.env.DBO_DATABASE})


module.exports = Object.freeze({UntrackedItem: UntrackedItem});