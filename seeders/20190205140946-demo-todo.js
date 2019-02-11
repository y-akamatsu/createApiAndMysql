'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const demoTodos = [1, 2, 3, 4, 5].map(num => {
      return {
        title: `demo title ${num}`,
        body: `I have to do develop ${num}.`,
        completed: false
      };
    });

    return queryInterface.bulkInsert("Todos", demoTodos, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Todos", null, {});
  }
};