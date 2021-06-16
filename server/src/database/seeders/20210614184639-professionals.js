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
          typeId: 1
        },
        {
          name: "Michael McCabe",
          phone: "(11) 92222-2222",
          email: "michaelmccabe@gmail.com",
          status: true,
          typeId: 2
        },
        {
          name: "Sebastien Horin",
          phone: "(11) 93333-3333",
          email: "sebastienhorin@gmail.com",
          status: true,
          typeId: 3
        },
        {
          name: "Alex Podworny",
          phone: "(11) 94444-4444",
          email: "alexpodworny@gmail.com",
          status: true,
          typeId: 4
        },
        {
          name: "Gabriel Barbosa",
          phone: "(11) 95555-5555",
          email: "gabrielbarbosa@gmail.com",
          status: true,
          typeId: 5
        },
        {
          name: "Dan Abramov",
          phone: "(11) 96666-6666",
          email: "dan@gmail.com",
          status: false,
          typeId: 1
        },
        {
          name: "Ryan Irilli",
          phone: "(11) 97777-7777",
          email: "ryan@gmail.com",
          status: true,
          typeId: 2
        },
        {
          name: "Matt Carlotta",
          phone: "(11) 98888-8888",
          email: "matt@gmail.com",
          status: true,
          typeId: 3
        },
        {
          name: "Daniel petrov",
          phone: "(11) 99999-9999",
          email: "dpetrov@gmail.com",
          status: true,
          typeId: 4
        },
        {
          name: "Rob Moorman",
          phone: "(11) 99111-1111",
          email: "rmoorman@gmail.com",
          status: true,
          typeId: 5
        },
        {
          name: "Tyler Brown",
          phone: "(11) 99222-2222",
          email: "tylerbrown@gmail.com",
          status: false,
          typeId: 1
        },
        {
          name: "Navinesh Chand",
          phone: "(11) 99333-3333",
          email: "navieshchand@gmail.com",
          status: true,
          typeId: 2
        },
        {
          name: "Martin Fowler",
          phone: "(11) 99444-4444",
          email: "martinf@gmail.com",
          status: true,
          typeId: 3
        },
        {
          name: "Pan Piotr",
          phone: "(11) 99555-5555",
          email: "panpiotr@gmail.com",
          status: false,
          typeId: 4
        },
        {
          name: "Munei Nengwenani",
          phone: "(11) 99666-6666",
          email: "nengwenani@gmail.com",
          status: true,
          typeId: 5
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("professionals", null, {});
  }
};
