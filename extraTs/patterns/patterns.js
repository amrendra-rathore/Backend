"use strict";
exports.__esModule = true;
var string = "";
var i, j, k;
function equilateral(size) {
    if (size >= 2 && size <= 10) { // Condition to check if the input argument is within the range.
        for (i = 1; i <= size; i++) {
            for (j = size - 1; j >= i; j--) { //For loop to print the spaces.
                string += " ";
            }
            for (k = 1; k <= i; k++) { // For loop to print the "*"
                string += " *";
            }
            string += "\n";
        }
        console.log(string);
    }
    else
        console.log("Invalid Input, Please enter an integer between 2 and 10");
}
exports["default"] = equilateral;
