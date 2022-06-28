import { config } from "dotenv";
import { IConfig } from "./IConfig";
config();
const configurations: IConfig = {
  nodeEnv: process.env.NODE_ENV,
  port: Number(process.env.PORT)
};
Object.freeze(configurations);
export default configurations;
