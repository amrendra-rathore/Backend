import { regex } from '../index';

// Function to validate email address
export default function validateEmail(email: string) {
  if (regex.test(email)) {
    return true;
  }

  return false;
}
