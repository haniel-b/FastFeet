import Sequelize, { Model } from 'sequelize';

class DeliveryProblems extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'DeliveryProblems',
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.OrderManagement, { foreignKey: 'id' });
  }
}
export default DeliveryProblems;
