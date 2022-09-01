import * as express from 'express';
import Controller from './Controller';
const userController = new Controller();
import { checkSchema } from 'express-validator';
import validator from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';

const UserRouter = express.Router();

// UserRouter.get('/', authMiddleWare("getUsers", "read"), userController.getTrainee);
// UserRouter.put('/', authMiddleWare("getUsers", "write"), checkSchema(validator.update as any), userController.putTrainee);
// UserRouter.post('/user', authMiddleWare("getUsers", "read"), checkSchema(validator.create as any), userController.postTrainee);
// UserRouter.delete('/user', authMiddleWare("getUsers", "read"), checkSchema(validator.delete as any), userController.deleteTrainee);
UserRouter.post('/login', userController.login);
// UserRouter.post('/register', userController.signup);

//UserRouter.get('/token', Controller.getTrainee);
UserRouter.get("/token", (req, res) => {
    res.send("hello");
  });

export default UserRouter;
