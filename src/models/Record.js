const {Model, DataTypes} = require("sequelize");
const {sequelize} = require("../configs/DBO");

class Record extends Model{
}

Record.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'record'
});

Record.sync({ force: false, match: process.env.DBO_DATABASE});

module.exports = Object.freeze({Record: Record});
