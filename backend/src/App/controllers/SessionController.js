import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import Admin from '../models/Admin';
import auth from '../../config/auth';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails, try again' });
    }

    const adminCheckEmail = await Admin.findOne({
      where: { email: req.body.email },
    });
    if (!adminCheckEmail) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const admin = await Admin.findOne({
      where: { email: req.body.email },
    });

    const adminCheckPassword = req.body.password;

    if (
      adminCheckPassword &&
      !(await admin.checkPassword(adminCheckPassword))
    ) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const { id, name, email, password_hash } = admin;

    return res.json({
      admin: {
        id,
        name,
        email,
        password_hash,
      },
      token: jwt.sign({ id }, auth.secret, {
        expiresIn: auth.expiresIn,
      }),
    });
  }
}
export default new SessionController();
