import { config } from 'dotenv';
import { IConfig } from './IConfig';

config();
const configurations: IConfig = {
  nodeEnv: process.env.NODE_ENV,
  port: parseInt(process.env.PORT),
  secret: process.env.SECRET
};
Object.freeze(configurations);
export default configurations;
