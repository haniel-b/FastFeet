import { Op } from 'sequelize';
import { parseISO, startOfDay, endOfDay } from 'date-fns';
import OrderManagement from '../models/OrderManagement';

class DeliverymanRegController {
  async indexNoDelivered(req, res) {
    const { id } = req.params;

    const findOrder = await OrderManagement.findOne({
      where: { deliveryman_id: id, canceled_at: null, end_date: null },
      order: ['created_at'],
      attributes: ['id', 'product'],
    });

    if (!findOrder) {
      return res.status(400).json({ error: "There's no orders with your id" });
    }

    return res.json(findOrder);
  }

  async indexDelivered(req, res) {
    const { id } = req.params;

    const findOrder = await OrderManagement.findOne({
      where: {
        deliveryman_id: id,
        end_date: {
          [Op.eq]: null,
        },
      },
      order: ['created_at'],
      attributes: ['id', 'product'],
    });

    if (!findOrder) {
      return res.status(400).json({ error: "There's no orders with your id" });
    }

    return res.json(findOrder);
  }

  async getDate(req, res) {
    const { start_date, signature_id, id, end_date } = req.body;

    const parsedDate = parseISO(start_date);

    const insertDate = await OrderManagement.findAll({
      where: { deliveryman_id: id },
      start_date: {
        [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)],
      },
    });

    if (insertDate.length > 5) {
      return res.status(400).json({ error: 'You cannot put more dates!' });
    }

    await OrderManagement.update(
      { start_date },
      { where: { deliveryman_id: id } }
    );

    if (end_date && signature_id) {
      await OrderManagement.update(
        { end_date, signature_id },
        { where: { deliveryman_id: id } }
      );

      return res.json({ message: 'Successful! ' });
    }
    return res.json();
  }
}

export default new DeliverymanRegController();
