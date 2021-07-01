const { Professional, ProfessionalType, AuditLog } = require("../models");
const { CREATE, UPDATE, DELETE } = require("../constants/actions");
const { getProfessionalAsString } = require("../helpers/audit.helper");

const PROFESSIONAL_TABLE_NAME = Professional.getTableName();

class ProfessionalController {
  async index(req, res) {
    try {
      const { page, size } = req.query;
      const limit = +size;
      const offset = (page - 1) * limit;

      const { rows, count } = await Professional.findAndCountAll({
        limit,
        offset,
        include: [{ model: ProfessionalType, as: "type" }],
        order: [["name", "ASC"]]
      });

      return res.json({ data: rows, total: count, page: +page });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async store(req, res) {
    try {
      const { name, phone, email, status, typeId } = req.body;
      const { user } = req;

      const professional = await Professional.create({ name, phone, email, status, typeId });

      const response = await Professional.findByPk(professional.id, {
        include: [{ model: ProfessionalType, as: "type" }]
      });

      // AuditLog: CREATE Professional
      const newValue = getProfessionalAsString(professional);
      await AuditLog.create({
        action: CREATE,
        tableName: PROFESSIONAL_TABLE_NAME,
        recordId: professional.id,
        newValue,
        createdBy: user.id
      });

      return res.status(201).json({ data: response });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async read(req, res) {
    try {
      const { id } = req.params;

      const professional = await Professional.findByPk(id, { include: [{ model: ProfessionalType, as: "type" }] });

      if (!professional) return res.status(404).json({ message: "PROFESSIONAL_NOT_FOUND" });

      return res.status(200).json({ data: professional });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, phone, email, status, typeId } = req.body;
      const { user } = req;

      const professional = await Professional.findByPk(id);

      if (!professional) return res.status(404).json({ message: "PROFESSIONAL_NOT_FOUND" });

      const oldValue = getProfessionalAsString(professional);

      professional.name = name;
      professional.phone = phone;
      professional.email = email;
      professional.status = status;
      professional.typeId = typeId;

      await professional.save();

      const response = await Professional.findByPk(id, { include: [{ model: ProfessionalType, as: "type" }] });

      // AuditLog: UPDATE Professional
      const newValue = getProfessionalAsString(professional);
      await AuditLog.create({
        action: UPDATE,
        tableName: PROFESSIONAL_TABLE_NAME,
        recordId: professional.id,
        oldValue,
        newValue,
        createdBy: user.id
      });

      return res.status(200).json({ data: response });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const { user } = req;

      const professional = await Professional.findByPk(id);

      if (!professional) return res.status(404).json({ message: "PROFESSIONAL_NOT_FOUND" });

      await professional.destroy();

      // AuditLog: DELETE Professional
      const oldValue = getProfessionalAsString(professional);
      await AuditLog.create({
        action: DELETE,
        tableName: PROFESSIONAL_TABLE_NAME,
        recordId: professional.id,
        oldValue,
        createdBy: user.id
      });

      return res.status(204).end();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ProfessionalController();
