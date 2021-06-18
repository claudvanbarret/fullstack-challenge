const { ProfessionalType, AuditLog } = require("../models");
const { CREATE, UPDATE, DELETE } = require("../constants/actions");
const { getProfessionalTypeAsString } = require("../helpers/audit.helper");

const PROFESSIONAL_TYPE_TABLE_NAME = ProfessionalType.getTableName();

class ProfessionalTypeController {
  async index(req, res) {
    try {
      const { status } = req.query;

      const where = status !== undefined ? { status } : {};

      const professionals = await ProfessionalType.findAll({ where });

      return res.json(professionals);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async store(req, res) {
    try {
      const { description, status } = req.body;
      const { user } = req;

      const type = await ProfessionalType.create({ description, status });

      // AuditLog: CREATE Professional Type
      const newValue = getProfessionalTypeAsString(type);
      await AuditLog.create({
        action: CREATE,
        tableName: PROFESSIONAL_TYPE_TABLE_NAME,
        recordId: type.id,
        newValue,
        createdBy: user.id
      });

      return res.status(201).json({ data: type });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async read(req, res) {
    try {
      const { id } = req.params;

      const type = await ProfessionalType.findByPk(id);

      if (!type) return res.status(404).json({ message: "PROFESSIONAL_TYPE_NOT_FOUND" });

      return res.status(200).json({ data: type });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { description, status } = req.body;
      const { user } = req;

      const type = await ProfessionalType.findByPk(id);

      if (!type) return res.status(404).json({ message: "PROFESSIONAL_TYPE_NOT_FOUND" });

      const oldValue = getProfessionalTypeAsString(type);

      type.description = description;
      type.status = status;

      await type.save();

      // AuditLog: UPDATE Professional Type
      const newValue = getProfessionalTypeAsString(type);
      await AuditLog.create({
        action: UPDATE,
        tableName: PROFESSIONAL_TYPE_TABLE_NAME,
        recordId: type.id,
        oldValue,
        newValue,
        createdBy: user.id
      });

      return res.status(200).json({ data: type });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const { user } = req;

      const type = await ProfessionalType.findByPk(id);

      if (!type) return res.status(404).json({ message: "PROFESSIONAL_TYPE_NOT_FOUND" });

      await type.destroy();

      // AuditLog: DELETE Professional Type
      const oldValue = getProfessionalTypeAsString(type);
      await AuditLog.create({
        action: DELETE,
        tableName: PROFESSIONAL_TYPE_TABLE_NAME,
        recordId: type.id,
        oldValue,
        createdBy: user.id
      });

      return res.status(204).end();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ProfessionalTypeController();
