import validateEmail from './helper.js';

// Function to validate Users in the above given array of objects.
export default function validateUsers(users) {
  let invalid: number = 0;
  let valid: number = 0;
  users.map((x) => {
    if (validateEmail(x.traineeEmail) && validateEmail(x.reviewerEmail) === true) {
      console.log('Trainee Email is' + x.traineeEmail);
      console.log('Reviewer Email is' + x.reviewerEmail);
      valid++;
    } else {
      console.log('Invalid Email');
      invalid++;
    }
  });
  console.log('Valid User Count:' + valid);
  console.log('Invalid User Count:' + invalid);
}

// validateEmail(arg[2]);
// validateUsers(users);
