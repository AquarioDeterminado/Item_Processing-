import {Model, DataTypes} from "sequelize";

class  FileTemplate extends Model {

}

FileTemplate.init({
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
    file: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'file_template'
});

FileTemplate.sync({ force: false, match: process.env.DBO_DATABASE})

module.exports = FileTemplate;