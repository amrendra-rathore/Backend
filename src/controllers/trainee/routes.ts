import * as express from 'express';
import Controller from './Controller';
import { checkSchema } from 'express-validator';
import validator from './validation';

const UserRouter = express.Router();

UserRouter.get('/', checkSchema(validator.get as any), Controller.getTrainee);
UserRouter.put('/', checkSchema(validator.update as any), Controller.putTrainee);
UserRouter.post('/user', checkSchema(validator.create as any), Controller.postTrainee);
UserRouter.delete('/user', checkSchema(validator.delete as any), Controller.deleteTrainee);

export default UserRouter;
