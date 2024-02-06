import {Model, DataTypes} from "sequelize";

class User  extends Model {

}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    creation_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    last_login: {
        type: DataTypes.DATE,
        allowNull: true
    },
    departement: {
        type: DataTypes.INTEGER,
        allowNull: true,
        refererences: {
            model: 'departement',
            key: 'id'
        }
    },
    n_meca: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

}, {
    sequelize,
    tableName: 'user'
});

User.sync({force: false, match: process.env.DBO_DATABASE})

module.exports = Object.freeze(User);