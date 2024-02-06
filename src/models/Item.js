import {DataTypes, Model} from "sequelize";
import {sequelize} from "../configs/DBO";

class Item extends Model {
    static associate(models) {
        this.belongsTo(models.FactureItems, {
            foreignKey: 'itemId'
        });
    }
}

Item.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    itemTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'ItemType',
            key: 'id'
        }
    }
}, {
    sequelize,
    tableName: 'item'
});

Item.sync({force: false})

module.exports = Object.freeze(Item);
