module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "professionalTypes",
      [
        {
          description: "Médico",
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
    await queryInterface.bulkDelete("professionalTypes", null, {});
  }
};
