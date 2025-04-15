"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("product", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      productName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      productDetails: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      expiryDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      manufactureDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      companyID: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("product");
  },
};
