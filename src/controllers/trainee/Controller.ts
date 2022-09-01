import UserSchema from "../../model/user";
// const UserSchema = require("../../model/user");

export default class Controller {
    // public getTrainee = (req, res) => {
    //     res.send('Got a GET request for the Home Page!');
    //     console.log("INNNNN");
    // };

    // public putTrainee = (req, res) => {
    //     res.send('Got a PUT request for the Home Page');
    // };

    // public postTrainee = (req, res) => {
    //     res.send('Got a POST request for the Web Page');
    // };

    // public deleteTrainee = (req, res) => {
    //     res.send('Got a DELETE request for the Web Page');
    // };
    async login(req, res) {
        // res.send('Got a LOGIN request for the user');
        console.log("Inside Router -----> ");
        // const userData = await UserSchema.find({
        //     email: req.body.email
        //   })
        //     if (err) res.send({ status: 500, message: "Server Error" });
        //     if (result.length != 0) {
        //       // console.log("res", result[0].password, req.body.password, typeof result.password, typeof req.body.password);
        //       if ((result[0]?.password == req.body.password) && (result[0]?.email == req.body.email)) {
        //         res.json({ status: 200, message: "Authentication successful" })
        //       }
        //       else {
        //         res.json({ status: 500, message: "Authentication Fail" })
        //         // console.log(result);
        //       }
        //     } else {
        //       res.json({ status: 500, message: 'Error, Invalid Credentials' })
        //     }
        try {
            const user = await UserSchema.find({ email: req.body.email });
            if (!user) {
                throw new Error("User not found!");
            }
            // const isValid = await bcrypt.compare(password, user.password);
            // if (!isValid) {
            //   throw new customError(constants.userMessage.INVALID_CRED, 401);
            // }
            if (user) {
                // console.log("res", result[0].password, req.body.password, typeof result.password, typeof req.body.password);
                if ((user[0]?.password == req.body.password) && (user[0]?.email == req.body.email)) {
                    res.json({ status: 200, message: "Authentication successful" })
                }
                else {
                    res.json({ status: 500, message: "Authentication Fail" })
                    // console.log(result);
                }
            } else {
                res.json({ status: 500, message: 'Error, Invalid Credentials' })
            }
        } catch (error) {
            console.log("Something went wrong: Service: login -> ", error.statusCode);
            throw new Error(error);
        }

    }
    async signup(req, res) {
        try {
            console.log("SignUp API");
            const user = await UserSchema.find({ email: req.body.email });
            const regex = /^([A-Za-z0-9_\-\.])+\@(successive.tech)$/;
            const userDetails = new UserSchema(req.body)
            if (regex.test(req.body.email)) {
                if (user) {
                    userDetails.save((err) => {
                        if (!err) {
                            console.log("No Error");
                        }
                        else {
                            // console.log('Error during record insertion');
                            res.json({ status: 200 });
                        }
                    })
                    res.json({ status: 200, message: "User created successfully" });
                }
                else {
                    return res.json({ status: 409, message: "User already exists" });
                    console.log(res);
                }
            } else {
                return res.json({ status: 404, message: "Invalid Email Address" });
            }
        }
        catch (error) {
            console.log("Something went wrong: Service: login -> ", error.statusCode);
            throw new Error(error);
        }
    }
    // public signup = (req, res) => {
    //     res.send('Got a SignUp request for a new user');
    // };
    // public forgotPassword = (req, res) => {
    //     res.send('Got a Password Reset request for an existing user');
    // };
    // public resendVerificationEmail = (req, res) => {
    //     res.send('Got a new verification email request for a user')
    // };
}

// module.exports = Controller;
// export default new Controller();