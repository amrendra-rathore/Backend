import { regex } from "../extra/index.js";

// Function to validate email address
export default function validateEmail(email) {
  if (regex.test(email)) {
    return true;
  }
  else {
    return false;
  }
}
