import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel';
import { generateToken } from '../utils';

const userRouter = express.Router();

/* Using expressAsyncHandler to prevent unhandled error and stop running application */
// @ GET
// @ /createadmin
userRouter.get(
  '/createadmin',
  expressAsyncHandler(async (req, res) => {
    try {
      const user = new User({
        name: 'admin',
        email: 'admin@admin.com',
        password: 'admin',
        isAdmin: true,
      });

      const createdUser = await user.save();
      res.send(createdUser);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  })
);

// @ POST
// @ /signin
userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const signinUser = await User.findOne({
      email: req.body.email,
      password: req.body.password
    });

    if (!signinUser) {
      res.status(401).send({
        message: 'Invalid Email or Password!',
      });
    } else {
      res.send({
        id: signinUser._id,
        name: signinUser.name,
        email: signinUser.email,
        isAdmin: signinUser.isAdmin,
        token: generateToken(signinUser),
      })
    }
  })
);

export default userRouter;
