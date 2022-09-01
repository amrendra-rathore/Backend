import configurations from './config/configuration';
import Server from './Server';
import 'express-session';

const server = new Server(configurations);
const { port } = configurations;
server.bootstrap().run();

// Database.open(mongo).then(() => {
//   server.bootstrap().run();
// }).catch(() => {
//   console.log("DB not connected");
//   console.log(`App is listening on a port: ${port}`);
//   server.bootstrap().run();
// });
