"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("hospitalSection", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      hospitalName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      onWhichfloor: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      buildingName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("hospitalSection");
  },
};
