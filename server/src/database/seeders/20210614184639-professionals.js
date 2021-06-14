module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "professionals",
      [
        {
          name: "Daniel Kaplan",
          phone: "(11) 91111-1111",
          email: "danielkaplan@gmail.com",
          status: true,
          type: 1
        },
        {
          name: "Michael McCabe",
          phone: "(11) 92222-2222",
          email: "michaelmccabe@gmail.com",
          status: true,
          type: 2
        },
        {
          name: "Sebastien Horin",
          phone: "(11) 93333-3333",
          email: "sebastienhorin@gmail.com",
          status: true,
          type: 3
        },
        {
          name: "Alex Podworny",
          phone: "(11) 94444-4444",
          email: "alexpodworny@gmail.com",
          status: true,
          type: 4
        },
        {
          name: "Gabriel Barbosa",
          phone: "(11) 95555-5555",
          email: "gabrielbarbosa@gmail.com",
          status: true,
          type: 5
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("professionals", null, {});
  }
};
