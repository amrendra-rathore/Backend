import * as express from 'express';
import UserRouter from './controllers/trainee/routes';

const router = express.Router();

router.use('/user', UserRouter);

export default router;
