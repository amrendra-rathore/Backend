import validateEmail from "./helper.js";
import { users } from '../extra/index.js';

// Function to validate Users in the above given array of objects.
export default function validateUsers() {
  var invalid = 0, valid = 0;
  users.forEach((x) => {
    if (validateEmail(x.traineeEmail) && validateEmail(x.reviewerEmail) == true) {
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