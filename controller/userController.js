import { User } from '../models/userSchema.js';

export const userByEmail = (req, res) => {
  const { email } = req.body;
  getUserByEmail(email, (err, user) => {
    if (!user) {
      res.status(404).send({
        status: 'NOT FOUND',
      });
    }
    res.send(user);
  });
};

export const getUserByEmail = (email, callback) => {
  User.findOne().where('email').equals(email).exec(callback);
};
