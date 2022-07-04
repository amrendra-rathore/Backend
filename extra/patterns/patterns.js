var arg = process.argv

let string = "";

export default function equilateral(size) {
  if (size >= 2 && size <= 10) {  // Condition to check if the input argument is within the range.
    for (let i = 1; i <= size; i++) {
      for (let s = size - 1; s >= i; s--) {  //For loop to print the spaces.
        str += " ";
      }
      for (let j = 1; j <= i; j++) {       // For loop to print the "*"
        str += " *";
      }
      str += "\n";
    }
    console.log(str);
  } else console.log("Invalid Input, Please enter an integer between 2 and 10");
}
