class Controller {
  public getTrainee = (req, res) => {
    res.send('Got a GET request for the Home Page!');
  };

  public putTrainee = (req, res) => {
    res.send('Got a PUT request for the Home Page');
  };

  public postTrainee = (req, res) => {
    res.send('Got a POST request for the Web Page');
  };

  public deleteTrainee = (req, res) => {
    res.send('Got a DELETE request for the Web Page');
  };
}

export default new Controller();
