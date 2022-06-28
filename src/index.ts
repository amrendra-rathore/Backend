import configurations from './config/configuration';
import Server from "./Server";

let server = new Server(configurations);
server.bootstrap().run();
