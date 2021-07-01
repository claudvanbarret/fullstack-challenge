const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class AuditLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "createdBy" });
    }
  }
  AuditLog.init(
    {
      action: DataTypes.STRING,
      tableName: DataTypes.STRING,
      recordId: DataTypes.INTEGER,
      oldValue: DataTypes.TEXT,
      newValue: DataTypes.TEXT,
      createdBy: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "AuditLog",
      tableName: "auditLogs"
    }
  );
  return AuditLog;
};
