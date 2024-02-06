const Item = require('./Item.js');
const {Model, DataTypes} = require("sequelize");
class TrackedItem extends Model {
}

TrackedItem.init({
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
            model: Item,
            key: 'id'
        }
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false
    },
    SN: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tag: {
        type: DataTypes.STRING,
        allowNull: true
    },
    arrival_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    obs: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    tableName: 'tracked_Item'
});

TrackedItem.sync({ force: false, match: process.env.DBO_DATABASE})

module.exports = Object.freeze(TrackedItem);