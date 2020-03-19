import * as Yup from 'yup';
import { parseISO, getHours, isBefore } from 'date-fns';
import { Op } from 'sequelize';
import OrderManagement from '../models/OrderManagement';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';

import Mail from '../../lib/Mail';

class OrderManagementController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const Orders = await OrderManagement.findAll({
      where: {
        canceled_at: null,
      },
      order: ['created_at'],
      attributes: ['id', 'product'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: Recipient,
          as: 'destinatary',
          attributes: ['email', 'street'],
        },
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['id', 'name'],
        },
      ],
    });

    return res.json(Orders);
  }

  async allProducts(req, res) {
    const { product } = req.query;

    const findProductByName = await OrderManagement.findOne({
      where: { product: { [Op.iLike]: product } },
      order: ['product'],
    });

    if (!findProductByName) {
      const findAllProducts = await OrderManagement.findAll();

      return res.json(findAllProducts);
    }

    return res.json(findProductByName);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      product: Yup.string().required(),
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'All parameters must be filled' });
    }

    /*
      Check if destinatary exists by given Id
    */

    const destinatary = await Recipient.findByPk(req.body.recipient_id);

    if (!destinatary) {
      return res.status(400).json({ error: 'Invalid destinatary' });
    }

    /*
      Check if deliveryman exists by given Id
    */

    const deliver = Deliveryman.findByPk(req.body.deliveryman_id);

    if (!deliver) {
      return res
        .status(400)
        .json({ error: 'Inserted deliveryman does not exist' });
    }

    /*
      Register the order
    */

    const productRegistry = await OrderManagement.create(req.body);

    const findDeliveryman = await Deliveryman.findByPk(
      req.body.deliveryman_id,
      {
        attributes: ['name', 'email'],
      }
    );

    await Mail.sendMail({
      to: `${findDeliveryman.name} <${findDeliveryman.email}>`,
      subject: 'New Order',
      text: 'You have an new order',
    });

    return res.json(productRegistry);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
      start_date: Yup.date().required(),
      end_date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'All parameters must be filled' });
    }

    /*
    Transform given hours to ISO format
    */

    const parsedStartDate = parseISO(req.body.start_date);
    const parsedEndDate = parseISO(req.body.end_date);

    const hourParse = getHours(parsedStartDate);

    /*
    Check if the start date is between 8 and 18
    */

    if (hourParse < 8 || hourParse > 18) {
      return res
        .status(400)
        .json({ error: 'Invalid hour, it must be between 08:00 and 18:00' });
    }

    /*
    Check if the order is registered
    */

    const isIdValid = await OrderManagement.findByPk(req.body.id);

    if (!isIdValid) {
      return res.status(400).json({ error: 'Product id does not exists' });
    }

    /*
    Validate if end date is foward 08:00
    */

    const isFinished = isBefore(parsedEndDate, OrderManagement.start_date);

    if (OrderManagement.start_date && isFinished) {
      return res
        .status(400)
        .json({ error: 'You can not finish an order before delivering it' });
    }
    const { start_date, end_date } = req.body;

    const Order = await OrderManagement.update(req.body, {
      where: { id: req.body.id },
    });

    return res.json({
      Order,
      start_date,
      end_date,
    });
  }

  async delete(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'All parameters must be filled' });
    }

    const checkId = await OrderManagement.findByPk(req.body.id);

    if (!checkId) {
      return res.status(400).json({ error: "The order can't be found" });
    }

    await checkId.destroy();

    return res.json({ ok: `Order ${req.body.id} has been deleted` });
  }
}
export default new OrderManagementController();
