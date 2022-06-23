var arg = process.argv;

var users = [
  {
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
  },
  {
    traineeEmail: 'trainee2@successive.tech',
    reviewerEmail: 'reviewer2@g.tech',
  },
  {
    traineeEmail: 'trainee121@successive.tech',
    reviewerEmail: 'reviewer101@successive.tech',
  }
  ];

  let regex = /^([A-Za-z0-9_\-\.])+\@(successive.tech)$/;

// Function to validate email address
  let validateEmail = (email) => {
    if (regex.test(email)){
      return true;
    }
    else {
      return false;
    }
  };

// Function to validate Users in the above given array of objects.
function validateUsers() {
  var invalid = 0, valid = 0;
  users.map((x) => {
    if(validateEmail(x.traineeEmail) && validateEmail(x.reviewerEmail) == true){
      console.log("Trainee Email is " + x.traineeEmail);
      console.log("Reviewer Email is " + x.reviewerEmail);
      valid++;
    }
    else {
      console.log("Invalid Email");
      invalid++;
    }
  });
  console.log("Valid User Count:" + valid);
  console.log("Invalid User Count:" + invalid);
}

validateEmail(arg[2]);
validateUsers(users);
