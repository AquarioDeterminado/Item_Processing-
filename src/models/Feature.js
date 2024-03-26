const {DataTypes, Model} = require("sequelize");
const {sequelize} = require("../configs/DBO");

class Feature extends Model {

}

Feature.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
},{sequelize, tableName: "feature"});

Feature.sync({force: false, match: process.env.DBO_DATABASE})

module.exports = Feature;