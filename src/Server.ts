import * as express from 'express';

export default class Server {
  public app;
  private config;
  constructor(config){
    this.config = config;
    this.app = express();
  }
  public bootstrap(){
    this.setupRoutes();
    return this;
  }
  public setupRoutes()  {
    this.app.get("/health-check", (req , res) => {
      res.send('I am OK');
    });
  }
  public run()  {
    this.app.listen(this.config.port, () => {
    console.log('Listening on port', (this.config.port));
    });
  }
}
