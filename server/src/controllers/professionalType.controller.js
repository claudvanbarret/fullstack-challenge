const { ProfessionalType } = require("../models");

class ProfessionalTypeController {
  async index(req, res) {
    try {
      const professionals = await ProfessionalType.findAll();

      return res.json(professionals);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async store(req, res) {
    try {
      const { description, status } = req.body;

      const type = await ProfessionalType.create({ description, status });

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

      const type = await ProfessionalType.findByPk(id);

      if (!type) return res.status(404).json({ message: "PROFESSIONAL_TYPE_NOT_FOUND" });

      type.description = description;
      type.status = status;

      await type.save();

      return res.status(200).json({ data: type });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const type = await ProfessionalType.findByPk(id);

      if (!type) return res.status(404).json({ message: "PROFESSIONAL_TYPE_NOT_FOUND" });

      await type.destroy();

      return res.status(204).end();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ProfessionalTypeController();
