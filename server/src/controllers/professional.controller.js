const { Professional, ProfessionalType } = require("../models");

class ProfessionalController {
  async index(req, res) {
    try {
      const { page = 0, size = 10 } = req.query;
      const limit = +size;
      const offset = page * limit;

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

      const professional = await Professional.create({ name, phone, email, status, typeId });

      return res.status(201).json({ data: professional });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async read(req, res) {
    try {
      const { id } = req.params;

      const professional = await Professional.findByPk(id);

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

      const professional = await Professional.findByPk(id);

      if (!professional) return res.status(404).json({ message: "PROFESSIONAL_NOT_FOUND" });

      professional.name = name;
      professional.phone = phone;
      professional.email = email;
      professional.status = status;
      professional.typeId = typeId;

      await professional.save();

      return res.status(200).json({ data: professional });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const professional = await Professional.findByPk(id);

      if (!professional) return res.status(404).json({ message: "PROFESSIONAL_NOT_FOUND" });

      await professional.destroy();

      return res.status(204).end();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ProfessionalController();
