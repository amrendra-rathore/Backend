//Run a loop row number of times for the pattern to be created.
var arg = process.argv

let string = "";
function Diamond(size)  {
    if(size>=2 && size <=10){  // Condition to check if the input argument is within the range.
        for (let i = 1; i <= size; i++) {
            for (let j = 1; j <= size - i; j++) {
                string += " ";
            }
            for (let k = 0; k < 2 * i - 1; k++) {
                string += "*";
            }
            string += "\n";
        }

        for (let i = 1; i <= size - 1; i++) {
            for (let j = 0; j < i; j++) {
                string += " ";
            }
            for (let k = (size - i) * 2 - 1; k > 0; k--) {
                string += "*";
            }
            string += "\n";
        }
    console.log(string);
    } else console.log("Invalid Input, Please enter an integer between 2 and 10");
}
Diamond(arg[2]);
