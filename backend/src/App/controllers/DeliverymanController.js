import * as Yup from 'yup';
import { Op } from 'sequelize';
import Deliveryman from '../models/Deliveryman';

class DeliverymanController {
  async index(req, res) {
    const deliveryman = await Deliveryman.findAll({
      attributes: ['name', 'email'],
    });

    return res.json(deliveryman);
  }

  async allDelivers(req, res) {
    const { name } = req.query;

    const findName = await Deliveryman.findOne({
      where: { name: { [Op.iLike]: name } },
      order: ['name'],
    });

    if (!findName) {
      const findAllDelivers = await Deliveryman.findAll();

      return res.json(findAllDelivers);
    }

    return res.json(findName);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Wrong informations' });
    }

    const { name, email } = await Deliveryman.create(req.body);

    return res.json({ name, email });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Wrong informations' });
    }

    const { name, email } = req.body;

    const deliveryman = await Deliveryman.findOne({ where: { name } });

    if (!name) {
      return res.status(400).json({ error: 'There is no one with this name' });
    }

    await deliveryman.update(req.body);

    return res.json({
      name,
      email,
    });
  }

  async delete(req, res) {
    const { name } = req.body;

    const deliveryman = await Deliveryman.findOne({ where: { name } });

    if (!name) {
      return res.status(400).json({ error: 'There is no one with this name' });
    }
    await deliveryman.destroy(req.body);

    return res.json({ message: 'Deleted' });
  }
}
export default new DeliverymanController();
