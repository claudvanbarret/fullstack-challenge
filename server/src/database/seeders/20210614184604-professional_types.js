module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "professional_types",
      [
        {
          description: "Médica",
          status: true
        },
        {
          description: "Professor",
          status: true
        },
        {
          description: "Engenheiro Civil",
          status: true
        },
        {
          description: "Motorista",
          status: true
        },
        {
          description: "Desenvolvedor",
          status: true
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("professional_types", null, {});
  }
};
