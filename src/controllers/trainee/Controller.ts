class Controller {
  public getTrainee = (req, res) => {
    res.send('Got a GET request for the Home Page!');
    // validator.[check("id").exists().withMessage("Id is required").isNumeric().withMessage("Id should be only number")]
  };

  public putTrainee = (req, res) => {
    res.send('Got a PUT request for the Home Page');
  };

  public postTrainee = (req, res) => {
    res.send('Got a POST request for the Web Page');
    // const { firstName, lastName, email, passwordc } = req.body;
    // validationResult(res)[check("id").exists().withMessage("Id is required").isNumeric().withMessage("Id should be only number")]

  };

  public deleteTrainee = (req, res) => {
    res.send('Got a DELETE request for the Web Page');
  //   if(errors.isempty())
  //   {
  //     res.json(errors.array())
  //   }
  //   else{
  //     if(id)
  //     {
  //       var result
  //     }
  //   }
  };
}

export default new Controller();
