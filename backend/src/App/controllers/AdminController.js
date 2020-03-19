import * as Yup from 'yup';
import { Op } from 'sequelize';
import Recipient from '../models/Recipient';

class AdminController {
  async index(req, res) {
    const { name } = req.query;

    const packages = await Recipient.findAll({
      where: { name: { [Op.iLike]: name } },
    });

    if (!packages) {
      const allPackages = await Recipient.findAll();

      return res.json(allPackages);
    }

    return res.json(packages);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      street: Yup.string().required(),
      name: Yup.string().required(),
      house_number: Yup.string().required(),
      complement: Yup.string().required(),
      state: Yup.string()
        .required()
        .min(2),
      city: Yup.string().required(),
      cep: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Wrong informations' });
    }

    const {
      email,
      name,
      street,
      house_number,
      complement,
      state,
      city,
      cep,
    } = await Recipient.create(req.body);

    return res.json({
      email,
      name,
      street,
      house_number,
      complement,
      state,
      city,
      cep,
    });
  }
}

export default new AdminController();
