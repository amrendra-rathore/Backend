var arg = process.argv

function equilateral(size){
    if(size>=2 && size <=10){  // Condition to check if the input argument is within the range.
       for(var i=1;i<=size;i++){
            for(var s=size-1;s>=i;s--){  //For loop to print the spaces.
                process.stdout.write(" ");
            }
            for(var j=1;j<=i;j++){       // For loop to print the "*"
                process.stdout.write("* ");
            }
            console.log();
        }
    }
    else console.log("Invalid Input, Please enter an integer between 2 and 10");
}

equilateral(arg[2]);
