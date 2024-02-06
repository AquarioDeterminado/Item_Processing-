const {Model, DataTypes} = require("sequelize");
const {sequelize} = require("../configs/DBO");

class Facture extends Model {
    static associate(models) {
        this.belongsToMany(models.Item, {
            through: models.FacturesItems,
            foreignKey: 'factureId'
        });
    }
}

Facture.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    creation_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    file: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    tableName: 'facture'
});

Facture.sync({force: false});

module.exports = Object.freeze({Facture: Facture});