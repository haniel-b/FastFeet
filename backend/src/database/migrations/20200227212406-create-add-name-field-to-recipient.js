module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('recipient', 'name', {
      type: Sequelize.STRING,
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('name');
  },
};
