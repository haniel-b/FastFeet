import DeliveryProblems from '../models/DeliveryProblems';
import OrderManagement from '../models/OrderManagement';
import Deliveryman from '../models/Deliveryman';

import Mail from '../../lib/Mail';

class DeliveryProblemsController {
  async index(req, res) {
    const deliveryProblems = await DeliveryProblems.findAll({
      attributes: ['description'],
    });
    return res.json(deliveryProblems);
  }

  async indexID(req, res) {
    const { orderID } = req.params;

    const findByID = await DeliveryProblems.findByPk(orderID);

    return res.json(findByID);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      delivery_id: Yup.number().required(),
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Wrong informations' });
    }

    const { delivery_id, description } = await DeliveryProblems.create(
      req.body
    );

    return res.json({ delivery_id, description });
  }

  async delete(req, res) {
    const { problemID } = req.param;

    const problemDelete = await DeliveryProblems.findByPk(problemID);

    if (!problemDelete) {
      return res
        .status(400)
        .json({ error: "There's no problems registered at this given id" });
    }

    const findDeliveryman = await Deliveryman.findByPk(req.body.id, {
      attributes: ['name', 'email'],
    });

    await Mail.sendMail({
      to: `${findDeliveryman.name} <${findDeliveryman.email}>`,
      subject: 'Canceled Order',
      text:
        'Your order has been canceled, please, come back for more informations',
    });

    await DeliveryProblems.destroy(req.body);

    return res.json({ message: 'Deleted, sending email to deliveryman' });
  }
}
export default new DeliveryProblemsController();
