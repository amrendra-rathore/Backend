import * as express from 'express';
import Controller from './Controller';
import { checkSchema } from 'express-validator';
import validator from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';

const UserRouter = express.Router();

UserRouter.get('/',  authMiddleWare("getUsers", "read"), checkSchema(validator.get as any), Controller.getTrainee);
UserRouter.put('/', authMiddleWare("getUsers", "write"), checkSchema(validator.update as any), Controller.putTrainee);
UserRouter.post('/user', authMiddleWare("getUsers", "read"), checkSchema(validator.create as any), Controller.postTrainee);
UserRouter.delete('/user', authMiddleWare("getUsers", "read"), checkSchema(validator.delete as any), Controller.deleteTrainee);

UserRouter.get('/token', authMiddleWare("getUsers", "write"));

export default UserRouter;
