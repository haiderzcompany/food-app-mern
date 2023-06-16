import bcrypt from 'bcryptjs';
import User from '../models/User.js';
export const registerUser = (req, res) => {
  let errors = {};
  User.findOne()
    .or([{ username: req.body.username }, { email: req.body.email }])
    .then((user) => {
      if (user) {
        if (user.username === req.body.username) {
          errors.username = 'Username Already Exists';
        }
        if (user.email === req.body.email) {
          errors.email = 'Email Already Exists';
        }
        return res.status(400).json(errors);
      } else {
        const newUser = User({
          username: req.body.username,
          location: req.body.location,
          email: req.body.email,
          password: req.body.password,
        });
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (hashErr, hashPass) => {
            newUser.password = hashPass;
            newUser.save().then((user) => {
              return res.status(200).json(user);
            });
          });
        });
      }
    });
};
