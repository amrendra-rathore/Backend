import configurations from './config/configuration';
import Server from "./Server";

const server = new Server(configurations);
server.bootstrap().run();
