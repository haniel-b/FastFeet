import Sequelize from 'sequelize';

import Admin from '../App/models/Admin';
import Recipient from '../App/models/Recipient';
import Deliveryman from '../App/models/Deliveryman';
import File from '../App/models/File';
import OrderManagement from '../App/models/OrderManagement';

import databaseConfig from '../config/database';

const models = [Admin, Recipient, Deliveryman, File, OrderManagement];

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new DataBase();
