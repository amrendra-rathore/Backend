let str: string = '';
let i: number;
let j: number;
let k: number;

export default function equilateral(size: number) {
  if (size >= 2 && size <= 10) {  // Condition to check if the input argument is within the range.
    for (i = 1; i <= size; i++) {
      for (j = size - 1; j >= i; j--) {  // For loop to print the spaces.
        str += ' ';
      }
      for (k = 1; k <= i; k++) {       // For loop to print the "*"
        str += ' *';
      }
      str += '\n';
    }
    console.log(str);
  } else console.log('Invalid Input, Please enter an integer between 2 and 10');
}
