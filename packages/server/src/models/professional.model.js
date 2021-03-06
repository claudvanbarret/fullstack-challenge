const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Professional extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.ProfessionalType, { foreignKey: "typeId", as: "type" });
    }
  }
  Professional.init(
    {
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      typeId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "Professional",
      tableName: "professionals"
    }
  );
  return Professional;
};
