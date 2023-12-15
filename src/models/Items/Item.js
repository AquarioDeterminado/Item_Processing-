require('dotenv').config({path: './../../../.env'});
const {Model, DataTypes} = require('sequelize');
const {sequelize} = require('../../configs/DBO');


class Item extends Model {
    static associate(models) {
        Item.hasMany(models.TrackedItem, {foreignKey: 'ite_id'});
        Item.hasMany(models.UntrackedItem, {foreignKey: 'ite_id'});
    }
}


Item.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false

    },
    model: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    acquicitionDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    obvs: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    tableName: 'item'
});

Item.sync({ force: false, match: process.env.DBO_DATABASE})
    .then(() => {
        console.log('Table created');
    })
    .catch((error) => {
        console.log(error);
    });

module.exports = Object.freeze(Item);
