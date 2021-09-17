"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        email: "duyvo@gmail.com",
        password: "12345",
        firstName: "Duy",
        lastName: "Vo",
        address: "TP Ho Chi Minh",
        phoneNumber: "0987654321",
        gender: 1,
        image: "",
        roleId: "R1",
        positionId: "22",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
