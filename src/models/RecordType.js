const {Model, DataTypes} = require("sequelize");

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
    },
    fileTemplate: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'FileTemplate',
            key: 'id'
        }
    }
}, {
    sequelize,
    tableName: 'record_type'
});

RecordType.sync({ force: false, match: process.env.DBO_DATABASE})

module.exports = RecordType;