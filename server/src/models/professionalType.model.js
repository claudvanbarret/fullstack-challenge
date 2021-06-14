const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class professional_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  professional_type.init(
    {
      description: DataTypes.STRING,
      status: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: "professionalType"
    }
  );
  return professional_type;
};
