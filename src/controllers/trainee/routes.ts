import * as express from 'express';
import Controller from './Controller';

const UserRouter = express.Router();

UserRouter.get('/', Controller.getTrainee);
UserRouter.put('/', Controller.putTrainee);
UserRouter.post('/user', Controller.postTrainee);
UserRouter.delete('/user', Controller.deleteTrainee);

export default UserRouter;
