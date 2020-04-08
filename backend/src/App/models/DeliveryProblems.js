import Sequelize, { Model } from 'sequelize';

class DeliveryProblems extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
      },
      {
        sequelize,
        tableName: 'DeliveryProblems',
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.OrderManagement, {
      foreignKey: 'id',
      as: 'delivery_id',
    });
  }
}
export default DeliveryProblems;
