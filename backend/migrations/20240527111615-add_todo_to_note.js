'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Notes', 'todo', {
      type: Sequelize.ENUM('pending', 'completed', 'cancelled'),
      defaultValue: 'pending'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Notes', 'todo');
  }
};
