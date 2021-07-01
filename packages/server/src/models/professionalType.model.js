const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ProfessionalType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  ProfessionalType.init(
    {
      description: DataTypes.STRING,
      status: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: "ProfessionalType",
      tableName: "professionalTypes"
    }
  );
  return ProfessionalType;
};
