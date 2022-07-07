// Run a loop row number of times for the pattern to be created.

let str: string = '';
let i: number;
let j: number;
let k: number;

export default function Diamond(size: number) {
  if (size >= 2 && size <= 10) {  // Condition to check if the input argument is within the range.
    for (i = 1; i <= size; i++) {
      for (j = 1; j <= size - i; j++) {
        str += ' ';
      }
      for (k = 0; k < 2 * i - 1; k++) {
        str += '*';
      }
      str += '\n';
    }

    for (i = 1; i <= size - 1; i++) {
      for (j = 0; j < i; j++) {
        str += ' ';
      }
      for (k = (size - i) * 2 - 1; k > 0; k--) {
        str += '*';
      }
      str += '\n';
    }
    console.log(str);
  } else console.log('Invalid Input, Please enter an integer between 2 and 10');
}
