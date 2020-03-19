module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('orderManagement', 'signature_id', {
      type: Sequelize.INTEGER,
      references: { model: 'files', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('files', 'signature_id');
  },
};
