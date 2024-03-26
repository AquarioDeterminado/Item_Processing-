const {Model, DataTypes} = require("sequelize");
const {sequelize} = require("../configs/DBO");

class Permission extends Model{
}

Permission.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
},{sequelize, tableName: "permission"});

Permission.sync({force: false, match: process.env.DBO_DATABASE})

module.exports = Permission;

