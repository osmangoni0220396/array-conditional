// Question -1: Check if a number is odd or even using %.
// Solution - 1:
var number = 35;
var reminder = number % 2;
if (reminder === 0){
    console.log(number + " " + "is an even number");
}
else{
    console.log(number + " " + "is an odd number");
}

// Question - 2 : Sort any three numbers.
var x = 12;
var y = 12;
var z = 17;
if (x > y && y > z){
    console.log(x + " >" + y + " >" + z);
}
else if (y > x && x > z){
    console.log(y + " >" + x + " >" + z);
}
else if (y > z && z > x){
    console.log(y + " > " + z + " > " + x);
    
}
else if (z > x && x > y){
    console.log(z + " >" + x + " >" + y);
}
else {
    console.log("Invalid")
}
