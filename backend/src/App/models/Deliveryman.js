import Sequelize, { Model } from 'sequelize';

class Deliveryman extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,
      },
      {
        sequelize,
        tableName: 'deliveryman',
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id' });
  }
}
export default Deliveryman;
