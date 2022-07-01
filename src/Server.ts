import * as express from 'express';
// import bodyParser from 'body-parser';
import { default as notFound } from './libs/routes/notFoundRoute';
import { default as errorHandler } from './libs/routes/errorHandler';

export default class Server {
  public app;
  private config;

  constructor(config){
    this.config = config;
    this.app = express();
  }

  public initBodyParser() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }
  public bootstrap(){
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }
  public setupRoutes()  {
    this.app.get("/health-check", function(req , res)  {
      res.send('I am OK');
    });

    this.app.use("/error", (req, res) => {
      throw new Error();
    });
    this.app.use(notFound);
    this.app.use(errorHandler);
  }
  public run()  {
    this.app.listen(this.config.port, () => {
    console.log('Listening on port', (this.config.port));
    });
  }
}
