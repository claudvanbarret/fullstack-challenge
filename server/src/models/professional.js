const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class professional extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.professional_type, { foreignKey: "type" });
    }
  }
  professional.init(
    {
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      type: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "professional"
    }
  );
  return professional;
};
