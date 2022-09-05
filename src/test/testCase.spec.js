// import Controller from '../controllers/trainee/Controller';
// const Controller = require('../controllers/trainee/Controller');
// const {userObj} = new Controller();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const { closeDatabase, connectDB } = require('./config/db');
const request = require('request');
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require("sinon");

const server = require('./config/server');

mongoose.Promise = global.Promise;

const { expect } = chai;
chai.should();
chai.use(chaiHttp);

describe("Authentication API", () => {
   before(async () => {
     await connectDB()
      .then(() => {
        console.log("DB Connected");
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  after(async () => {
    await closeDatabase();
  });

  //******Mongo Connection start before running test cases******
  // mongoose.connect('mongodb://localhost:27017/TestDB', {
  //   //   mongoose.connect('mongodb+srv://wolfraptor:covid19@usercluster.du1yrzd.mongodb.net/User', function () {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true
  // });
  // mongoose.connection
  //   .once("open", () => {
  //     console.log("Connected");
  //     done();
  //   })
  //   .on("error", (error) => {
  //     console.log("Error:", error);
  //     done();
  //   });

  // });
  // });
    describe("POST /SignUp", () => {
      describe("SUCCESS", () => {
        it("Should SignUp the user", (done) => {
          chai
            .request('http://localhost:9001')
            .post('/register')
            .send({ username: "ashray", password: "CoviD@111234", phone: "7878676743", telephone: "01202368919", email: "ashray@successive" })
            .end((err, res) => {
              // console.log(res);
              console.log(res.body);
              expect(200)
              expect(res.body).not.to.be.empty;
              expect(res.body).to.be.an('object');
              done()
            })
        })
      })
    describe("ERROR", () => {
      it("Should not signup if the user already exists in the database", (done) => {
        chai
          .request('http://localhost:9001')
          .post('/register')
          .send({ username: "ashray", password: "CoviD@111234", phone: "7878676743", telephone: "01202368919", email: "ashray@successive" })
          .end((err, res) => {
            expect(409);
            expect(res.body).not.to.be.empty;
            expect(res.body).to.be.an('object');
            done()
          })
      })
      it("Should not signup the user without a valid email", (done) => {
        chai
          .request(server)
          .post('/register')
          .send({ username: "ashray", password: "CoviD@111234", phone: "7878676743", telephone: "01202368919", email: "ashray@stech.com" })
          .end((err, res) => {
            expect(404)
            expect(res.body).not.to.be.empty;
            expect(res.body).to.be.an('object');
            done()
          })
      })
    })
  });
  describe("POST /login", () => {
    describe("SUCCESS", () => {
      it('Should success if credential is valiiiiid', (done) => {
        // const stubCase = sinon.stub(userObj, "login").returns({
        //   status: 200,
        //   message: "Authentication successful"
        // });
        // request(
        //   {
        //     url: 'http://localhost:9000/api/user/login'
        //   },
        //   function (err, res, body) {
        //     stubCase(0).should.have.status(200);
        //     stubCase(0).should.have.a("object");
        //     stubCase(0)
        //       .should.have.property("message")
        //       .eql("Authentication successful");
        //     done();
        //   }
        // );
        // stubCase.restore();
        chai
          .request(server)
          .post('/login')
          .send({ "email": 'ashray@successive.tech', "password": 'CoviD@111234' })
          .end((err, res) => {
            // console.log(res);
            expect(res).have.status(200);
            // res.should.have.status(200);
            expect(res).not.to.be.empty;
            expect(res).have.a('object');
            done();
          })
      });
    });
    // describe("ERROR", () => {
    //   it('Should not signin the user without email', (done) => {
    //     const stubCase = sinon.stub(userObj, "login").returns({
    //       status: 500,
    //       message: "Authentication Fail"
    //     });
    //     request(
    //       {
    //         url: 'http://localhost:9000/api/user/login'
    //       },
    //       function (err, res, body) {
    //         stubCase(0).should.have.status(500);
    //         stubCase(0).should.have.a("object");
    //         stubCase(0)
    //           .should.have.property("message")
    //           .eql("Authentication Fail");
    //         done();
    //       }
    //     );
    //     stubCase.restore();
    //   })
    //   it('Should not signin the user without correct password', (done) => {
    //     const stubCase = sinon.stub(userObj, "login").returns({
    //       status: 500,
    //       message: "Authentication Fail"
    //     });
    //     request(
    //       {
    //         url: 'http://localhost:9000/api/user/login'
    //       },
    //       function (err, res, body) {
    //         stubCase(0).should.have.status(500);
    //         stubCase(0).should.have.a("object");
    //         stubCase(0)
    //           .should.have.property("message")
    //           .eql("Authentication Fail");
    //         done();
    //       }
    //     );
    //     stubCase.restore();
    //   })
    // })
  });
  // Forget Password
  describe("POST /forgotPassword", () => {
    describe("SUCCESS", () => {
      it('Should success if the password reset request for an existing email is sent', (done) => {
        chai
          .request(server)
          .post('/forgotPassword')
          .send({ "email": 'ashray@successive.tech', "password": 'CoviD@11aa111234' })
          .end((err, res) => {
            expect(res).have.status(200);
            expect(res).not.to.be.empty;
            expect(res).have.a('object');
            done();
          })
      });
    });
    describe("ERROR", () => {
      it('Should not reset the password for an invalid email address', (done) => {
        chai
          .request(server)
          .post('/forgotPassword')
          .send({ email: "", password: "covid@1234" })
          .end((err, res) => {
            expect(res.body).have.status(404)
            done()
          })
      })
      it('Should not reset the password for an unregistered email address', (done) => {
        chai
          .request(server)
          .post('/forgotPassword')
          .send({ email: "ashray@cessive.tech", password: "CoviD@123" })
          .end((err, res) => {
            // console.log(res)
            expect(res.body).have.status(404)
            done()
          })
      })
    })
  });

  // Resend Verification Email Test Cases
  describe("POST /resendVerificationEmail", () => {
    describe("SUCCESS", () => {
      it('Should send the verification email to the user', (done) => {
        chai
          .request(server)
          .post('/resendVerificationEmail')
          .send({ email: "amrendra.rathore@successive.tech", password: "CoviD@11aa111234" })
          .end((err, res) => {
            expect(200)
            expect(res).not.to.be.empty;
            expect(res).have.a('object');
            done()
          })
      })
    })
    describe("ERROR", () => {
      it('Should not send the verification email to an unregistered email address', (done) => {
        chai
          .request(server)
          .post('/resendVerificationEmail')
          .send({ email: "ashray@google.tech", password: "CoviD@11aa111234" })
          .end((err, res) => {
            expect(409)
            expect(res).not.to.be.empty;
            expect(res).have.a('object');
            done()
          })
      })
      it('Should not send the verification email to an invalid email address', (done) => {
        chai
          .request(server)
          .post('/resendVerificationEmail')
          .send({ email: "ashray@successive", password: "CoviD@11aa111234" })
          .end((err, res) => {
            expect(409)
            expect(res).not.to.be.empty;
            expect(res).have.a('object');
            done()
          })
      })
    })
    it('Should not send the verification email in case of a server error', (done) => {
      chai
        .request(server)
        .post('/resendVerificationEmail')
        .send({})
        .end((err, res) => {
          expect(404)
          expect(res).not.to.be.empty;
          expect(res).have.a('object');
          done()
        })
    })
  })
});
