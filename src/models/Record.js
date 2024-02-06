const {Model, DataTypes} = require("sequelize");

class Record extends Model{

}

Record.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User',
            key: 'id'
        }
    },
    item: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Item',
            key: 'id'
        }
    },
    type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'RecordType',
            key: 'id'
        }
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

module.exports = Record;
