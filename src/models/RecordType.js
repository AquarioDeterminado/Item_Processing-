const {Model, DataTypes} = require("sequelize");
const {sequelize} = require("../configs/DBO");

class RecordType extends Model {

}

RecordType.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'record_type'
});

RecordType.sync({ force: false, match: process.env.DBO_DATABASE})

module.exports = Object.freeze({RecordType: RecordType});