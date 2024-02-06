const {DataTypes, Model} = require("sequelize");
const {sequelize} = require("../configs/DBO");

class Department extends Model {
}

Department.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'departement',
  }
);


Department.sync({ force: false, match: process.env.DBO_DATABASE });

module.exports = Object.freeze({Department: Department})