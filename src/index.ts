import configurations from './config/configuration';
import Server from './Server';
import Database from './libs/Database';
import { mongo } from 'mongoose';

const server = new Server(configurations);
const { port } = configurations;
Database.open(mongo).then(() => {
  server.bootstrap().run();
}).catch(() => {
  console.log("DB not connected");
  console.log(`App is listening on a port: ${port}`);
});
